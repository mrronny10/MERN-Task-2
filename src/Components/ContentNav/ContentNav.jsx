import React, { useEffect, useState } from "react";
import { FaArrowDown } from "react-icons/fa";

const ContentNav = () => {
    
  /** HOOK */
  const [isMobile, setIsMobile] = useState(false);

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

  return (
    <>
      {isMobile ? (
        <>
          <div className='mx-auto' style={{ width: "360px" }}>
            <div className='flex absolute left-0 right-0 z-50 items-center justify-between p-5 mb-5'>
              <div>
                <span className='text-lg font-medium'>Posts(368)</span>
              </div>
              <div>
                <button className='bg-[#EDEEF0] px-4 py-2 rounded-md font-medium flex items-center space-x-2'>
                  <span>Fillter</span>{" "}
                  <span>
                    <FaArrowDown />{" "}
                  </span>
                </button>
              </div>
            </div>
          </div>
        </>
      ) : (
        <div>
          <div
            className='mx-auto max-w-7xl mt-5 border-b py-3 border-[#E0E0E0]'
            
          >
            <div className='flex items-center justify-between'>
              <div>
                <ul className='flex items-center space-x-6 cursor-pointer'>
                  <li className='font-medium'>All Posts(31)</li>
                  <li className='hover:font-medium'>Article</li>
                  <li className='hover:font-medium'>Event</li>
                  <li className='hover:font-medium'>Education</li>
                  <li className='hover:font-medium'>Job</li>
                </ul>
              </div>
              <div className='flex space-x-5'>
                <div>
                  <button className='bg-[#0A69DC] text-white px-4 py-2 rounded-md font-medium flex items-center space-x-2'>
                    <span>Write Post</span>{" "}
                    <span>
                      <FaArrowDown />{" "}
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ContentNav;
