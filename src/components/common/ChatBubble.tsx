import React from 'react'

interface ChatBubbleProps {
  message: string
  sender: 'user' | 'ai'
  timestamp?: Date
}

export const ChatBubble: React.FC<ChatBubbleProps> = ({
  message,
  sender,
  timestamp,
}) => {
  const isUser = sender === 'user'

  return (
    <div className={`flex ${isUser ? 'justify-end' : 'justify-start'} mb-4`}>
      <div
        className={`max-w-xs rounded-2xl px-4 py-3 animate-slideInUp ${
          isUser
            ? 'bg-gradient-to-r from-lumi-sky to-lumi-blue text-white rounded-br-none'
            : 'bg-lumi-gray-light dark:bg-gray-700 text-lumi-gray-text dark:text-gray-100 rounded-bl-none'
        }`}
      >
        <p className="text-sm break-words">{message}</p>
        {timestamp && (
          <p className={`text-xs mt-1 ${isUser ? 'text-blue-100' : 'text-gray-500'}`}>
            {timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
          </p>
        )}
      </div>
    </div>
  )
}
