import React, { useState, useEffect } from 'react';
import Editor from '@monaco-editor/react';
import { Play, RotateCcw } from 'lucide-react';

const CodeEditor = ({ initialCode, onRun, onChange }) => {
  const [code, setCode] = useState(initialCode || '// Write your code here');

  // Update editor content when initialCode changes (e.g., navigating to Next Lesson)
  useEffect(() => {
    if (initialCode) {
      setCode(initialCode);
    }
  }, [initialCode]);

  const handleEditorChange = (value) => {
    setCode(value);
    // Safety check: Only call onChange if it was actually provided as a prop
    // This prevents the "onChange is not a function" error
    if (onChange && typeof onChange === 'function') {
      onChange(value);
    }
  };

  return (
    <div className="flex h-full flex-col overflow-hidden bg-[#1e1e1e]">
      
      {/* Editor Toolbar */}
      <div className="flex items-center justify-between border-b border-white/10 bg-[#1e1e1e] px-4 py-2">
        <div className="flex items-center gap-2">
           <span className="text-[10px] font-black tracking-widest text-sky-400 uppercase">Java</span>
           <span className="text-[10px] font-bold text-slate-500 uppercase tracking-tighter">Main.java</span>
        </div>
        
        <div className="flex gap-2">
           <button 
             onClick={() => setCode(initialCode)}
             className="flex items-center gap-1 rounded px-2 py-1 text-[10px] font-bold uppercase tracking-widest text-slate-500 transition-colors hover:bg-white/5 hover:text-white"
           >
             <RotateCcw size={12} />
             Reset
           </button>
           <button 
             onClick={() => onRun(code)}
             className="flex items-center gap-1.5 rounded bg-sky-600 px-3 py-1 text-[10px] font-black uppercase tracking-widest text-white transition-all hover:bg-sky-500 active:scale-95 shadow-lg shadow-sky-900/20"
           >
             <Play size={12} fill="currentColor" />
             Run Code
           </button>
        </div>
      </div>

      {/* Monaco Editor Instance */}
      <div className="flex-1 overflow-hidden">
        <Editor
          height="100%"
          defaultLanguage="java"
          theme="vs-dark"
          value={code}
          onChange={handleEditorChange}
          options={{
            minimap: { enabled: false },
            fontSize: 14,
            scrollBeyondLastLine: false,
            automaticLayout: true,
            padding: { top: 16 },
            fontFamily: '"Fira Code", monospace',
            // Added for a cleaner look
            lineNumbersMinChars: 3,
            glyphMargin: false,
            folding: false,
          }}
        />
      </div>
    </div>
  );
};

export default CodeEditor;