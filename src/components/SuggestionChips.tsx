import React from 'react';
import { User, Youtube, BookOpen, MoreHorizontal } from 'lucide-react';
interface SuggestionChipsProps {
  onSelect: (text: string) => void;
}
export function SuggestionChips({ onSelect }: SuggestionChipsProps) {
  const suggestions = [
  {
    icon: User,
    text: 'Any advice for me?'
  },
  {
    icon: Youtube,
    text: 'Some youtube video idea'
  },
  {
    icon: BookOpen,
    text: 'Life lessons from kratos'
  }];

  return (
    <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-hide w-full max-w-3xl mx-auto">
      {suggestions.map((s, i) =>
      <button
        key={i}
        onClick={() => onSelect(s.text)}
        className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-xl hover:bg-gray-50 hover:border-gray-300 transition-all text-sm text-gray-700 whitespace-nowrap shadow-sm">

          <s.icon className="w-4 h-4 text-gray-500" />
          {s.text}
        </button>
      )}
      <button className="p-2 bg-white border border-gray-200 rounded-xl hover:bg-gray-50 transition-all shadow-sm">
        <MoreHorizontal className="w-4 h-4 text-gray-500" />
      </button>
    </div>);

}