import { useState } from 'react';
import CodeEditor from '../components/CodeEditor';
import { Terminal, Eraser } from 'lucide-react';
import axios from 'axios';

export default function Practice() {
  const [output, setOutput] = useState("");
  const [isRunning, setIsRunning] = useState(false);

  const runSandboxCode = async (code) => {
    setIsRunning(true);
    setOutput("Executing in Sandbox...");
    try {
      const res = await axios.post("https://emkc.org/api/v2/piston/execute", {
        language: "java",
        version: "15.0.2",
        files: [{ content: code }],
      });

      setOutput(
        res.data.run.stdout ||
        res.data.run.stderr ||
        "No output."
      );
    } catch {
      setOutput("Sandbox connection error.");
    } finally {
      setIsRunning(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#0B1120] px-4 sm:px-6 lg:px-8 py-6 flex flex-col gap-6">

      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <h1 className="text-xl sm:text-2xl font-black text-white">
          The Training Grounds
        </h1>

        <button
          onClick={() => setOutput("")}
          className="flex items-center gap-2 text-xs sm:text-sm text-slate-500 hover:text-white transition-colors"
        >
          <Eraser size={14} /> Clear Console
        </button>
      </div>

      {/* Editor */}
      <div className="flex-1 min-h-87.5 sm:min-h-112.5 overflow-hidden rounded-3xl border border-white/10 bg-[#1E1E1E] shadow-2xl">
        <CodeEditor
          initialCode={`public class Main {\n    public static void main(String[] args) {\n        System.out.println("Testing SnowVault...");\n    }\n}`}
          onRun={runSandboxCode}
        />
      </div>

      {/* Console */}
      <div className="rounded-2xl border border-white/10 bg-black/40 p-4 sm:p-5 font-mono text-xs sm:text-sm overflow-y-auto min-h-30 sm:min-h-40 max-h-62.5 sm:max-h-75">
        <div className="flex items-center justify-between mb-2 text-[10px] uppercase text-slate-500 font-black tracking-widest">
          <span className="flex items-center gap-2">
            <Terminal size={12} /> Sandbox Output
          </span>
          {isRunning && (
            <span className="text-sky-400 animate-pulse">
              Running...
            </span>
          )}
        </div>

        <pre className="text-sky-300 whitespace-pre-wrap leading-relaxed">
          {output || "// Run your experiment code..."}
        </pre>
      </div>
    </div>
  );
}
