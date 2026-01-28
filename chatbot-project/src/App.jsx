import { useState } from 'react'
import { ChatInput } from './components/ChatInput'
import  ChatMessages  from './components/ChatMessages'

import './App.css'







function App() {

  const [chatMessages, setChatMessages] = useState([
    {
      message: "Hello",
      sender: "user",
      key: "id1"
    },{
      message: "Hello! How can I help you?", 
      sender: "robot",
      key: "id2"
    },{
      message: "flip",
      sender: "user",
      key: "id3"
    },{
      message: "Sure! You got tails",
      sender: "robot",
      key: "id4"
    }
  ]);
  
  // const [chatMessages, setChatMessages] = array ;
  // const chatMessages = array[0];
  // const setChatMessages = array[1];

  return (
    <div className = "app-container">
      <ChatMessages 
      chatMessages = {chatMessages}
      />
      <ChatInput 
        chatMessages = {chatMessages}
        setChatMessages = {setChatMessages}
      />
    </div>
  )
}
export default App
