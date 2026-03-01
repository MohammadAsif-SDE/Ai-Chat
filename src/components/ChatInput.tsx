import React, { useEffect, useState, useRef } from 'react';
import {
  Paperclip,
  Globe,
  MoreHorizontal,
  ArrowUp,
  Sparkles,
  Zap } from
'lucide-react';
interface ChatInputProps {
  onSend: (message: string) => void;
  isWelcomeState?: boolean;
}
export function ChatInput({ onSend, isWelcomeState = false }: ChatInputProps) {
  const [input, setInput] = useState('');
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
      textareaRef.current.style.height = `${Math.min(textareaRef.current.scrollHeight, 200)}px`;
    }
  }, [input]);
  const handleSend = () => {
    if (input.trim()) {
      onSend(input.trim());
      setInput('');
    }
  };
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };
  return (
    <div className="w-full max-w-3xl mx-auto">
      {isWelcomeState &&
      <div className="flex items-center justify-between px-4 py-2 mb-3 bg-white border border-gray-200 rounded-xl shadow-sm">
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <Zap className="w-4 h-4 text-amber-500" />
            <span>Unlock more features with the Pro plan.</span>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <div className="w-2 h-2 rounded-full bg-green-500" />
            <span className="text-gray-600">Active extensions</span>
          </div>
        </div>
      }

      <div className="bg-white border border-gray-200 rounded-2xl shadow-sm focus-within:shadow-md focus-within:border-blue-300 transition-all overflow-hidden">
        <div className="flex items-start px-4 py-3">
          <button className="p-2 text-gray-400 hover:text-gray-600 transition-colors mt-1">
            <Paperclip className="w-5 h-5" />
          </button>

          <textarea
            ref={textareaRef}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Ask anything..."
            className="flex-1 bg-transparent border-none focus:ring-0 resize-none py-2 px-2 text-gray-900 placeholder-gray-400 min-h-[44px] max-h-[200px]"
            rows={1} />

        </div>

        <div className="flex items-center justify-between px-4 py-3 bg-gray-50/50 border-t border-gray-100">
          <div className="flex items-center gap-2">
            <button className="flex items-center gap-2 px-3 py-1.5 bg-white border border-gray-200 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors shadow-sm">
              <Sparkles className="w-4 h-4 text-blue-500" />
              Gemini 3 Pro
            </button>
            <button className="p-1.5 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg transition-colors">
              <Globe className="w-5 h-5" />
            </button>
            <button className="p-1.5 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg transition-colors">
              <MoreHorizontal className="w-5 h-5" />
            </button>
          </div>

          <button
            onClick={handleSend}
            disabled={!input.trim()}
            className={`p-2 rounded-full transition-all ${input.trim() ? 'bg-blue-500 text-white shadow-md hover:bg-blue-600 hover:shadow-lg' : 'bg-gray-100 text-gray-400'}`}>

            <ArrowUp className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>);

}