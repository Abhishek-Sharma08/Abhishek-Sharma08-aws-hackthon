import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  Map,
  Lock,
  Play,
  Flame,
  Zap,
  Snowflake,
  AlertTriangle
} from 'lucide-react';
import { getLessons } from '../services/api';
import { useUser } from '../context/UserContext';

const getDifficultyColor = (diff) => {
  switch (diff?.toLowerCase()) {
    case 'hard': return 'text-rose-400 bg-rose-400/10 border-rose-400/20';
    case 'medium': return 'text-amber-400 bg-amber-400/10 border-amber-400/20';
    default: return 'text-sky-400 bg-sky-400/10 border-sky-400/20';
  }
};

const getDifficultyIcon = (diff) => {
  switch (diff?.toLowerCase()) {
    case 'hard': return <Flame size={14} />;
    case 'medium': return <Zap size={14} />;
    default: return <Snowflake size={14} />;
  }
};

export default function Progress() {
  const [lessons, setLessons] = useState([]);
  const [loading, setLoading] = useState(true);
  const { userData } = useUser();

  const userDifficulty = userData?.difficulty || 'beginner';
  const userXP = userData?.xp || 0;

  const completedLessonIds = (userData?.completedLessons || []).map(idOrObj =>
    typeof idOrObj === 'object' ? idOrObj.lesson?._id : idOrObj
  );

  useEffect(() => {
    const fetchJourney = async () => {
      try {
        setLoading(true);
        const response = await getLessons();
        const sorted = (response.data.lessons || [])
          .sort((a, b) => a.lessonNumber - b.lessonNumber);
        setLessons(sorted);
      } catch (err) {
        console.error("Journey blocked:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchJourney();
  }, []);

  const filteredLessons = lessons.filter(lesson => {
    const lessonDiff = lesson.difficulty?.toLowerCase() || 'easy';
    if (userDifficulty === 'beginner') return lessonDiff === 'easy';
    if (userDifficulty === 'intermediate') return lessonDiff === 'medium';
    if (userDifficulty === 'advanced') return lessonDiff === 'hard';
    return lessonDiff === 'easy';
  });

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[#0B1120]">
        <div className="h-10 w-10 animate-spin rounded-full border-4 border-sky-500/30 border-t-sky-400" />
      </div>
    );
  }

  return (
    <div className="min-h-screen w-full px-4 sm:px-6 md:px-10 lg:px-12 py-8 bg-[#0B1120]">
      
      {/* INJECTED CUSTOM SCROLLBAR STYLES */}
      <style>{`
        .mission-scroll::-webkit-scrollbar {
          width: 6px;
        }
        .mission-scroll::-webkit-scrollbar-track {
          background: rgba(255, 255, 255, 0.02);
          border-radius: 10px;
        }
        .mission-scroll::-webkit-scrollbar-thumb {
          background: rgba(56, 189, 248, 0.2);
          border-radius: 10px;
        }
        .mission-scroll::-webkit-scrollbar-thumb:hover {
          background: rgba(56, 189, 248, 0.4);
        }
      `}</style>

      {/* HEADER */}
      <div className="mb-10 flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <div className="flex items-center gap-2 text-xs sm:text-sm font-bold uppercase tracking-wider text-sky-500">
            <Map size={14} />
            Your Journey
          </div>

          <h1 className="mt-2 text-2xl sm:text-4xl md:text-5xl font-black text-white tracking-tight leading-tight">
            {userDifficulty === 'beginner'
              ? "The Frost Path"
              : userDifficulty === 'intermediate'
              ? "The Glacier Path"
              : "The Core Path"}
          </h1>

          <div className="mt-3 flex items-center gap-3 text-xs sm:text-sm text-slate-400">
            <span>
              Clearance: 
              <span className={`ml-2 font-bold ${
                userDifficulty === 'advanced' ? "text-rose-400" : 
                userDifficulty === 'intermediate' ? "text-amber-400" : "text-sky-400"
              }`}>
                {userDifficulty === 'beginner' ? "Frost Novice (Easy)" : 
                 userDifficulty === 'intermediate' ? "Glacier Walker (Medium)" : "Ice Monarch (Hard)"}
              </span>
            </span>
          </div>
        </div>

        {/* Stats Box */}
        <div className="flex items-center gap-4 rounded-2xl border border-white/10 bg-slate-900/60 px-6 py-4 backdrop-blur-md">
          <div className="text-right">
            <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Progress</p>
            <p className="text-xl sm:text-2xl font-black text-white">
              {filteredLessons.filter(l => completedLessonIds.includes(l._id)).length}
              <span className="text-slate-600 text-base">/{filteredLessons.length}</span>
            </p>
          </div>
          <div className="h-10 w-px bg-white/10" />
          <div className="text-right">
            <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Total XP</p>
            <p className="text-xl sm:text-2xl font-black text-sky-400">{userXP.toLocaleString()}</p>
          </div>
        </div>
      </div>

      {/* SCROLLABLE LESSON AREA */}
      <div className="mission-scroll max-h-[calc(100vh-280px)] overflow-y-auto pr-2">
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 pb-10">
          {filteredLessons.length > 0 ? (
            filteredLessons.map((lesson, index) => {
              const isFirstLesson = index === 0;
              const prevLessonId = index > 0 ? filteredLessons[index - 1]._id : null;
              const isUnlocked = isFirstLesson || completedLessonIds.includes(prevLessonId);
              const isCompleted = completedLessonIds.includes(lesson._id);

              return (
                <div
                  key={lesson._id}
                  className={`group relative flex flex-col justify-between overflow-hidden rounded-3xl border p-5 transition-all duration-300
                    ${!isUnlocked
                      ? 'border-white/5 bg-white/5 opacity-50 grayscale'
                      : isCompleted
                        ? 'border-emerald-500/30 bg-emerald-500/5'
                        : 'border-white/10 bg-slate-800/40 hover:-translate-y-1 hover:border-sky-500/30 hover:shadow-2xl hover:shadow-sky-500/10'
                    }
                  `}
                >
                  <div className="mb-4 flex items-start justify-between">
                    <span className={`flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[10px] font-black uppercase tracking-wider ${getDifficultyColor(lesson.difficulty)}`}>
                      {getDifficultyIcon(lesson.difficulty)}
                      {lesson.difficulty || 'Easy'}
                    </span>
                    {isCompleted ? (
                      <span className="text-[10px] font-black text-emerald-400 uppercase tracking-widest">Completed</span>
                    ) : (
                      <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest">#{lesson.lessonNumber}</span>
                    )}
                  </div>

                  <div className="mb-6">
                    <h3 className={`text-lg sm:text-xl font-bold transition-colors ${
                      isUnlocked ? 'text-white group-hover:text-sky-300' : 'text-slate-500'
                    }`}>
                      {lesson.title}
                    </h3>
                    <p className="mt-2 text-xs sm:text-sm text-slate-400 line-clamp-2 leading-relaxed">
                      {lesson.concept || lesson.goal}
                    </p>
                  </div>

                  {!isUnlocked ? (
                    <div className="flex w-full items-center justify-center gap-2 rounded-xl border border-white/5 bg-white/5 py-3 text-xs font-black uppercase tracking-widest text-slate-600">
                      <Lock size={14} /> Locked
                    </div>
                  ) : (
                    <Link
                      to={`/lesson/${lesson._id}`}
                      className={`flex w-full items-center justify-center gap-2 rounded-xl py-3 text-xs font-black uppercase tracking-widest transition-all ${
                        isCompleted
                          ? 'bg-emerald-600 text-white hover:bg-emerald-500'
                          : 'bg-sky-600 text-white hover:bg-sky-500 shadow-lg shadow-sky-900/20'
                      }`}
                    >
                      <Play size={14} fill="currentColor" />
                      {isCompleted ? 'Review Mission' : 'Start Mission'}
                    </Link>
                  )}
                </div>
              );
            })
          ) : (
            <div className="col-span-full flex flex-col items-center justify-center rounded-3xl border border-dashed border-white/10 bg-white/5 p-12 text-center">
              <AlertTriangle size={28} className="text-slate-500 mb-4" />
              <h3 className="text-lg font-bold text-white">No Missions Found</h3>
              <p className="text-slate-400 max-w-md mt-2 text-sm">
                There are no missions available for the <strong>{userDifficulty}</strong> path yet.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}