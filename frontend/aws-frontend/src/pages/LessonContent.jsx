import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowLeft, 
  Sparkles, 
  Terminal, 
  ChevronRight, 
  CheckCircle2, 
  XCircle, 
  AlertCircle,
  X 
} from 'lucide-react';
import axios from 'axios';

import CodeEditor from '../components/CodeEditor';
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
  
  // State for Code Execution & Feedback
  const [output, setOutput] = useState("");
  const [isRunning, setIsRunning] = useState(false);
  const [feedback, setFeedback] = useState(null);
  const [isSuccess, setIsSuccess] = useState(false);

  // 1. Fetch Lesson Data
  useEffect(() => {
    const fetchLessonAndPath = async () => {
      try {
        setLoading(true);
        setIsSuccess(false);
        setFeedback(null);
        setOutput("");

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
        console.error("Error loading lesson:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchLessonAndPath();
  }, [id]);

  // 2. Handle Run Code
  const handleRunCode = async (code) => {
    setIsRunning(true);
    setFeedback("Analyzing..."); // Shortened text
    setIsSuccess(false);

    try {
      // Execute on Piston
      const res = await axios.post("https://emkc.org/api/v2/piston/execute", {
        language: "java",
        version: "15.0.2",
        files: [{ content: code }],
      });

      const cleanOutput = res.data.run.stdout.trim();
      const stderr = res.data.run.stderr.trim();
      
      setOutput(cleanOutput || stderr);

      const expected = lesson?.expectedOutput?.trim();
      const isCorrect = cleanOutput === expected && !stderr;
      
      setIsSuccess(isCorrect);

      try {
        const dbRes = await submitCode({
          lessonId: id,
          submittedCode: code,
          status: isCorrect ? 'completed' : 'failed' 
        });

        const responseData = dbRes.data || dbRes;
        const serverFeedback = responseData.submission?.feedback;
        const xpAwarded = responseData.xpAwarded;

        if (isCorrect) {
          if (serverFeedback) setFeedback(serverFeedback);
          else setFeedback(`Mission Accomplished! ${xpAwarded > 0 ? `(+${xpAwarded} XP)` : ''}`);
          await refreshProfile(); 
        } else {
          if (stderr) setFeedback(serverFeedback || "Syntax Error: Check console for details.");
          else setFeedback(serverFeedback || `Output Mismatch.\nExpected: "${expected}"\nActual: "${cleanOutput}"`);
        }

      } catch (error) {
        console.error("DB Save Failed:", error);
        if (isCorrect) setFeedback("Mission Complete! (Offline Mode)");
        else setFeedback("Connection to HQ failed.");
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

  // Helper to determine error styles
  const isError = output.toLowerCase().includes('error') || output.toLowerCase().includes('exception');

  return (
    <div className="min-h-[calc(100vh-6rem)] lg:h-[calc(100vh-6rem)] w-full max-w-7xl mx-auto bg-[#0B1120] px-4 sm:px-6 lg:px-8 py-6 flex flex-col lg:flex-row gap-6 lg:overflow-hidden">

      {/* LEFT PANEL */}
      <motion.div
        initial={{ x: -20, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        className="w-full lg:w-[45%] flex flex-col gap-4 lg:gap-6 border-b lg:border-b-0 lg:border-r border-white/5 pb-6 lg:pb-0 lg:pr-6 lg:overflow-y-auto"
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

          <h1 className="text-2xl sm:text-3xl font-black text-white leading-tight">
            {lesson?.title}
          </h1>

          <div className="text-slate-300 whitespace-pre-line leading-relaxed text-sm">
            {lesson?.concept}
          </div>
        </div>
      </motion.div>

      {/* RIGHT PANEL */}
      <motion.div
        initial={{ x: 20, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="w-full lg:w-[55%] flex flex-col gap-4 lg:min-h-0"
      >
        {/* Code Editor */}
        <div className="h-64 sm:h-72 lg:flex-1 lg:min-h-0 overflow-hidden rounded-xl border border-white/10 bg-[#1E1E1E] shadow-2xl">
          <CodeEditor
            initialCode={lesson?.starterCode}
            onRun={handleRunCode}
            onChange={() => {}}
          />
        </div>

        {/* COMPACT FEEDBACK & CONSOLE WRAPPER */}
        <div className="flex flex-col gap-3 shrink-0">

          <AnimatePresence mode="wait">
            {/* SUCCESS CARD */}
            {isSuccess && (
              <motion.div
                key="success"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="rounded-xl border border-emerald-500/30 bg-emerald-900/20 p-3"
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="flex gap-3 w-full overflow-hidden">
                    <CheckCircle2 className="text-emerald-400 shrink-0 mt-0.5" size={20} />
                    <div className="space-y-1 min-w-0">
                      <h3 className="font-bold text-sm text-white">Mission Success</h3>
                      <div className="max-h-16 overflow-y-auto pr-2 custom-scrollbar">
                        <p className="text-xs text-emerald-100/80 leading-relaxed whitespace-pre-line">
                          {feedback}
                        </p>
                      </div>
                    </div>
                  </div>

                  {nextLessonId && (
                    <Button
                      variant="primary"
                      onClick={() => navigate(`/lesson/${nextLessonId}`)}
                      className="shrink-0 px-3 py-1.5 text-xs h-auto"
                    >
                      Next <ChevronRight size={14} />
                    </Button>
                  )}
                </div>
              </motion.div>
            )}

            {/* ERROR CARD (COMPACT) */}
            {!isSuccess && feedback && !isRunning && (
              <motion.div
                key="error"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className={`rounded-xl border p-3 shadow-lg relative ${
                  isError
                    ? "border-rose-500/30 bg-rose-950/40"
                    : "border-amber-500/30 bg-amber-950/40"
                }`}
              >
                {/* Close Button Top Right */}
                <button 
                  onClick={() => setFeedback(null)} 
                  className="absolute top-3 right-3 text-white/30 hover:text-white transition-colors"
                >
                  <X size={14} />
                </button>

                <div className="flex gap-3 pr-6"> {/* Padding right for close button */}
                  {isError ? (
                     <XCircle className="text-rose-400 shrink-0 mt-0.5" size={20} />
                  ) : (
                     <AlertCircle className="text-amber-400 shrink-0 mt-0.5" size={20} />
                  )}
                  
                  <div className="min-w-0 flex-1">
                    <h3 className={`font-bold text-sm mb-1 ${
                      isError ? "text-rose-200" : "text-amber-200"
                    }`}>
                      {isError ? "Compilation Failed" : "Logic Error"}
                    </h3>
                    
                    {/* Compact Scrollable Text */}
                    <div className="max-h-[70px] overflow-y-auto pr-2 custom-scrollbar">
                      <p className={`text-xs leading-relaxed whitespace-pre-line ${
                        isError ? "text-rose-100/80" : "text-amber-100/80"
                      }`}>
                        {feedback}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* CONSOLE (Fixed Height) */}
          <div className="rounded-xl border border-white/10 bg-black/40 p-3 font-mono text-xs shadow-inner h-32 flex flex-col">
            <div className="flex justify-between mb-2 border-b border-white/5 pb-1 text-[10px] text-slate-500 font-bold uppercase shrink-0">
              <span className="flex items-center gap-2">
                <Terminal size={12} /> Console Output
              </span>
              {isRunning && (
                <span className="text-sky-400 animate-pulse">Running...</span>
              )}
            </div>

            <pre
              className={`whitespace-pre-wrap leading-relaxed flex-1 overflow-y-auto custom-scrollbar ${
                isError ? 'text-rose-400' : 'text-sky-300'
              }`}
            >
              {output || <span className="text-slate-700">// Ready for execution...</span>}
            </pre>
          </div>

        </div>
      </motion.div>
      
      <style>{`
        .custom-scrollbar::-webkit-scrollbar { width: 3px; }
        .custom-scrollbar::-webkit-scrollbar-track { background: transparent; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: rgba(255, 255, 255, 0.15); border-radius: 10px; }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover { background: rgba(255, 255, 255, 0.3); }
      `}</style>
    </div>
  );
}
