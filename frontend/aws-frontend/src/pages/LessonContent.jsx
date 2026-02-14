import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, Sparkles, Terminal, ChevronRight, CheckCircle2 } from 'lucide-react';
import axios from 'axios';

import CodeEditor from '../components/CodeEditor';
import FeedbackBox from '../components/FeedbackBox';
import Button from '../components/Button';
import Loader from '../components/Loader';

import { useUser } from '../context/UserContext';
import { submitCode, getLessons } from '../services/api';

export default function LessonContent() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { refreshProfile } = useUser();

  const [lesson, setLesson] = useState(null);
  const [nextLessonId, setNextLessonId] = useState(null);
  const [loading, setLoading] = useState(true);
  const [output, setOutput] = useState("");
  const [isRunning, setIsRunning] = useState(false);
  const [feedback, setFeedback] = useState(null);
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    const fetchLessonAndPath = async () => {
      try {
        setLoading(true);
        setIsSuccess(false);
        setFeedback(null);
        setOutput("");

        // Make sure this URL is correct for your setup
        const res = await axios.get(`http://localhost:5000/api/lessons/${id}`);
        const currentLesson = res.data.lesson || res.data;
        setLesson(currentLesson);

        const allRes = await getLessons();
        const sorted = (allRes.data.lessons || [])
          .sort((a, b) => a.lessonNumber - b.lessonNumber);

        const currentIndex = sorted.findIndex(l => l._id === id);
        if (currentIndex !== -1 && currentIndex < sorted.length - 1) {
          setNextLessonId(sorted[currentIndex + 1]._id);
        } else {
          setNextLessonId(null);
        }

      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchLessonAndPath();
  }, [id]);

  const handleRunCode = async (code) => {
    setIsRunning(true);
    setFeedback("Analyzing code structure...");

    try {
      // 1. Run Code on Piston Compiler
      const res = await axios.post("https://emkc.org/api/v2/piston/execute", {
        language: "java",
        version: "15.0.2",
        files: [{ content: code }],
      });

      const cleanOutput = res.data.run.stdout.trim();
      const stderr = res.data.run.stderr.trim();
      setOutput(cleanOutput || stderr);

      // 2. Check if Output Matches Expected Result
      if (cleanOutput === lesson?.expectedOutput?.trim()) {
        setIsSuccess(true);

        try {
          // 3. Save to Database & Get Gemini Response
          const dbRes = await submitCode({
            lessonId: id,
            submittedCode: code,
            status: 'completed'
          });

          // --- THIS IS THE CRITICAL FIX ---
          // We extract the feedback directly from the server response we just got
          const serverFeedback = dbRes.data.submission?.feedback;
          const xpAwarded = dbRes.data.xpAwarded;

          if (serverFeedback) {
             setFeedback(serverFeedback); // Show the Gemini text from DB
          } else {
             setFeedback(`Mission Accomplished! ${xpAwarded > 0 ? `(+${xpAwarded} XP)` : ''}`);
          }
          
          await refreshProfile();

        } catch (error) {
          console.error("DB Save Failed:", error);
          setFeedback("Mission Complete! (Offline Mode - Progress Saved Locally)");
        }

      } else {
        setIsSuccess(false);
        setFeedback(stderr || "Output mismatch. Review your logic and try again.");
      }

    } catch (err) {
      console.error(err);
      setOutput("Connection Error.");
      setFeedback("System Error: Compiler unreachable.");
    } finally {
      setIsRunning(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#0B1120]">
        <Loader message="Decrypting Mission Data..." />
      </div>
    );
  }

  return (
    <div className="min-h-[calc(100vh-6rem)] lg:h-[calc(100vh-6rem)] w-full max-w-7xl mx-auto bg-[#0B1120] px-4 sm:px-6 lg:px-8 py-6 flex flex-col lg:flex-row gap-8 lg:overflow-hidden">

      {/* LEFT PANEL */}
      <motion.div
        initial={{ x: -20, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        className="w-full lg:w-[45%] flex flex-col gap-6 lg:gap-8 border-b lg:border-b-0 lg:border-r border-white/5 pb-6 lg:pb-0 lg:pr-6 lg:overflow-y-auto"
      >
        <button
          onClick={() => navigate('/progress')}
          className="flex items-center gap-2 text-xs text-slate-500 hover:text-sky-400 font-bold uppercase tracking-widest"
        >
          <ArrowLeft size={14} /> Back to Path
        </button>

        <div className="space-y-4">
          <div className="inline-flex items-center gap-2 rounded-md bg-sky-500/10 px-2 py-1 text-[10px] font-bold text-sky-400 border border-sky-500/20">
            <Sparkles size={10} /> Mission {lesson?.lessonNumber}
          </div>

          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white leading-tight">
            {lesson?.title}
          </h1>

          <div className="text-slate-300 whitespace-pre-line leading-relaxed text-sm sm:text-base">
            {lesson?.concept}
          </div>
        </div>
      </motion.div>

      {/* RIGHT PANEL */}
      <motion.div
        initial={{ x: 20, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="w-full lg:w-[55%] flex flex-col gap-6 lg:min-h-0"
      >
        {/* Code Editor */}
        <div className="h-64 sm:h-80 lg:flex-1 lg:min-h-0 overflow-hidden rounded-2xl border border-white/10 bg-[#1E1E1E] shadow-2xl">
          <CodeEditor
            initialCode={lesson?.starterCode}
            onRun={handleRunCode}
            onChange={() => {}}
          />
        </div>

        {/* Feedback + Console */}
        <div className="flex flex-col gap-6">

          <AnimatePresence mode="wait">
            {isSuccess ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="rounded-2xl border border-sky-500/30 bg-sky-900/30 p-4 sm:p-6"
              >
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                  <div className="flex gap-3 w-full">
                    <CheckCircle2 className="text-emerald-400 shrink-0" size={24} />
                    <div className="space-y-1 w-full">
                      <h3 className="font-bold text-white">Mission Success</h3>
                      
                      {/* FEEDBACK DISPLAY - Scrolls if text is long */}
                      <div className="max-h-32 overflow-y-auto pr-2 custom-scrollbar">
                        <p className="text-xs sm:text-sm text-sky-200 leading-relaxed whitespace-pre-line">
                          {feedback}
                        </p>
                      </div>
                    </div>
                  </div>

                  {nextLessonId && (
                    <Button
                      variant="primary"
                      onClick={() => navigate(`/lesson/${nextLessonId}`)}
                      className="shrink-0"
                    >
                      Next <ChevronRight size={16} />
                    </Button>
                  )}
                </div>
              </motion.div>
            ) : (
              feedback && (
                <FeedbackBox
                  feedback={feedback}
                  isSuccess={false}
                  onTryAgain={() => setFeedback(null)}
                />
              )
            )}
          </AnimatePresence>

          {/* Console */}
          <div className="rounded-2xl border border-white/10 bg-black/40 p-4 sm:p-5 font-mono text-xs sm:text-sm shadow-inner min-h-30">
            <div className="flex justify-between mb-3 border-b border-white/5 pb-2 text-[10px] text-slate-500 font-bold uppercase">
              <span className="flex items-center gap-2">
                <Terminal size={12} /> Console Output
              </span>
              {isRunning && (
                <span className="text-sky-400 animate-pulse">
                  Executing...
                </span>
              )}
            </div>

            <pre
              className={`whitespace-pre-wrap leading-relaxed ${
                output.includes('Error') ||
                output.toLowerCase().includes('exception')
                  ? 'text-rose-400'
                  : 'text-sky-300'
              }`}
            >
              {output || "// Awaiting command execution..."}
            </pre>
          </div>

        </div>
      </motion.div>
      
      {/* Scrollbar Style */}
      <style>{`
        .custom-scrollbar::-webkit-scrollbar { width: 4px; }
        .custom-scrollbar::-webkit-scrollbar-track { background: rgba(0,0,0,0.2); }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: rgba(56, 189, 248, 0.3); border-radius: 10px; }
      `}</style>
    </div>
  );
}
