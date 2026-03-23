import { useEffect, useRef } from 'react'
import { ChatMessage } from './ChatMessage'
import type { ChatMessage as ChatMessageType } from '../App'
import './ChatMessages.css'

type ChatMessagesProps = {
  chatMessages: ChatMessageType[]
}

function ChatMessages({ chatMessages }: ChatMessagesProps) {
  const chatMessagesRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const containerElem = chatMessagesRef.current
    if (containerElem) {
      containerElem.scrollTop = containerElem.scrollHeight
    }
  }, [chatMessages])

  return (
    <div className="chat-messages-container" ref={chatMessagesRef}>
      {chatMessages.map(chatMessage => (
        <ChatMessage
          key={chatMessage.id}
          message={chatMessage.message}
          sender={chatMessage.sender}
        />
      ))}
    </div>
  )
}

export default ChatMessages
