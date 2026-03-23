import { useState } from 'react'
import { Chatbot } from 'supersimpledev'
import type { ChatMessage } from '../App'
import './ChatInput.css'

type ChatInputProps = {
  setChatMessages: React.Dispatch<React.SetStateAction<ChatMessage[]>>
}

export function ChatInput({ setChatMessages }: ChatInputProps) {
  const [inputText, setInputText] = useState('')

  function saveInputText(event: React.ChangeEvent<HTMLInputElement>) {
    setInputText(event.target.value)
  }

  function sendMessage() {
    if (!inputText.trim()) return

    // رسالة المستخدم
    setChatMessages(prev => [
      ...prev,
      {
        id: crypto.randomUUID(),
        message: inputText,
        sender: 'user',
      },
    ])

    // رد البوت
    const response = Chatbot.getResponse(inputText)
    setChatMessages(prev => [
      ...prev,
      {
        id: crypto.randomUUID(),
        message: response,
        sender: 'robot',
      },
    ])

    setInputText('')
  }

  return (
    <div className="chat-input-container">
      <input
        placeholder="Send a message to Chatbot"
        size={30}
        onChange={saveInputText}
        value={inputText}
        className="chat-input"
      />
      <button onClick={sendMessage} className="send-button">
        Send
      </button>
    </div>
  )
}
