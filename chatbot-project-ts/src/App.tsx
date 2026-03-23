import { useState } from 'react'
import { ChatInput } from './components/ChatInput'
import ChatMessages from './components/ChatMessages'
import RobotProfileImage from './assets/robot.png'
import './App.css'

export type ChatMessage = {
  id: string;
  message: string;
  sender: 'user' | 'robot'
}

function App() {
  const [chatMessages, setChatMessages] = useState<ChatMessage[]>([
    {
      id: 'id1',
      message: 'Hello',
      sender: 'user',
    },
    {
      id: 'id2',
      message: 'Hello! How can I help you?',
      sender: 'robot',
    },
    {
      id: 'id3',
      message: 'flip',
      sender: 'user',
    },
    {
      id: 'id4',
      message: 'Sure! You got tails',
      sender: 'robot',
    },
  ])

  const title = `${chatMessages.length} Messages`

  return (
    <>
      <link rel="icon" type="image/svg+xml" href={RobotProfileImage} />
      <title>{title}</title>

      <div className="app-container">
        <ChatMessages chatMessages={chatMessages} />
        <ChatInput setChatMessages={setChatMessages} />
      </div>
    </>
  )
}

export default App
