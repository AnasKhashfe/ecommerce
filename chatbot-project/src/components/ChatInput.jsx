import { useState } from 'react'
import { Chatbot } from 'supersimpledev'
import './ChatInput.css'


export function ChatInput({chatMessages, setChatMessages}){
  const [inputText, setInputText] = useState('');

  function saveInputText(event){
    setInputText(event.target.value);  
  }


  function sendMessage() {

    const newChatMessages = [
      ...chatMessages,
      {
        message: inputText,
        sender: "user",
        key: crypto.randomUUID()
      }
    ];

    setChatMessages(newChatMessages)

    const respnose = Chatbot.getResponse(inputText);
    setChatMessages([
      ...newChatMessages,
      {
        message: respnose,
        sender: "robot",
        key: crypto.randomUUID()
      }
    ])

    setInputText('')
  }





  return (
    <div 
      className = "chat-input-container">
      <input 
        placeholder = "Send a message to Chatbot" 
        size = "30"
        onChange = {saveInputText}
        value = {inputText} 
        className = "chat-input"
        
      />
      <button
        onClick = {sendMessage}
        className = "send-button"
      >Send</button>
    </div>
  );
}