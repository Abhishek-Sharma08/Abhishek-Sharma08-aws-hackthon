import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  User,
  Terminal,
  Cpu,
  Database,
  Copy,
  Check,
  Shield
} from 'lucide-react';
import { useUser } from '../context/UserContext';
import XpBadge from '../components/XpBadge';
import Loader from '../components/Loader';
import axios from 'axios';

export default function Profile() {
  const { userData } = useUser();
  const [submissions, setSubmissions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [copiedId, setCopiedId] = useState(null);

  useEffect(() => {
    const fetchHistory = async () => {
      try {
        const token = localStorage.getItem('token');
        if (!token) return;

        const res = await axios.get(
          'http://localhost:5000/api/submissions/me',
          { headers: { Authorization: `Bearer ${token}` } }
        );

        setSubmissions(res.data.submission || []);
      } catch (err) {
        console.error("Archive fetch error:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchHistory();
  }, []);

  const handleCopy = (code, id) => {
    if (!code) return;
    navigator.clipboard.writeText(code);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  if (loading) {
    return (
      <div className="h-[calc(100vh-6rem)] bg-[#0B1120] flex items-center justify-center">
        <Loader message="Accessing Archive..." />
      </div>
    );
  }

  return (
    <div className="h-[calc(100vh-6rem)] bg-[#0B1120] text-white px-4 sm:px-6 py-6 flex flex-col overflow-hidden">

      {/* REMOVE max-w-4xl so it matches parent width */}
      <div className="w-full flex flex-col h-full space-y-6">

        {/* ================= PROFILE SECTION ================= */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          className="rounded-xl border border-white/10 bg-slate-900/60 p-4 sm:p-6 backdrop-blur-md"
        >
          <div className="flex items-center justify-between gap-4">

            <div className="flex items-center gap-4 min-w-0">

              {/* Avatar */}
              <div className="relative shrink-0">
                <div className="absolute -inset-1 bg-sky-500/20 rounded-lg blur-sm" />
                <div className="relative h-14 w-14 sm:h-16 sm:w-16 rounded-lg bg-linear-to-br from-sky-400 to-blue-600 flex items-center justify-center shadow-md">
                  <User size={24} className="text-white" />
                </div>
              </div>

              {/* Name + Badges */}
              <div className="space-y-2 min-w-0">
                <h1 className="text-lg sm:text-2xl font-black uppercase truncate">
                  {userData?.name || "Agent"}
                </h1>

                <div className="flex flex-wrap gap-3">
                  <div className="flex items-center gap-1 px-3 py-1 rounded-md bg-sky-500/10 border border-sky-500/20 text-xs font-bold text-sky-400 uppercase">
                    <Cpu size={12} />
                    {userData?.difficulty || "Beginner"}
                  </div>

                  <div className="flex items-center gap-1 px-3 py-1 rounded-md bg-white/5 border border-white/5 text-xs font-bold text-slate-400 uppercase">
                    <Database size={12} />
                    {submissions.length} Logs
                  </div>
                </div>
              </div>
            </div>

            {/* XP Badge */}
            <div className="shrink-0">
              <XpBadge
                xp={userData?.xp || 0}
                level={userData?.level || 1}
              />
            </div>
          </div>
        </motion.div>

        {/* ================= ARCHIVE SECTION ================= */}
        <div className="flex-1 flex flex-col overflow-hidden">

          <div className="flex items-center gap-2 mb-4">
            <Shield size={16} className="text-sky-500" />
            <h2 className="text-xs font-black uppercase tracking-[0.3em] text-slate-500">
              Encrypted Mission Archive
            </h2>
          </div>

          {/* SINGLE COLLECTIVE SCROLL */}
          <div className="archive-scroll flex-1 overflow-y-auto space-y-5 pr-2">

            {submissions.length > 0 ? (
              submissions.map((sub, index) => (
                <motion.div
                  key={sub._id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.04 }}
                  className="rounded-2xl border border-white/5 bg-slate-900/40 hover:border-sky-500/30 transition-all"
                >

                  {/* HEADER */}
                  <div className="flex items-center justify-between px-4 py-3 bg-white/2 border-b border-white/5">
                    <div className="flex items-center gap-3 min-w-0">
                      <Terminal size={14} className="text-sky-500 shrink-0" />
                      <span className="text-xs font-bold text-slate-500 uppercase shrink-0">
                        #{sub.lesson?.lessonNumber || '??'}
                      </span>
                      <span className="text-sm font-bold text-white truncate">
                        {sub.lesson?.title || "Protocol"}
                      </span>
                    </div>

                    <button
                      onClick={() => handleCopy(sub.submittedCode, sub._id)}
                      className="p-2 rounded-md bg-white/5 hover:bg-sky-500/20 text-slate-500 hover:text-sky-400 transition-all"
                    >
                      {copiedId === sub._id
                        ? <Check size={14} className="text-emerald-400" />
                        : <Copy size={14} />}
                    </button>
                  </div>

                  {/* CODE AREA */}
                  <div className="p-4">
                    <div className="rounded-xl border border-white/5 bg-black/60 overflow-x-auto">
                      <pre className="p-4 font-mono text-sm text-sky-200/70 whitespace-pre-wrap wrap-break-word">
                        {sub.submittedCode || "// Data stream empty"}
                      </pre>
                    </div>
                  </div>

                </motion.div>
              ))
            ) : (
              <div className="py-16 text-center border border-dashed border-white/10 rounded-2xl">
                <p className="text-xs font-black uppercase tracking-widest text-slate-600">
                  No Data Detected
                </p>
              </div>
            )}

          </div>
        </div>
      </div>

      {/* MATCHED SNOWVAULT SCROLLBAR */}
      <style>{`
        .archive-scroll::-webkit-scrollbar {
          width: 6px;
        }

        .archive-scroll::-webkit-scrollbar-track {
          background: transparent;
        }

        .archive-scroll::-webkit-scrollbar-thumb {
          background: linear-gradient(
            to bottom,
            rgba(56, 189, 248, 0.4),
            rgba(14, 165, 233, 0.4)
          );
          border-radius: 999px;
        }

        .archive-scroll::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(
            to bottom,
            rgba(56, 189, 248, 0.7),
            rgba(14, 165, 233, 0.7)
          );
        }

        .archive-scroll {
          scrollbar-width: thin;
          scrollbar-color: rgba(56, 189, 248, 0.5) transparent;
        }
      `}</style>

    </div>
  );
}




