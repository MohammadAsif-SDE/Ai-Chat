import React from 'react';
import { Video, Calendar } from 'lucide-react';
import { MeetingAttachment } from './types';
interface MeetingCardProps {
  attachment: MeetingAttachment;
}
export function MeetingCard({ attachment }: MeetingCardProps) {
  return (
    <div className="flex items-center gap-3 p-3 bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition-shadow cursor-pointer max-w-sm">
      <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center flex-shrink-0">
        <Video className="w-5 h-5 text-blue-600" />
      </div>
      <div className="flex flex-col overflow-hidden">
        <span className="text-sm font-semibold text-gray-900 truncate">
          {attachment.title}
        </span>
        <div className="flex items-center gap-1 text-xs text-gray-500 mt-0.5">
          <Calendar className="w-3 h-3" />
          <span>{attachment.date}</span>
        </div>
      </div>
    </div>);

}