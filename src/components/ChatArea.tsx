import React, { useEffect, useRef } from 'react';
import { Message } from './types';
import { ChatMessage } from './ChatMessage';
import { ChatInput } from './ChatInput';
interface ChatAreaProps {
  messages: Message[];
  onSendMessage: (text: string) => void;
}
export function ChatArea({ messages, onSendMessage }: ChatAreaProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);
  return (
    <div className="flex-1 flex flex-col h-full overflow-hidden relative">
      <div
        ref={scrollRef}
        className="flex-1 overflow-y-auto px-4 py-8 scroll-smooth">

        <div className="max-w-4xl mx-auto w-full">
          {messages.map((msg) =>
          <ChatMessage key={msg.id} message={msg} />
          )}
        </div>
      </div>

      <div className="p-4 bg-gradient-to-t from-gray-50 via-gray-50 to-transparent pt-8">
        <div className="max-w-4xl mx-auto w-full">
          <ChatInput onSend={onSendMessage} />
        </div>
      </div>
    </div>);

}