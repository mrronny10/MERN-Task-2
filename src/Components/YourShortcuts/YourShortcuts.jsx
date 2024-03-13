import React from 'react';
import { FaBookmark, FaClock, FaGamepad, FaRegFlag, FaStoreAlt, FaUserFriends, FaUsers } from 'react-icons/fa';

function YourShortcuts() {
  return (
    <div className="bg-white border border-gray-300 rounded-md p-4 mb-4">
      <h2 className="text-xl font-semibold mb-5">Your Shortcuts</h2>
      <div className="flex flex-col md:space-y-5 cursor-pointer">
        <div className="flex items-center mb-2">
          <FaBookmark className="text-blue-500 text-2xl mr-2" />
          <h3 className="text-md font-semibold">Bookmarks</h3>
        </div>
        <div className="flex items-center mb-2">
          <FaUserFriends className="text-blue-500 text-2xl mr-2" />
          <h3 className="text-md font-semibold">Friends</h3>
        </div>
        
        <div className="flex items-center mb-2">
          <FaClock className="text-blue-500 text-2xl mr-2" />
          <h3 className="text-md font-semibold">Recent Activity</h3>
        </div>
        <div className="flex items-center mb-2">
          <FaRegFlag className="text-blue-500 text-2xl mr-2" />
          <h3 className="text-md font-semibold">Flagged Posts</h3>
        </div>
        <div className="flex items-center mb-2">
          <FaUsers className="text-blue-500 text-2xl mr-2" />
          <h3 className="text-md font-semibold">Group</h3>
        </div>
        <div className="flex items-center mb-2">
          <FaGamepad className="text-blue-500 text-2xl mr-2" />
          <h3 className="text-md font-semibold">Games</h3>
        </div>
        <div className="flex items-center mb-2">
          <FaStoreAlt className="text-blue-500 text-2xl mr-2" />
          <h3 className="text-md font-semibold">Marketplace</h3>
        </div>
      </div>
    </div>
  );
}

export default YourShortcuts;
