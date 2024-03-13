import React from "react";
import { FaEllipsisH, FaSearch, FaUserFriends, FaVideo } from "react-icons/fa";

function Friends() {
  const friends = [
    {
      id: 1,
      name: "Sadia Afroze",
      profileImage:
        "https://images.unsplash.com/photo-1499952127939-9bbf5af6c51c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1176&q=80",
      status: "online",
    },
    {
      id: 2,
      name: "Jane Smith",
      profileImage:
        "https://images.unsplash.com/photo-1504593811423-6dd665756598?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      status: "offline",
    },
    {
      id: 3,
      name: "Habib Khan",
      profileImage:
        "https://images.unsplash.com/photo-1552374196-c4e7ffc6e126?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80",
      status: "online",
    },
    // Add more friends here
  ];

  return (
    <div className='bg-white border border-gray-300 rounded-md p-4 mb-5'>
     <div className="flex items-center justify-between mb-5">
     <h2 className='text-lg font-semibold'>Contacts</h2>{" "}
      <div className='flex items-center space-x-4 text-[#5B5C5E] cursor-pointer'>
        <FaVideo />
        <FaSearch />
        <FaEllipsisH/>
      </div>
     </div>
      {friends.map((friend) => (
        <div key={friend.id} className='flex items-center  mb-5'>
          <div
            className={`w-2 h-2 rounded-full mr-2 ${
              friend.status === "online" ? "bg-green-500" : "bg-red-500"
            }`}
          ></div>
          <img
            src={friend.profileImage}
            alt={friend.name}
            className='w-10 h-10 object-cover rounded-full mr-3'
          />
          <h3 className='text-sm font-semibold'>{friend.name}</h3>
        </div>
      ))}
      <button className='text-sm text-blue-500 flex items-center'>
        <FaUserFriends className='mr-1' />
        See All
      </button>
    </div>
  );
}

export default Friends;
