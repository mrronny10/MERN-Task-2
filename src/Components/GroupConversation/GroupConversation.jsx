import React from "react";
import { FaBell, FaChevronDown } from "react-icons/fa";

function GroupConversation() {
  const conversations = [
    {
      id: 1,
      name: "MERN Stack Developers",
      unreadCount: 3,
    },
    {
      id: 2,
      name: "Internship Batch B-2",
      unreadCount: 0,
    },
    // Add more conversations here
  ];

  return (
    <div className='bg-white border border-gray-300 rounded-md p-4 mb-4'>
      <div className='flex items-center justify-between mb-4'>
        <h2 className='text-lg font-semibold'>Group Conversation</h2>
        <div className='flex items-center'>
          <button className='text-sm text-blue-500 flex items-center'>
            <FaBell className='mr-1' />
            Notifications
          </button>
        </div>
      </div>
      {conversations.map((conversation) => (
        <div key={conversation.id} className='flex items-center mb-3'>
          <div className='w-2 h-2 rounded-full mr-2 bg-blue-500'></div>
          <h3 className='text-sm font-semibold'>{conversation.name}</h3>
          {conversation.unreadCount > 0 && (
            <span className='text-xs bg-red-500 text-white rounded-full px-2 ml-2'>
              {conversation.unreadCount}
            </span>
          )}
        </div>
      ))}
      <button className='text-sm text-blue-500 flex items-center'>
        See All Conversations
        <FaChevronDown className='ml-1' />
      </button>
    </div>
  );
}

export default GroupConversation;
