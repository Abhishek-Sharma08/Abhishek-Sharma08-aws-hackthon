import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import {
  CheckCircle2,
  Snowflake,
  Mountain,
  Crown,
  ArrowRight,
  AlertCircle,
  Settings2
} from 'lucide-react';
import { updateStats } from '../services/api';
import { useUser } from '../context/UserContext';

const SKILL_LEVELS = [
  {
    value: 'beginner',
    title: 'Frost Novice',
    description: 'I am just getting started. I need to learn the basics.',
    icon: <Snowflake className="h-6 w-6 text-sky-300" />,
    gradient: 'from-sky-500/20 to-blue-600/5'
  },
  {
    value: 'intermediate',
    title: 'Glacier Walker',
    description: 'I can solve common tasks but want to go deeper.',
    icon: <Mountain className="h-6 w-6 text-indigo-300" />,
    gradient: 'from-indigo-500/20 to-violet-600/5'
  },
  {
    value: 'advanced',
    title: 'Ice Monarch',
    description: 'I am comfortable with complex algorithms and architecture.',
    icon: <Crown className="h-6 w-6 text-amber-200" />,
    gradient: 'from-amber-500/20 to-orange-600/5'
  }
];

function SkillCheck() {
  const navigate = useNavigate();
  const { refreshProfile } = useUser();

  const [selectedLevel, setSelectedLevel] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState({ type: '', message: '' });

  const handleLevelChange = (level) => {
    setSelectedLevel((prev) => (prev === level ? '' : level));
    setStatus({ type: '', message: '' });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!selectedLevel) {
      setStatus({ type: 'error', message: 'Please select a path to begin.' });
      return;
    }

    try {
      setIsSubmitting(true);
      setStatus({ type: '', message: '' });

      await updateStats({
        difficulty: selectedLevel
      });

      await refreshProfile();

      setStatus({
        type: 'success',
        message: 'Difficulty preference updated. Retaining current XP.'
      });

      setTimeout(() => navigate('/progress'), 1500);
    } catch (error) {
      const backendMessage = error?.response?.data?.message;
      setStatus({
        type: 'error',
        message: backendMessage || 'Connection frozen. Please try again.'
      });
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex min-h-[85vh] w-full items-center justify-center p-4 bg-[#0B1120] overflow-x-hidden relative">

      {/* Glow Effects (contained properly) */}
      <div className="pointer-events-none absolute -top-20 -left-20 h-64 w-64 rounded-full bg-sky-500/20 blur-[100px]" />
      <div className="pointer-events-none absolute -bottom-20 -right-20 h-64 w-64 rounded-full bg-indigo-500/20 blur-[100px]" />

      <div className="relative w-full max-w-3xl">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="relative overflow-hidden rounded-3xl border border-white/10 bg-[#0f172a]/80 p-8 shadow-2xl backdrop-blur-2xl md:p-12"
        >
          {/* Header */}
          <div className="mb-10 text-center">
            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-linear-to-tr from-sky-400 to-blue-600 shadow-lg shadow-sky-500/30">
              <Settings2 className="h-8 w-8 text-white" />
            </div>

            <h1 className="bg-linear-to-b from-white to-white/70 bg-clip-text text-3xl font-bold tracking-tight text-transparent md:text-4xl">
              Calibrate Experience
            </h1>

            <p className="mt-3 text-lg text-slate-400">
              Select a difficulty tier. This determines which missions are visible.
              <br />
              <span className="text-sm text-emerald-400 font-bold uppercase tracking-wider">
                Note: Your XP & Level will NOT be reset.
              </span>
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="grid gap-4 md:grid-cols-3">
              {SKILL_LEVELS.map((option) => {
                const isSelected = selectedLevel === option.value;

                return (
                  <div
                    key={option.value}
                    onClick={() => handleLevelChange(option.value)}
                    className={`group relative flex cursor-pointer flex-col rounded-2xl border p-5 transition-all duration-300
                      ${
                        isSelected
                          ? 'border-sky-400 bg-sky-900/20 shadow-[0_0_30px_-5px_rgba(56,189,248,0.3)] ring-1 ring-sky-400'
                          : 'border-white/5 bg-white/5 hover:border-white/20 hover:bg-white/10 hover:-translate-y-1'
                      }`}
                  >
                    <div
                      className={`absolute right-4 top-4 h-3 w-3 rounded-full transition-colors duration-300 
                      ${
                        isSelected
                          ? 'bg-sky-400 shadow-[0_0_8px_rgba(56,189,248,0.8)]'
                          : 'bg-white/10 group-hover:bg-white/20'
                      }`}
                    />

                    <div
                      className={`mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-linear-to-br ${option.gradient} border border-white/5`}
                    >
                      {option.icon}
                    </div>

                    <h3
                      className={`text-lg font-semibold ${
                        isSelected ? 'text-white' : 'text-slate-200'
                      }`}
                    >
                      {option.title}
                    </h3>

                    <p className="mt-2 text-sm leading-relaxed text-slate-400">
                      {option.description}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* Status */}
            <div className="min-h-12 flex items-center justify-center">
              {status.message && (
                <div
                  className={`flex items-center gap-3 rounded-lg border px-4 py-3 text-sm font-medium w-full justify-center
                    ${
                      status.type === 'error'
                        ? 'border-red-500/20 bg-red-500/10 text-red-200'
                        : 'border-emerald-500/20 bg-emerald-500/10 text-emerald-200'
                    }`}
                >
                  {status.type === 'error' ? (
                    <AlertCircle size={18} />
                  ) : (
                    <CheckCircle2 size={18} />
                  )}
                  {status.message}
                </div>
              )}
            </div>

            {/* Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className={`group relative flex w-full items-center justify-center gap-2 overflow-hidden rounded-xl py-4 text-base font-bold text-white transition-all duration-300
                ${
                  isSubmitting
                    ? 'bg-slate-700/50 cursor-not-allowed opacity-60'
                    : 'bg-linear-to-r from-sky-500 to-blue-600 shadow-lg shadow-sky-500/20 hover:shadow-xl hover:shadow-sky-500/50 hover:brightness-110'
                }`}
            >
              {isSubmitting ? (
                <>
                  <div className="h-5 w-5 animate-spin rounded-full border-2 border-white/30 border-t-white" />
                  <span>Calibrating...</span>
                </>
              ) : (
                <>
                  <span>Confirm Path</span>
                  <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                </>
              )}
            </button>
          </form>
        </motion.div>
      </div>
    </div>
  );
}

export default SkillCheck;

