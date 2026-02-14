import { motion } from 'framer-motion';

export default function Button({ 
  children, 
  onClick, 
  variant = 'primary', 
  loading = false, 
  disabled = false,
  className = '',
  icon: Icon
}) {
  
  const variants = {
    primary: 'bg-sky-600 hover:bg-sky-500 text-white shadow-lg shadow-sky-900/20 border-sky-400/20',
    secondary: 'bg-slate-800 hover:bg-slate-700 text-slate-200 border-white/10',
    danger: 'bg-rose-600/10 hover:bg-rose-600/20 text-rose-400 border-rose-500/20',
    ghost: 'bg-transparent hover:bg-white/5 text-slate-400 hover:text-white border-transparent'
  };

  return (
    <motion.button
      whileTap={{ scale: 0.98 }}
      whileHover={!disabled && !loading ? { scale: 1.02 } : {}}
      onClick={onClick}
      disabled={disabled || loading}
      className={`
        relative flex items-center justify-center gap-2 rounded-xl border px-6 py-3 
        text-sm font-black uppercase tracking-widest transition-all duration-200
        ${variants[variant]}
        ${(disabled || loading) ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}
        ${className}
      `}
    >
      {loading ? (
        <>
          <div className="h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
          <span>Processing...</span>
        </>
      ) : (
        <>
          {Icon && <Icon size={18} />}
          {children}
        </>
      )}
    </motion.button>
  );
}