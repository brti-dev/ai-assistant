'use client'

import * as React from 'react'
import { useChat } from 'ai/react'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'

function ChatMessage({
  type,
  children,
}: {
  type: 'bot' | 'user'
  children: React.ReactNode
}) {
  const className =
    type === 'user'
      ? 'rounded-xl py-2 px-4 bg-gray-100 dark:bg-gray-800 self-end'
      : ''
  let message = children
  if (typeof message === 'string') {
    message = message.split('\n').map((m, i) => (
      <React.Fragment key={i}>
        {m}
        <br />
      </React.Fragment>
    ))
  }

  return <div className={className}>{message}</div>
}

export default function ChatBot() {
  const { messages, input, handleInputChange, handleSubmit, error } = useChat()

  return (
    <div className="w-full max-w-2xl mx-auto rounded-lg dark:border-gray-800">
      <h1 className="text-2xl font-bold text-center">
        Strategic Planning Instructor
      </h1>
      <p className="text-center text-gray-400 mt-3">
        This is a generated course on strategic planning. Initiate a chat to
        begin.
      </p>
      <div className="flex flex-col space-y-8 mt-20">
        {messages.map((m, index) => (
          <ChatMessage key={index} type={m.role === 'user' ? 'user' : 'bot'}>
            {m.content}
          </ChatMessage>
        ))}
        {error && (
          <div className="text-red-500 border border-orange-500 py-2 px-4 rounded-md">
            Something went wrong :(
          </div>
        )}
        <form className="flex items-center space-x-4" onSubmit={handleSubmit}>
          <Input
            className="flex-1 min-w-0"
            value={input}
            placeholder="Type a message..."
            onChange={handleInputChange}
          />
          <Button type="submit">Send</Button>
        </form>
      </div>
    </div>
  )
}
