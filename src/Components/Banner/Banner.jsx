import { Autoplay, Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Swiper, SwiperSlide } from "swiper/react";

const bannerImage =
  "https://images.unsplash.com/photo-1573152143286-0c422b4d2175?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80s";
const bannerImage2 =
  "https://images.unsplash.com/photo-1472393365320-db77a5abbecc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80";

const bannerImage3 =
  "https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80";

const Banner = () => {
  return (
    <div className='container mx-auto '>
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        navigation
        autoplay={{ delay: 2000 }}
        speed={1000}
        loop={true}
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        modules={[Pagination, Navigation, Autoplay]}
      >
        <SwiperSlide>
          <div className='banner h-440 w-full overflow-hidden relative'>
            <img
              src={bannerImage}
              alt='Banner'
              className='banner-image h-full w-full object-cover'
              style={{ height: "450px" }}
            />
            <div className='absolute inset-0 bg-black bg-opacity-50'></div>
            <div className='flex justify-center'>
              <div
                style={{ width: "1040px" }}
                className='bottom-20 absolute   text-white'
              >
                <h1 className='text-5xl font-bold mb-3'>Our Worldwide Users</h1>
                <p className='text-lg font-medium'>100M+ Users create account</p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='banner h-440 w-full overflow-hidden relative'>
            <img
              src={bannerImage2}
              alt='Banner'
              className='banner-image h-full w-full object-cover'
              style={{ height: "450px" }}
            />
            <div className='absolute inset-0 bg-black bg-opacity-50'></div>
            <div className='flex justify-center'>
              <div
                style={{ width: "1040px" }}
                className='bottom-20 absolute   text-white'
              >
                <h1 className='text-5xl font-bold mb-3'>
                 Grow Your Online Business
                </h1>
                <p className='text-lg font-medium'>
                  Around 10M+ People Start Business
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='w-full overflow-hidden relative'>
            <img
              src={bannerImage3}
              alt='Banner'
              className='h-full w-full object-cover'
              style={{ height: "450px" }}
            />
            <div className='absolute inset-0 bg-black bg-opacity-50'></div>
            <div className='flex justify-center'>
              <div
                style={{ width: "1040px" }}
                className='bottom-20 absolute   text-white'
              >
                <h1 className='text-5xl font-bold mb-3'>
                    Build Teaching  & Learning Platform
                </h1>
                <p className='text-md'>
                  10+M Students & Teacher Connect with us
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
