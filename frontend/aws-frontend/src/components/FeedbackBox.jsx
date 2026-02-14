import { motion, AnimatePresence } from 'framer-motion';
import { XCircle, CheckCircle, Lightbulb } from 'lucide-react';

export default function FeedbackBox({ feedback, isSuccess, onTryAgain }) {
  return (
    <AnimatePresence>
      {feedback && (
        <motion.div
          initial={{ height: 0, opacity: 0, scale: 0.95 }}
          animate={{ height: 'auto', opacity: 1, scale: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 25 }}
          className="overflow-hidden"
        >
          <div className={`mb-4 rounded-2xl border p-5 backdrop-blur-md ${isSuccess ? 'border-emerald-500/30 bg-emerald-500/10' : 'border-rose-500/30 bg-rose-500/10'}`}>
            <div className="flex items-start gap-4">
              <div className={`mt-1 p-2 rounded-full ${isSuccess ? 'bg-emerald-500/20 text-emerald-400' : 'bg-rose-500/20 text-rose-400'}`}>
                {isSuccess ? <CheckCircle size={20} /> : <XCircle size={20} />}
              </div>
              <div className="space-y-2">
                <h3 className={`text-xs font-black uppercase tracking-widest ${isSuccess ? 'text-emerald-400' : 'text-rose-400'}`}>
                  {isSuccess ? 'Mission Accomplished' : 'Thermal Leak Detected'}
                </h3>
                <p className="text-sm text-slate-300 flex gap-2 leading-relaxed">
                  <Lightbulb size={16} className="text-amber-400 shrink-0" /> {feedback}
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}