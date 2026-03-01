import React from 'react';
import {
  MessageSquare,
  ChevronDown,
  Edit,
  Maximize2,
  Sidebar,
  X } from
'lucide-react';
export function TopBar() {
  return (
    <div className="flex items-center justify-between px-4 py-3 bg-white border-b border-gray-200">
      <div className="flex items-center gap-2 cursor-pointer hover:bg-gray-50 px-2 py-1.5 rounded-lg transition-colors">
        <MessageSquare className="w-5 h-5 text-gray-700" />
        <span className="font-medium text-gray-900">New AI chat</span>
        <ChevronDown className="w-4 h-4 text-gray-500" />
      </div>

      <div className="flex items-center gap-6">
        <div className="flex items-center gap-3">
          <span className="text-sm font-medium text-gray-700">Personalize</span>
          <button
            className="w-10 h-6 bg-blue-500 rounded-full relative transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-1"
            aria-label="Toggle personalize">

            <div className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full transition-transform translate-x-4 shadow-sm" />
          </button>
        </div>

        <div className="flex items-center gap-2 text-gray-500">
          <button
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
            aria-label="Edit">

            <Edit className="w-4 h-4" />
          </button>
          <button
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
            aria-label="Maximize">

            <Maximize2 className="w-4 h-4" />
          </button>
          <button
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
            aria-label="Toggle Sidebar">

            <Sidebar className="w-4 h-4" />
          </button>
          <button
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
            aria-label="Close">

            <X className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>);

}