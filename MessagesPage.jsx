import { useState } from 'react';
import ChatWindow from '../components/ChatWindow';

const MessagesPage = () => {
  const [conversations, setConversations] = useState([
    { id: 1, name: 'Jane Smith', startup: 'EcoTech Innovations', lastMessage: 'Thanks for your interest!', time: '2h ago', unread: true },
    { id: 2, name: 'John Doe', startup: 'HealthAI', lastMessage: 'When can we schedule a call?', time: '1d ago', unread: false },
    { id: 3, name: 'Alex Johnson', startup: 'Green Ventures', lastMessage: 'We should discuss the terms', time: '3d ago', unread: false },
  ]);

  const [selectedConversation, setSelectedConversation] = useState(1);

  return (
    <div className="flex h-[calc(100vh-200px)]">
      {/* Conversation List */}
      <div className="w-1/3 border-r border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 overflow-y-auto">
        <div className="p-4 border-b border-gray-200 dark:border-gray-700">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Messages</h3>
        </div>
        <div className="divide-y divide-gray-200 dark:divide-gray-700">
          {conversations.map((conversation) => (
            <div
              key={conversation.id}
              onClick={() => setSelectedConversation(conversation.id)}
              className={`p-4 cursor-pointer ${selectedConversation === conversation.id ? 'bg-blue-50 dark:bg-gray-700' : 'hover:bg-gray-50 dark:hover:bg-gray-700'}`}
            >
              <div className="flex justify-between">
                <h4 className="font-medium text-gray-900 dark:text-white">{conversation.name}</h4>
                <span className="text-xs text-gray-500 dark:text-gray-400">{conversation.time}</span>
              </div>
              <p className={`text-sm mt-1 truncate ${conversation.unread ? 'font-semibold text-gray-900 dark:text-white' : 'text-gray-500 dark:text-gray-400'}`}>
                {conversation.lastMessage}
              </p>
              <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">{conversation.startup}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Chat Window */}
      <div className="flex-1">
        <ChatWindow userId={selectedConversation} />
      </div>
    </div>
  );
};

export default MessagesPage;