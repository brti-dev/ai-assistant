'use client'

import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { useChat } from 'ai/react'
import * as React from 'react'

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
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '2em',
          marginTop: '5em',
        }}
      >
        {messages.map((m, index) => {
          if (m.role === 'user') {
            return (
              <React.Fragment key={index}>
                <div
                  className="rounded-xl p-4 bg-gray-100 dark:bg-gray-800"
                  style={{ alignSelf: 'flex-end' }}
                >
                  {m.content}
                </div>
              </React.Fragment>
            )
          }
          return (
            <React.Fragment key={index}>
              <div>{m.content}</div>
            </React.Fragment>
          )
        })}
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
