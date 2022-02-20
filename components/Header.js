import React, { useState } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";


function Header() {



  return (
    <>
        <div>
            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        <SwiperSlide>
          <div className=" md:bg-model bg-model-mobile bg-cover bg-center bg-repeat h-screen w-full relative">
                  
                  
                  <div className=" md:mt-44 mt-80 lg:ml-56 ml-9 relative inline-block md:px-10 py-10 px-9 md:py-10 border-l-5 border-solid border-border-R  before:absolute after:absolute before:border-border-R after:border-border-R before:right-2/4  after:right-2/4 before:left-0 after:left-0 before:h-5 after:h-5 before:border-r-5 after:border-r-5 before:top-0 before:border-t-5 after:bottom-0 after:border-b-5">
                    <div className=''>
                      <h6 className="text-white md:text-2xl text-base font-SF-Bold">Tageline here</h6>
                        <h1 className="text-white text-4xl md:text-8xl mb-3 font-Futura font-bold ">Title Here</h1>
                        <h3 className="hidden md:block text-white md:text-4xl mb-9 font-Futura-Medium">Description Here</h3>
                        <button className=" border border-white border-solid md:py-4 md:px-8 py-3 px-6 text-white  hover:bg-menu-bg transition duration-300 ease-in-out font-SF-Light opacity-80 text-xs md:text-xl">JOIN US NOW</button>
                        <div className=" md:border-l-2 border-l-3 border-border-R p-1 md:border-b-2 border-b-3 md:w-12 w-10 md:h-12 h-9 absolute md:bottom-8 bottom-8 md:left-8 left-7"></div>
                    </div>
                  </div>
                 
                  
                  
              </div>
        </SwiperSlide>
        <SwiperSlide></SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
      </Swiper>

      

      </div>

    </>
  );
}

export default Header;
