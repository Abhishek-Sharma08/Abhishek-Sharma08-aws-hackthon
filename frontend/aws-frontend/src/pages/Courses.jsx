import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Coffee, ArrowRight } from 'lucide-react';
import { useUser } from '../context/UserContext';

export default function Courses() {
  const navigate = useNavigate();
  const { userData } = useUser();

  const handleEnterProtocol = (courseId) => {
    if (courseId === 'java') {
      if (!userData?.difficulty) {
        navigate('/skill-check');
      } else {
        navigate('/progress');
      }
    }
  };

  const courses = [
    {
      id: 'java',
      title: 'Java Mastery',
      description:
        'Master the fundamentals of object-oriented programming. Build robust backend systems.',
      icon: <Coffee size={28} className="text-orange-400 sm:w-8 sm:h-8" />,
      gradient: 'from-orange-500/20 to-red-600/5',
      status: 'active',
    },
  ];

  return (
    <div className="min-h-screen w-full bg-[#0B1120] px-4 sm:px-6 md:px-12 py-10">
      <div className="mx-auto max-w-6xl">

        {/* Header */}
        <div className="mb-12 sm:mb-16 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-4 inline-flex items-center gap-2 rounded-full border border-sky-500/30 bg-sky-500/10 px-3 py-1 text-[10px] sm:text-xs font-bold uppercase tracking-widest text-sky-400"
          >
            Available Protocols
          </motion.div>

          <h1 className="text-2xl sm:text-4xl md:text-6xl font-black text-white tracking-tight mb-4">
            Select Your <span className="text-sky-500">Mission</span>
          </h1>

          <p className="text-slate-400 text-sm sm:text-base md:text-lg max-w-xl mx-auto">
            Choose a programming language to calibrate your clearance and begin training.
          </p>
        </div>

        {/* Card */}
        <div className="flex justify-center">
          {courses.map((course) => (
            <motion.div
              key={course.id}
              whileHover={{ y: -5 }}
              onClick={() => handleEnterProtocol(course.id)}
              className="group relative w-full max-w-sm sm:max-w-md overflow-hidden rounded-3xl border border-white/10 bg-[#0f172a]/80 p-5 sm:p-8 backdrop-blur-xl transition-all duration-300 cursor-pointer hover:shadow-2xl hover:shadow-sky-500/10"
            >
              {/* Glow */}
              <div
                className={`absolute -right-10 -top-10 h-24 w-24 sm:h-32 sm:w-32 rounded-full bg-linear-to-br ${course.gradient} blur-2xl sm:blur-[60px]`}
              />

              <div className="relative z-10">
                <div className="mb-6 flex items-center justify-between">
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-3 sm:p-4">
                    {course.icon}
                  </div>

                  <span className="flex items-center gap-1 rounded-full bg-sky-500/10 px-2 sm:px-3 py-1 text-[9px] sm:text-[10px] font-bold uppercase tracking-widest text-sky-400">
                    Active Protocol
                  </span>
                </div>

                <h3 className="text-lg sm:text-2xl font-bold text-white mb-2">
                  {course.title}
                </h3>

                <p className="text-slate-400 text-xs sm:text-sm leading-relaxed mb-6 sm:mb-8">
                  {course.description}
                </p>

                <button className="flex w-full items-center justify-center gap-2 rounded-xl bg-sky-600 py-2.5 sm:py-3 text-xs sm:text-sm font-bold text-white transition-transform active:scale-95 group-hover:bg-sky-500">
                  Enter Protocol <ArrowRight size={14} className="sm:w-4 sm:h-4" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Footer Text */}
        <p className="mt-10 sm:mt-12 text-center text-[10px] sm:text-xs font-bold uppercase tracking-[0.2em] sm:tracking-[0.3em] text-slate-600">
          More missions currently being decrypted...
        </p>
      </div>
    </div>
  );
}
