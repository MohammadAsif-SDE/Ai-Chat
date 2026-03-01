import React, { useState } from 'react';
import { TopBar } from './TopBar';
import { WelcomeScreen } from './WelcomeScreen';
import { ChatArea } from './ChatArea';
import { Message } from './types';
export function ChatApp() {
  const [messages, setMessages] = useState<Message[]>([]);
  const handleSendMessage = (text: string) => {
    // Add user message
    const newUserMsg: Message = {
      id: Date.now().toString(),
      sender: 'user',
      text
    };
    setMessages((prev) => [...prev, newUserMsg]);
    // Simulate AI thinking state
    const loadingId = (Date.now() + 1).toString();
    const loadingMsg: Message = {
      id: loadingId,
      sender: 'ai',
      isLoading: true,
      loadingText: 'Getting a detailed report...'
    };
    setMessages((prev) => [...prev, loadingMsg]);
    // Simulate AI response after delay
    setTimeout(() => {
      setMessages((prev) => {
        const filtered = prev.filter((m) => m.id !== loadingId);
        // Mock complex response based on the reference image
        const aiResponse: Message = {
          id: (Date.now() + 2).toString(),
          sender: 'ai',
          attachments: [
          {
            id: '1',
            title: 'Onboarding Meeting',
            date: 'Dec 15, 2025',
            type: 'meet'
          },
          {
            id: '2',
            title: 'Project Kickoff Meeting',
            date: 'Dec 16, 2025',
            type: 'zoom'
          }],

          expandableSections: [
          {
            id: 'sec1',
            title: 'Shaping the AI Chat Experience',
            time: '1:40',
            content:
            'During the meeting, the project vision was presented: to design a modern, intuitive, and trustworthy AI chat interface that emphasizes clarity, usability, and intelligent interaction. Key design principles discussed include minimalism, accessibility, conversational flow, and visual cues that enhance user confidence in AI-driven responses. The project scope was outlined, covering the creation of initial wireframes, visual design concepts, color schemes, typography, and UI components specific to chat-based interactions.'
          }],

          inlineSuggestions: [
          'How should AI show uncertainty?',
          'Which UI elements build trust in AI responses?',
          'What signals make AI responses feel reliable?']

        };
        return [...filtered, aiResponse];
      });
    }, 2000);
  };
  return (
    <div className="flex flex-col h-screen w-full bg-gray-50 text-gray-900 font-sans overflow-hidden">
      <TopBar />

      <main className="flex-1 flex flex-col overflow-hidden relative">
        {messages.length === 0 ?
        <WelcomeScreen onSendMessage={handleSendMessage} /> :

        <ChatArea messages={messages} onSendMessage={handleSendMessage} />
        }
      </main>
    </div>);

}