import React from 'react';
import Image from 'next/image';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';


function Header() {
  return (
    <>
        <div>
            <div className=" md:bg-model bg-model-mobile bg-cover bg-center bg-repeat h-screen w-full relative">
                
                {/* <div className=" w-52 h-80 border-l border-b border-solid border-menu-bg border-t before:h-1/5 before:absolute before:right-0 before:border-r before:bottom-0 after:h-1/5 after:absolute after:right-0 after:border-r">hgdhgdhgdhgs</div> */}
                <div className=" md:mt-44 mt-80 lg:ml-56 ml-9 relative inline-block md:px-10 py-10 px-9 md:py-10 border-l-5 border-solid border-border-R  before:absolute after:absolute before:border-border-R after:border-border-R before:right-2/4  after:right-2/4 before:left-0 after:left-0 before:h-5 after:h-5 before:border-r-5 after:border-r-5 before:top-0 before:border-t-5 after:bottom-0 after:border-b-5">
                  <div className=''>
                    <h6 className="text-white md:text-2xl text-base font-SF-Bold">Tageline here</h6>
                      <h1 className="text-white text-4xl md:text-8xl mb-3 font-Futura font-bold ">Title Here</h1>
                      <h3 className="hidden md:block text-white md:text-4xl mb-9 font-Futura-Medium">Description Here</h3>
                      <button className=" border border-white border-solid md:py-4 md:px-8 py-3 px-6 text-white  hover:bg-menu-bg transition duration-300 ease-in-out font-SF-Light opacity-80 text-xs md:text-xl">JOIN US NOW</button>
                      <div className=" md:border-l-2 border-l-3 border-border-R p-1 md:border-b-2 border-b-3 md:w-12 w-10 md:h-12 h-9 absolute md:bottom-8 bottom-8 md:left-8 left-7"></div>
                  </div>
                </div>
                
                <div className={`hidden lg:block`}>
                  <div className=' bg-white bg-opacity-50 flex justify-center items-center  max-h-16 w-16 rounded-full absolute top-80 left-7 '>
                      <FontAwesomeIcon icon={faAngleLeft} className='text-white text-3xl px-7 py-7' />
                  </div>
                  <div className=' bg-white bg-opacity-50 flex justify-center items-center  max-h-16 w-16 rounded-full absolute top-80 right-7'>
                      <FontAwesomeIcon icon={faAngleRight} className='text-white text-3xl px-7 py-7' />
                  </div>
                </div>
                
            </div>
      </div>
    </>
  );
}

export default Header;
