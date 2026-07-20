import React, { useState } from 'react';
import { Send } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function ChatInput({ onSend, disabled }) {
  const [text, setText] = useState('');

  const submit = (e) => {
    e.preventDefault();
    const trimmed = text.trim();
    if (!trimmed || disabled) return;
    onSend(trimmed);
    setText('');
  };

  return (
    <form onSubmit={submit} className="flex items-end gap-2 border-t p-4">
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            submit(e);
          }
        }}
        placeholder="Message Verity…"
        rows={1}
        className="flex-1 resize-none rounded-2xl border bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-ring max-h-40"
      />
      <Button type="submit" size="icon" disabled={disabled || !text.trim()} className="rounded-full h-10 w-10">
        <Send className="h-4 w-4" />
      </Button>
    </form>
  );
}
