import React from "react";
import { Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";

function Stories() {
  const stories = [
    {
      id: 1,
      name: "John Doe",
      profilePic:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      storyImage:
        "https://images.unsplash.com/photo-1664575599618-8f6bd76fc670?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    },
    {
      id: 2,
      name: "Jane Smith",
      profilePic:
        "https://images.unsplash.com/photo-1554151228-14d9def656e4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=386&q=80",
      storyImage:
        "https://images.unsplash.com/photo-1545239351-ef35f43d514b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80",
    },
    {
      id: 3,
      name: "Jane Smith",
      profilePic:
        "https://images.unsplash.com/photo-1492681290082-e932832941e6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80",
      storyImage:
        "https://images.unsplash.com/photo-1516251193007-45ef944ab0c6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    },
    {
      id: 4,
      name: "Jane Smith",
      profilePic:
        "https://images.unsplash.com/photo-1500048993953-d23a436266cf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80",
      storyImage:
        "https://images.unsplash.com/photo-1554177255-61502b352de3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    },
    {
      id: 5,
      name: "Jane Smith",
      profilePic:
        "https://images.unsplash.com/photo-1499952127939-9bbf5af6c51c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1176&q=80",
      storyImage:
        "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80",
    },
    {
        id: 6,
        name: "Rohan Row",
        profilePic:
          "https://images.unsplash.com/photo-1516251193007-45ef944ab0c6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
        storyImage:
          "https://images.unsplash.com/photo-1536924940846-227afb31e2a5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1166&q=80",
      },
  ];

  return (
    <div className='bg-white'>
      <div className='mx-auto h-64'>
        <Swiper
          slidesPerView={3}
          spaceBetween={10}
          autoplay={{ delay: 2000 }}
          speed={1000}
          centeredSlides={true}
          loop={true}
          modules={[Autoplay]}
        >
          {stories.map((story) => (
            <SwiperSlide key={story.id}>
              <div className='relative'>
                <div className='w-10 h-10 top-3 left-2 absolute border-2 border-green-500 rounded-full overflow-hidden'>
                  <img
                    src={story.profilePic}
                    alt={story.name}
                    className='object-cover w-full h-full'
                  />
                </div>
                <div className='mt-2 w-36 h-56 rounded-lg overflow-hidden'>
                  <img
                    src={story.storyImage}
                    alt=''
                    className='object-cover w-full h-full'
                  />
                </div>
                <p className='mt-2 absolute bottom-4 left-2 text-md font-medium text-white'>
                  {story.name}
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default Stories;
