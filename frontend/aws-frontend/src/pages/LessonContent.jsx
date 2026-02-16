import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  ArrowLeft,
  Sparkles,
  Terminal,
  ChevronRight,
  CheckCircle2,
  XCircle,
  AlertCircle
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

  const [output, setOutput] = useState("");
  const [isRunning, setIsRunning] = useState(false);
  const [feedback, setFeedback] = useState(null);
  const [isSuccess, setIsSuccess] = useState(false);

  // Fetch lesson
  useEffect(() => {
    const fetchLesson = async () => {
      try {
        setLoading(true);
        setFeedback(null);
        setOutput("");
        setIsSuccess(false);

        const res = await axios.get(`http://localhost:5000/api/lessons/${id}`);
        const currentLesson = res.data.lesson || res.data;
        setLesson(currentLesson);

        const allRes = await getLessons();
        const sorted = (allRes.data.lessons || []).sort(
          (a, b) => a.lessonNumber - b.lessonNumber
        );

        const currentIndex = sorted.findIndex(l => l._id === id);
        if (currentIndex !== -1 && currentIndex < sorted.length - 1) {
          setNextLessonId(sorted[currentIndex + 1]._id);
        }

      } catch (err) {
        console.error("Error loading lesson:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchLesson();
  }, [id]);

  // 🔥 FREE Judge0 Community Execution
  const handleRunCode = async (code) => {
    if (!code.trim()) return;

    setIsRunning(true);
    setFeedback("Running code...");
    setIsSuccess(false);

    try {
      const response = await fetch(
        "https://ce.judge0.com/submissions/?base64_encoded=false&wait=true",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            language_id: 62, // Java
            source_code: code
          })
        }
      );

      const data = await response.json();

      const cleanOutput = (data.stdout || "").trim();
      const stderr = (data.stderr || data.compile_output || "").trim();

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
          setFeedback(
            serverFeedback ||
            `Mission Accomplished! ${xpAwarded > 0 ? `(+${xpAwarded} XP)` : ''}`
          );
          await refreshProfile();
        } else {
          if (stderr) {
            setFeedback(serverFeedback || "Compilation Error. Check console.");
          } else {
            setFeedback(
              serverFeedback ||
              `Output Mismatch.\nExpected: "${expected}"\nActual: "${cleanOutput}"`
            );
          }
        }

      } catch (error) {
        console.error("DB Save Failed:", error);
        if (isCorrect) setFeedback("Mission Complete! (Offline Mode)");
        else setFeedback("Connection to HQ failed.");
      }

    } catch (err) {
      console.error(err);
      setOutput("Execution Error.");
      setFeedback("Judge0 server unreachable.");
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

  const isError =
    output.toLowerCase().includes("error") ||
    output.toLowerCase().includes("exception");

return (
  <div className="min-h-[calc(100vh-6rem)] w-full bg-gradient-to-br from-[#0B1120] via-[#0D1628] to-[#0A0F1C] px-6 py-8">
    
    <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-10">

      {/* LEFT PANEL */}
      <motion.div
        initial={{ x: -30, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        className="w-full lg:w-[45%] space-y-6"
      >
        <button
          onClick={() => navigate('/progress')}
          className="flex items-center gap-2 text-xs text-slate-400 hover:text-sky-400 transition"
        >
          <ArrowLeft size={14} /> Back
        </button>

        <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-6 shadow-xl">
          <div className="flex items-center gap-2 text-sky-400 text-xs font-semibold uppercase tracking-wider">
            <Sparkles size={14} /> Mission {lesson?.lessonNumber}
          </div>

          <h1 className="text-3xl font-extrabold text-white mt-3">
            {lesson?.title}
          </h1>

          <p className="text-slate-300 whitespace-pre-line text-sm mt-4 leading-relaxed">
            {lesson?.concept}
          </p>
        </div>
      </motion.div>

      {/* RIGHT PANEL */}
      <motion.div
        initial={{ x: 30, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        className="w-full lg:w-[55%] flex flex-col gap-6"
      >

        {/* Editor Card */}
        <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl overflow-hidden shadow-2xl">
          <div className="h-80">
            <CodeEditor
              initialCode={lesson?.starterCode}
              onRun={handleRunCode}
              onChange={() => {}}
            />
          </div>
        </div>

        {/* AI Feedback ABOVE Console */}
        {feedback && (
          <div className={`rounded-2xl border p-4 text-sm backdrop-blur-xl shadow-lg ${
            isSuccess
              ? "bg-emerald-900/30 border-emerald-500/30 text-emerald-100"
              : isError
                ? "bg-rose-900/30 border-rose-500/30 text-rose-100"
                : "bg-amber-900/30 border-amber-500/30 text-amber-100"
          }`}>
            <div className="flex items-start gap-3">
              {isSuccess ? (
                <CheckCircle2 className="text-emerald-400 mt-0.5" size={18} />
              ) : isError ? (
                <XCircle className="text-rose-400 mt-0.5" size={18} />
              ) : (
                <AlertCircle className="text-amber-400 mt-0.5" size={18} />
              )}
              <div className="whitespace-pre-line">
                {feedback}
              </div>
            </div>
          </div>
        )}

        {/* Console */}
        <div className="backdrop-blur-xl bg-black/40 border border-white/10 rounded-2xl p-4 font-mono text-xs shadow-inner h-36 flex flex-col">
          <div className="flex justify-between text-slate-400 text-[10px] uppercase mb-2">
            <span className="flex items-center gap-2">
              <Terminal size={12} /> Console Output
            </span>
            {isRunning && (
              <span className="text-sky-400 animate-pulse">Running...</span>
            )}
          </div>

          <pre className={`flex-1 overflow-y-auto whitespace-pre-wrap ${
            isError ? "text-rose-400" : "text-sky-300"
          }`}>
            {output || "// Ready for execution..."}
          </pre>
        </div>

        {/* Next Button */}
        {isSuccess && nextLessonId && (
          <Button
            variant="primary"
            onClick={() => navigate(`/lesson/${nextLessonId}`)}
            className="self-end"
          >
            Next Lesson <ChevronRight size={16} />
          </Button>
        )}

      </motion.div>
    </div>
  </div>
);
}
