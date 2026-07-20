import React from 'react';
import { Bot, User } from 'lucide-react';
import ReactMarkdown from 'react-markdown';

export default function ChatMessage({ role, content }) {
  const isUser = role === 'user';
  return (
    <div className={`flex gap-3 ${isUser ? 'flex-row-reverse' : 'flex-row'}`}>
      <div className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full ${isUser ? 'bg-primary text-primary-foreground' : 'bg-muted'}`}>
        {isUser ? <User className="h-4 w-4" /> : <Bot className="h-4 w-4" />}
      </div>
      <div className={`max-w-[80%] rounded-2xl px-4 py-2.5 ${isUser ? 'bg-primary text-primary-foreground' : 'bg-muted'}`}>
        <div className="prose prose-sm max-w-none dark:prose-invert">
          <ReactMarkdown>{content}</ReactMarkdown>
        </div>
      </div>
    </div>
  );
}
