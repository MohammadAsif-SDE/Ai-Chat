import React from 'react';
import { Sparkles } from 'lucide-react';
import { ChatInput } from './ChatInput';
import { SuggestionChips } from './SuggestionChips';
interface WelcomeScreenProps {
  onSendMessage: (text: string) => void;
}
export function WelcomeScreen({ onSendMessage }: WelcomeScreenProps) {
  return (
    <div className="flex-1 flex flex-col items-center justify-center px-4 w-full max-w-4xl mx-auto">
      <div className="flex flex-col items-center mb-12 animate-in fade-in slide-in-from-bottom-4 duration-700">
        <div className="w-16 h-16 bg-white border border-gray-200 shadow-sm rounded-2xl flex items-center justify-center mb-6">
          <Sparkles className="w-8 h-8 text-gray-900" />
        </div>
        <h1 className="text-2xl font-medium text-gray-600 mb-2">
          Good to See You!
        </h1>
        <h2 className="text-4xl font-semibold text-gray-900 mb-4 text-center">
          How Can I be an Assistance?
        </h2>
        <p className="text-gray-500 text-sm">
          Im available 24/7 for you, ask me anything.
        </p>
      </div>

      <div className="w-full space-y-6 animate-in fade-in slide-in-from-bottom-8 duration-700 delay-150 fill-mode-both">
        <ChatInput onSend={onSendMessage} isWelcomeState={true} />
        <SuggestionChips onSelect={onSendMessage} />
      </div>
    </div>);

}