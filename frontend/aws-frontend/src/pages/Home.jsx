import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Snowflake, 
  Trophy, 
  ArrowRight, 
  Code2, 
  Cpu 
} from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen w-full overflow-x-hidden bg-[#0B1120] text-white selection:bg-sky-500/30">
      
      {/* --- Background Effects --- */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] h-125 w-125 rounded-full bg-sky-600/20 blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] h-125 w-125 rounded-full bg-blue-700/10 blur-[120px]" />
      </div>

      {/* --- Landing Navbar --- */}
      <nav className="relative z-50 mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 px-4 py-4 sm:px-6 sm:py-6">
        <div className="flex items-center gap-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-linear-to-br from-sky-400 to-blue-600 shadow-lg shadow-sky-500/20">
            <Snowflake className="text-white" size={20} strokeWidth={2.5} />
          </div>
          <span className="text-lg sm:text-xl font-black tracking-tighter text-white">
            SNOW<span className="text-sky-400">VAULT</span>
          </span>
        </div>

        <div className="flex items-center gap-4">
          <Link 
            to="/login" 
            className="text-sm font-semibold text-slate-300 transition-colors hover:text-white"
          >
            Log In
          </Link>

          <Link 
            to="/signup" 
            className="rounded-lg bg-white/10 px-4 py-2 text-sm font-bold text-white transition-all hover:bg-white/20 hover:scale-105 sm:px-5 sm:py-2.5"
          >
            Sign Up
          </Link>
        </div>
      </nav>

      {/* --- Hero Section --- */}
      <main className="relative z-10 mx-auto max-w-7xl px-4 pt-12 pb-20 text-center sm:px-6 sm:pt-16 sm:pb-32 lg:pt-24">
        
        {/* Badge */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-6 sm:mb-8 flex w-fit items-center gap-2 rounded-full border border-sky-500/30 bg-sky-500/10 px-4 py-1.5 text-xs sm:text-sm font-medium text-sky-300 backdrop-blur-md"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-sky-400 opacity-75"></span>
            <span className="relative inline-flex h-2 w-2 rounded-full bg-sky-500"></span>
          </span>
          v1.0 Now Live
        </motion.div>

        {/* Headline */}
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mx-auto max-w-4xl text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight text-white lg:leading-tight"
        >
          Master Programing in the <br />
          <span className="bg-linear-to-r from-sky-300 via-blue-400 to-indigo-400 bg-clip-text text-transparent">
            Deep Freeze
          </span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mx-auto mt-6 sm:mt-8 max-w-2xl text-base sm:text-lg md:text-xl text-slate-400 leading-relaxed"
        >
          The interactive coding platform where you solve challenges, earn XP, 
          and unlock new territories. No setup required—just code.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-8 sm:mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <Link 
            to="/signup"
            className="group flex w-full sm:w-auto items-center justify-center gap-2 rounded-xl bg-sky-500 px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-bold text-white transition-all hover:bg-sky-400 hover:shadow-[0_0_30px_-5px_rgba(14,165,233,0.4)]"
          >
            Start Your Journey
            <ArrowRight size={20} className="transition-transform group-hover:translate-x-1" />
          </Link>

          <Link 
            to="/login"
            className="flex w-full sm:w-auto items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/5 px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-bold text-white transition-all hover:bg-white/10"
          >
            Continue Path
          </Link>
        </motion.div>

        {/* --- Feature Grid --- */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-20 sm:mt-24 md:mt-32 grid gap-6 md:grid-cols-3"
        >
          <FeatureCard 
            icon={<Code2 className="text-sky-400" size={28} />}
            title="Interactive Editor"
            desc="Write and run Java code directly in your browser. No complex IDE setup needed."
          />
          <FeatureCard 
            icon={<Trophy className="text-amber-400" size={28} />}
            title="Gamified Progress"
            desc="Earn XP, unlock badges, and level up your rank from Novice to Ice Monarch."
          />
          <FeatureCard 
            icon={<Cpu className="text-indigo-400" size={28} />}
            title="Smart Feedback"
            desc="Get instant analysis on your code. We catch errors before they freeze your progress."
          />
        </motion.div>

        {/* --- Code Preview --- */}
        <motion.div
           initial={{ opacity: 0, scale: 0.9 }}
           animate={{ opacity: 1, scale: 1 }}
           transition={{ duration: 0.8, delay: 0.7 }}
           className="mt-20 sm:mt-32 overflow-hidden rounded-2xl border border-white/10 bg-[#0F172A] shadow-2xl"
        >
          <div className="flex items-center gap-2 border-b border-white/5 bg-white/5 px-4 py-3">
            <div className="flex gap-1.5">
              <div className="h-3 w-3 rounded-full bg-red-500/80" />
              <div className="h-3 w-3 rounded-full bg-amber-500/80" />
              <div className="h-3 w-3 rounded-full bg-emerald-500/80" />
            </div>
            <span className="ml-4 text-xs font-mono text-slate-500">Mission_01.java</span>
          </div>

          <div className="p-4 sm:p-6 text-left font-mono text-xs sm:text-sm md:text-base">
            <div className="text-slate-400">
              <span className="text-purple-400">public class</span> <span className="text-yellow-200">SnowVault</span> {'{'}
            </div>
            <div className="pl-4 text-slate-400">
              <span className="text-purple-400">public static void</span> <span className="text-blue-400">main</span>(String[] args) {'{'}
            </div>
            <div className="pl-8 text-slate-400">
              <span className="text-slate-500">// Your journey begins here</span>
            </div>
            <div className="pl-8 text-slate-400">
              System.out.<span className="text-blue-300">println</span>(<span className="text-emerald-300">"Hello, Explorer!"</span>);
            </div>
            <div className="pl-4 text-slate-400">{'}'}</div>
            <div className="text-slate-400">{'}'}</div>
          </div>
        </motion.div>

      </main>

      <footer className="border-t border-white/5 py-8 sm:py-10 text-center text-xs sm:text-sm text-slate-600">
        <p>&copy; 2026 SnowVault. Built for the code warriors.</p>
      </footer>
    </div>
  );
}

function FeatureCard({ icon, title, desc }) {
  return (
    <div className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/2 p-6 sm:p-8 text-left transition-all hover:border-sky-500/30 hover:bg-white/4 hover:shadow-2xl hover:shadow-sky-500/10">
      <div className="mb-5 sm:mb-6 inline-flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-2xl bg-white/5 shadow-inner ring-1 ring-white/10 group-hover:scale-110 group-hover:bg-white/10 transition-transform">
        {icon}
      </div>
      <h3 className="mb-3 text-lg sm:text-xl font-bold text-white">{title}</h3>
      <p className="text-sm sm:text-base text-slate-400 leading-relaxed">{desc}</p>
    </div>
  );
}
