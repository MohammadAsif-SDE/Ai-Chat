import React, { useState } from 'react';
import {
  Loader2,
  ChevronDown,
  ChevronUp,
  ArrowRight,
  CornerDownRight } from
'lucide-react';
import { Message } from './types';
import { MeetingCard } from './MeetingCard';
interface ChatMessageProps {
  message: Message;
}
export function ChatMessage({ message }: ChatMessageProps) {
  const isUser = message.sender === 'user';
  const [expandedSections, setExpandedSections] = useState<
    Record<string, boolean>>(
    {});
  const toggleSection = (id: string) => {
    setExpandedSections((prev) => ({
      ...prev,
      [id]: !prev[id]
    }));
  };
  if (isUser) {
    return (
      <div className="flex justify-end mb-8">
        <div className="max-w-[80%] bg-gray-100 text-gray-900 px-5 py-3.5 rounded-2xl rounded-tr-sm text-[15px] leading-relaxed shadow-sm">
          {message.text}
        </div>
      </div>);

  }
  return (
    <div className="flex flex-col gap-4 mb-8 max-w-3xl">
      {/* Loading State */}
      {message.isLoading &&
      <div className="flex items-center gap-3 text-gray-500">
          <Loader2 className="w-5 h-5 animate-spin text-blue-500" />
          <span className="text-sm font-medium">
            {message.loadingText || 'Thinking...'}
          </span>
        </div>
      }

      {/* Attachments */}
      {message.attachments && message.attachments.length > 0 &&
      <div className="flex flex-wrap gap-3 relative z-10">
          {message.attachments.map((att) =>
        <MeetingCard key={att.id} attachment={att} />
        )}
          <button className="px-4 py-2 bg-white border border-gray-200 rounded-xl text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 transition-colors self-end ml-auto">
            Get a detailed report
          </button>
        </div>
      }

      {/* Expandable Sections */}
      {message.expandableSections &&
      message.expandableSections.map((section) => {
        const isExpanded = expandedSections[section.id] ?? true; // Default expanded for demo
        return (
          <div key={section.id} className="flex flex-col gap-2">
              <div
              className="flex items-center gap-3 cursor-pointer group"
              onClick={() => toggleSection(section.id)}>

                <div className="w-1.5 h-1.5 rounded-full bg-gray-300 group-hover:bg-gray-400 transition-colors" />
                <span className="font-semibold text-gray-900">
                  {section.title}
                </span>
                {section.time &&
              <span className="text-xs font-medium px-2 py-0.5 bg-gray-100 text-gray-600 rounded-md">
                    {section.time} ↗
                  </span>
              }
                <button className="p-1 hover:bg-gray-100 rounded-md transition-colors text-gray-500">
                  {isExpanded ?
                <ChevronUp className="w-4 h-4" /> :

                <ChevronDown className="w-4 h-4" />
                }
                </button>
              </div>

              {isExpanded &&
            <div className="pl-6 text-gray-700 leading-relaxed text-[15px]">
                  {/* Simple rendering of content, in a real app this might be markdown */}
                  <p className="mb-4">{section.content}</p>
                </div>
            }
            </div>);

      })}

      {/* Standard Text Content */}
      {message.text && !message.isLoading &&
      <div className="text-gray-800 leading-relaxed text-[15px] pl-6">
          {message.text}
        </div>
      }

      {/* Inline Suggestions (like the dark mode reference) */}
      {message.inlineSuggestions && message.inlineSuggestions.length > 0 &&
      <div className="mt-4 pl-6">
          <div className="bg-white border border-gray-200 rounded-2xl shadow-sm overflow-hidden">
            <div className="flex items-center justify-between px-4 py-2 bg-gray-50 border-b border-gray-100 text-xs font-medium text-gray-500">
              <div className="flex items-center gap-2">
                <span className="flex items-center gap-1">
                  <ArrowRight className="w-3 h-3" /> to navigate
                </span>
                <span className="flex items-center gap-1">
                  <CornerDownRight className="w-3 h-3" /> to select
                </span>
              </div>
              <span>esc to close</span>
            </div>
            <div className="p-2 flex flex-col gap-1">
              {message.inlineSuggestions.map((suggestion, idx) =>
            <button
              key={idx}
              className="flex items-center gap-3 w-full text-left px-3 py-2.5 rounded-xl hover:bg-gray-50 transition-colors text-sm text-gray-700 group">

                  <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-gray-600" />
                  {suggestion}
                </button>
            )}
            </div>
          </div>
        </div>
      }
    </div>);

}