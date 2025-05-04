import { useState } from "react";
import { Bot, X } from "lucide-react";

export default function FloatingChatbot() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Floating Bot Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="relative bg-gray-900 border border-cyan-500 text-cyan-400 rounded-full p-4 shadow-lg hover:scale-110 transition-transform duration-300"
      >
        <span className="absolute animate-ping w-full h-full rounded-full bg-cyan-500 opacity-20"></span>
        <Bot className="w-5 h-5 z-10 relative" />
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="mt-3 w-80 backdrop-blur-lg bg-gradient-to-br from-slate-900/80 to-slate-800/80 border border-cyan-500 rounded-xl shadow-2xl animate-fadeIn">
          {/* Header */}
          <div className="flex justify-between items-center px-4 py-2 bg-cyan-600 text-white rounded-t-xl">
            <span className="font-semibold tracking-wide">Maverick AI</span>
            <button
              onClick={() => setIsOpen(false)}
              className="hover:text-red-400 transition"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Chat Body */}
          <div className="p-4 h-80 overflow-y-auto text-sm text-cyan-200 space-y-2">
            <p className="italic">“How can I help you navigate the dashboard?”</p>
            <div className="text-slate-400">E.g. "Show teacher performance trends"</div>
          </div>

          {/* Input Section */}
          <div className="px-4 py-2 border-t border-cyan-800 bg-slate-900">
            <input
              type="text"
              placeholder="Type a command..."
              className="w-full p-2 rounded bg-slate-800 border border-cyan-500 text-cyan-300 placeholder-cyan-400 text-xs focus:outline-none focus:ring-2 focus:ring-cyan-500"
            />
          </div>
        </div>
      )}
    </div>
  );
}
