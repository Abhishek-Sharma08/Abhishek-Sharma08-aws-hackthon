import { motion } from 'framer-motion';
import { Zap, Crown, Snowflake, Star, Flame } from 'lucide-react';

export default function XpBadge({ xp, level }) {
  // --- 1. SMART LEVEL CALCULATION ---
  // Sometimes the database 'level' lags behind the 'xp'.
  // We calculate the REAL level on the fly so the UI is always correct.
  // Formula: Level = floor(0.1 * sqrt(XP)) + 1
  const calculatedLevel = Math.floor(0.1 * Math.sqrt(xp)) + 1;
  
  // Use the higher value. If DB says Lvl 1 but XP says Lvl 2, show Lvl 2.
  const displayLevel = Math.max(level, calculatedLevel);

  // --- 2. EXPONENTIAL MATH ---
  // XP needed for Level L = ((L-1) * 10)^2
  const currentLevelBaseXP = Math.pow((displayLevel - 1) * 10, 2);
  const nextLevelBaseXP = Math.pow(displayLevel * 10, 2);
  
  const xpNeededForNextLevel = nextLevelBaseXP - currentLevelBaseXP;
  const xpProgressInCurrentLevel = xp - currentLevelBaseXP;
  
  // Percentage Calculation
  const progressPercent = Math.min(100, Math.max(0, (xpProgressInCurrentLevel / xpNeededForNextLevel) * 100));

  // --- 3. DYNAMIC VISUALS ---
  const getIcon = () => {
    if (displayLevel >= 50) return <Crown size={14} className="text-amber-400" />;
    if (displayLevel >= 30) return <Flame size={14} className="text-orange-400" />;
    if (displayLevel >= 20) return <Star size={14} className="text-purple-400" />;
    if (displayLevel >= 10) return <Zap size={14} className="text-yellow-400" />;
    return <Snowflake size={14} className="text-sky-300" />;
  };

  const getGradient = () => {
    if (displayLevel >= 50) return 'bg-gradient-to-r from-amber-500 via-orange-500 to-red-500';
    if (displayLevel >= 30) return 'bg-gradient-to-r from-orange-500 to-rose-500';
    if (displayLevel >= 20) return 'bg-gradient-to-r from-purple-500 to-indigo-500';
    if (displayLevel >= 10) return 'bg-gradient-to-r from-yellow-400 to-orange-500';
    return 'bg-gradient-to-r from-sky-400 via-blue-500 to-indigo-500';
  };

  // Remaining XP to next level
  const xpRemaining = Math.max(0, nextLevelBaseXP - xp);

  return (
    <div className="flex flex-col items-end gap-1.5">
      {/* Top Row: Level Label & Total XP */}
      <div className="flex items-center gap-3">
        <div className="flex items-center gap-1.5 rounded-lg bg-slate-800/80 px-2.5 py-1 border border-white/5 shadow-sm transition-all hover:bg-slate-800">
           {getIcon()}
           <span className="text-xs font-black uppercase tracking-wider text-slate-300">
             Lvl <span className="text-white text-sm">{displayLevel}</span>
           </span>
        </div>
        
        <div className="text-right hidden sm:block">
          <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mr-2">Total XP</span>
          <span className="text-sm font-black text-white tabular-nums">
            {xp.toLocaleString()}
          </span>
        </div>
      </div>

      {/* Progress Bar Container */}
      <div className="relative h-2 w-32 sm:w-40 overflow-hidden rounded-full bg-slate-800 border border-white/5">
        <motion.div 
          initial={{ width: 0 }}
          animate={{ width: `${progressPercent}%` }}
          transition={{ duration: 1.5, ease: "circOut" }}
          className={`absolute h-full rounded-full shadow-[0_0_10px_rgba(56,189,248,0.4)] ${getGradient()}`}
        />
      </div>
      
      {/* Bottom Text */}
      <div className="text-[9px] font-bold text-slate-500 uppercase tracking-wider">
        <span>{xpRemaining} XP to Level {displayLevel + 1}</span>
      </div>
    </div>
  );
}