import React, { useEffect, useState } from "react";
import FriendRequest from "../FriendReq/FriendRequest";
import Friends from "../Friends/Friends";
import GroupConversation from "../GroupConversation/GroupConversation";
import Stories from "../Stories/Stories";
import YourShortcuts from "../YourShortcuts/YourShortcuts";
import PostCard from "./Post";

const Content = ({ join }) => {
  const [locationEdit, setLocationEdit] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    // Add event listener for window resize
    window.addEventListener("resize", handleResize);

    // Initial check for mobile view on component mount
    handleResize();

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    fetch("http://localhost:3000/posts")
      .then((res) => res.json())
      .then((data) => setPosts(data));
  }, []);

  return (
    <>
      {isMobile ? (
        <div className='mt-14  mx-auto p-5 md:absolute sm:fixed flex flex-col justify-center'>
          {posts?.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>
      ) : (
        <>
          {" "}
          <div className='max-w-7xl mx-auto mt-10'>
            <div className='grid grid-cols-12 gap-20'>
              <div className='col-span-3'>
                <YourShortcuts></YourShortcuts>
              </div>
              <div className='col-span-5'>
                <Stories></Stories>

                {posts.map((post) => (
                  <PostCard key={post.id} post={post} />
                ))}
              </div>
              <div className='col-span-4'>
                <FriendRequest></FriendRequest>
                <Friends></Friends>
                <GroupConversation></GroupConversation>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Content;
