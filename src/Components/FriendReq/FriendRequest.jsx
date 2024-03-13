import React from "react";
import { FaTimes } from "react-icons/fa";

function FriendRequest() {
  return (
    <div className='bg-white border border-gray-300 rounded-md p-4 mb-4'>
      <h2 className='text-lg font-semibold mb-4'>Friend Requests</h2>
      <div className='flex items-center mb-3'>
        <img
          src='https://images.unsplash.com/photo-1554151228-14d9def656e4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=386&q=80'
          alt='Friend 1'
          className='w-10 h-10 object-cover rounded-full mr-3'
        />
        <div>
          <h3 className='text-sm font-semibold'>tanisa khann</h3>
          <div className='flex items-center space-x-4'>
            <button className='text-sm text-gray-500'>Confirm</button>
            <button className='text-sm text-red-500 ml-2'>
              <FaTimes />
            </button>
          </div>
        </div>
      </div>
      <div className='flex items-center mb-3'>
        <img
          src='https://images.unsplash.com/photo-1500048993953-d23a436266cf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80'
          alt='Friend 2'
          className='w-10 h-10 object-cover rounded-full mr-3'
        />
        <div>
          <h3 className='text-sm font-semibold'>John Smith</h3>
          <div className='flex items-center space-x-4'>
            <button className='text-sm text-gray-500'>Confirm</button>
            <button className='text-sm text-red-500 ml-2'>
              <FaTimes />
            </button>
          </div>
        </div>
      </div>
      {/* Add more friend requests here */}
      <button className='text-sm text-[#0A69DC] flex items-center'>
        See All
      </button>
    </div>
  );
}

export default FriendRequest;
