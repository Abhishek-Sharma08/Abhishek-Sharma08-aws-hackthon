import { motion } from 'framer-motion';
import { Snowflake } from 'lucide-react';

export default function Loader({ message = "Decrypting Data..." }) {
  return (
    <div className="flex flex-col items-center justify-center space-y-4 py-12">
      <div className="relative">
        {/* Outer rotating ring */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          className="h-16 w-16 rounded-full border-2 border-sky-500/20 border-t-sky-400"
        />
        {/* Inner pulsing icon */}
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute inset-0 flex items-center justify-center text-sky-400"
        >
          <Snowflake size={24} />
        </motion.div>
      </div>
      
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="text-xs font-bold uppercase tracking-[0.2em] text-slate-500"
      >
        {message}
      </motion.p>
    </div>
  );
}