import { useState, useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';

export default function ChatWindow() {
  const { userId } = useParams();
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');
  const messagesEndRef = useRef(null);

  // Mock user data
  const userData = {
    1: { name: "Jane Smith", startup: "EcoTech Innovations", online: true },
    2: { name: "John Doe", startup: "HealthAI", online: true }
  };

  useEffect(() => {
    // Mock messages
    const mockMessages = [
      {
        id: 1,
        sender: userId,
        text: 'Hi there! Interested in your startup.',
        timestamp: new Date(Date.now() - 3600000),
        isCurrentUser: false
      },
      {
        id: 2,
        sender: 'me',
        text: 'Thanks for reaching out! What would you like to know?',
        timestamp: new Date(Date.now() - 1800000),
        isCurrentUser: true
      }
    ];
    
    setMessages(mockMessages);
    scrollToBottom();
  }, [userId]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSendMessage = () => {
    if (!newMessage.trim()) return;
    
    const message = {
      id: messages.length + 1,
      sender: 'me',
      text: newMessage,
      timestamp: new Date(),
      isCurrentUser: true
    };
    
    setMessages([...messages, message]);
    setNewMessage('');
    
    setTimeout(scrollToBottom, 100);
    
    // Simulate reply after 1 second
    setTimeout(() => {
      const reply = {
        id: messages.length + 2,
        sender: userId,
        text: getRandomReply(),
        timestamp: new Date(),
        isCurrentUser: false
      };
      setMessages(prev => [...prev, reply]);
      scrollToBottom();
    }, 1000);
  };

  const getRandomReply = () => {
    const replies = [
      "That sounds interesting!",
      "I'd like to learn more about this.",
      "When can we schedule a meeting?",
      "Thanks for your message!",
      "Could you share more details?"
    ];
    return replies[Math.floor(Math.random() * replies.length)];
  };

  return (
    <div className="flex flex-col h-[calc(100vh-200px)] border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden bg-white dark:bg-gray-800">
      {/* Chat header */}
      <div className="p-4 border-b border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-700 flex items-center">
        <div className="w-10 h-10 rounded-full bg-gray-300 dark:bg-gray-600 mr-3"></div>
        <div>
          <h3 className="font-semibold">{userData[userId]?.name || 'User'}</h3>
          <p className="text-xs text-gray-500 dark:text-gray-400">
            {userData[userId]?.startup || 'Startup'}
          </p>
        </div>
      </div>
      
      {/* Messages area */}
      <div className="flex-1 p-4 overflow-y-auto bg-gray-50 dark:bg-gray-700">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex mb-4 ${message.isCurrentUser ? 'justify-end' : 'justify-start'}`}
          >
            <div
              className={`max-w-xs lg:max-w-md px-4 py-2 rounded-lg ${
                message.isCurrentUser
                  ? 'bg-blue-500 text-white'
                  : 'bg-white dark:bg-gray-600 text-gray-800 dark:text-gray-200'
              }`}
            >
              <p>{message.text}</p>
              <p className={`text-xs mt-1 ${
                message.isCurrentUser ? 'text-blue-200' : 'text-gray-500 dark:text-gray-400'
              }`}>
                {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
              </p>
            </div>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>
      
      {/* Input area */}
      <div className="p-4 border-t border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800">
        <div className="flex">
          <input
            type="text"
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            placeholder="Type a message..."
            className="flex-1 px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
            onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
          />
          <button
            onClick={handleSendMessage}
            className="px-4 py-2 bg-blue-500 text-white rounded-r-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
}