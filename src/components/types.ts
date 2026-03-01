export type Sender = 'user' | 'ai';

export interface MeetingAttachment {
  id: string;
  title: string;
  date: string;
  type: 'zoom' | 'meet' | 'teams';
}

export interface ExpandableSection {
  id: string;
  title: string;
  time?: string;
  content: string;
}

export interface Message {
  id: string;
  sender: Sender;
  text?: string;
  attachments?: MeetingAttachment[];
  expandableSections?: ExpandableSection[];
  inlineSuggestions?: string[];
  isLoading?: boolean;
  loadingText?: string;
}