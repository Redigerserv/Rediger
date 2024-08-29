import React, { useEffect, useRef } from 'react';
import { useState, ChangeEvent, KeyboardEvent } from 'react';
import axios from 'axios';
import { TbMessageChatbot } from "react-icons/tb";



interface Message {
  sender: 'user' | 'bot';
  text: string;
}

const Chatbot: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState<string>('');
  const [openchatbot, setChatbot] = useState<boolean>(false);
  const chatBoxRef = useRef<HTMLDivElement>(null);
  const toggleChatBot = () =>{
    setChatbot(!openchatbot)
    setMessages([])
  }

  useEffect(() => {
    // Scroll to the bottom of the chat box whenever messages change
    chatBoxRef.current?.scrollTo(0, chatBoxRef.current.scrollHeight);
  }, [messages]);

  const handleSendMessage = async () => {
    if (!input.trim()) return;

    const newMessage: Message = { sender: 'user', text: input };
    setMessages([...messages, newMessage]);

    try {
      const response = await axios.post<{ reply: string }>('/api/chatbot', { message: input });
      const botMessage: Message = { sender: 'bot', text: response.data.reply };
      setMessages((prevMessages) => [...prevMessages, botMessage]);
    } catch (error) {
      console.error('Error sending message:', error);
      const errorMessage: Message = { sender: 'bot', text: 'Error occurred!' };
      setMessages((prevMessages) => [...prevMessages, newMessage, errorMessage]);
    }

    setInput('');
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') handleSendMessage();
  };

  return (
    <>
    <div className="chatbotIcon">
    <TbMessageChatbot onClick={()=>toggleChatBot()}/>
    </div>
    {openchatbot && 
        <div className="chatBot" style={{ border: '1px solid #ccc', padding: '10px', width: '300px' }}>
      <div ref={chatBoxRef} style={{ maxHeight: '300px', overflowY: 'auto', marginBottom: '10px', padding:"12px" }}>
        {messages.map((msg, index) => (
          <div key={index} style={{ textAlign: msg.sender === 'user' ? 'right' : 'left' , color: msg.sender === 'user' ? 'right' : '#ff6725'}}>
            <strong>{msg.sender}:</strong> {msg.text}
          </div>
        ))}
      </div>
      <div className="input-group">
      <input
        type="text"
        className="form-control"
        value={input}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
        placeholder="Type a message..."
      />
      <button className="btn btn-primary sendBtn"  onClick={handleSendMessage}>
        Send
      </button>
    </div>

    </div>
    }
    
    {/* <div className="chatBot" style={{ width: '300px' }}>
  <div className="card-body">
    <div className="chat-box mb-3 p-2 border" style={{ maxHeight: '300px', overflowY: 'auto' }}>
      {messages.map((msg, index) => (
        <div key={index} className={`text-${msg.sender === 'user' ? 'end' : 'start'} mb-2`}>
          <strong>{msg.sender}:</strong> {msg.text}
        </div>
      ))}
    </div>
    <div className="input-group">
      <input
        type="text"
        className="form-control"
        value={input}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
        placeholder="Type a message..."
      />
      <button className="btn btn-primary" onClick={handleSendMessage}>
        Send
      </button>
    </div>
  </div>
</div> */}
    </>


  );
};

export default Chatbot;
