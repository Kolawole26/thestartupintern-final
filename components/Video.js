import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";

function Video() {
  return (
    <>
        <div className="relative">
            <div className=' bg-nav-black md:pt-14 pt-7 lg:pb-60 pb-16 px-7 md:px-36 '>
                <div className="lg:flex-row justify-items-center  flex flex-col items-center ">
                    <div className="flex items-center lg:mr-20 mx-12 lg:mx-0 lg:mb-0 mb-9 ">
                        <div className=" stroke-2 stroke-white mr-1">
                            <Image src="/assets/bicep.png" width={69} height={67} className="stroke-white" alt="bicep"/>
                        </div>
                        <div>
                            <h1 className=" font-Futura text-white md:text-44 text-3xl">143</h1>
                            <p className=" font-SF-Regular md:text-lg text-xs text-white">LOREM IPSUM</p>
                        </div>
                    </div>
                    <div className="flex items-center lg:mr-20 mx-12 lg:mx-0 lg:mb-0 mb-9 ">
                        <div className=" stroke-2 stroke-white mr-1">
                            <Image src="/assets/stationary-bike.png" width={69} height={67}  alt="stationary-bike" />
                        </div>
                        <div>
                            <h1 className=" font-Futura text-white md:text-44 text-3xl">654</h1>
                            <p className=" font-SF-Regular md:text-lg text-xs text-white">LOREM IPSUM</p>
                        </div>
                    </div>
                    <div className="flex items-center lg:mr-20 mx-12 lg:mx-0 lg:mb-0 mb-9 ">
                        <div className=" stroke-2 stroke-white mr-1">
                            <Image src="/assets/medicine.png" width={69} height={67} alt="medicine" />
                        </div>
                        <div>
                            <h1 className=" font-Futura text-white md:text-44 text-3xl">246</h1>
                            <p className=" font-SF-Regular md:text-lg text-xs text-white">LOREM IPSUM</p>
                        </div>
                    </div>
                    <div className="flex items-center lg:mr-20 mx-12 lg:mx-0 lg:mb-0 mb-9 ">
                        <div className=" stroke-2 stroke-white mr-1">
                            <Image src="/assets/weight-lifter.png" width={110} height={67}  alt="weight-lifter"/>
                        </div>
                        <div>
                            <h1 className=" font-Futura text-white md:text-44 text-3xl">545</h1>
                            <p className=" font-SF-Regular md:text-lg text-xs text-white">LOREM IPSUM</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className=" relative">
                <div className=" ">
                    <div className=" lg:block hidden absolute left-36">
                        <Image src="/assets/back-line.png" width={1000} height={480} alt="back-line"/>
                    </div>
                    <div className=' mx-7 my-7  lg:mx-0 lg:my-0 lg:absolute lg:top-m120 right-0 flex justify-center items-center bg-black bg-press-up bg-cover lg:h-550 py-11 lg:py-0 max-w-1200 lg:w-full'>
                        <div className=" md:w-172 md:h-172 w-20 h-20 ">
                        <img src="/assets/play.png" alt="play" />
                        </div>
                    </div>
                    <p className=" lg:block hidden stk lg:tracking-s-23 tracking-widest font-SF-Bold lg:text-123 text-white rotate-m90 absolute lg:left-m170 lg:top-36">VIDEO</p>
                </div>
                
            </div>
            
        </div>
        <div className=" lg:pt-580 pb-16 text-center lg:pb-20">
            <div className="md:px-28 lg:px-40 px-7  mx-auto">
                <div className='relative flex justify-center'>
                    <h1 className=' stk font-SF-Bold md:text-96  text-33 text-white'>VIDEOS</h1>
                    <h2 className=' font-Futura md:text-59 text-2xl text-black  absolute bottom-2 md:bottom-14  '>Our Training Series</h2>
                    <div className=' md:w-48 w-24 h-1 bg-menu-bg border border-solid border-menu-bg absolute md:bottom-10 bottom-2 '></div>
                </div>
                <p className=' font-Futura-Medium md:text-xl text-sm text-t-grey-6 md:mb-16 mb-11 max-w-821 mx-auto'>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, 
                    sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam.
                </p>
            </div>
            <div className=" lg:hidden md:px-40 px-7 py-3  ">
                    <div className="relative mx-auto flex justify-center mb-16 lg:mb-0">
                    <div className="  inset-0  relative overflow-hidden lg:mr-11 lg:mb-0  flex justify-center items-center">
                        <img src="/assets/lady1a.png" width={592} height={363} alt="lady1"/>
                        
                        <div className=" absolute bg-menu-bg inset-0 opacity-50  rounded-lg md:rounded-2xl "></div>
                        <div className=" absolute  w-16 h-16 md:w-104 md:h-104 mx-auto">
                            <Image src="/assets/play-2.png" width={104} height={104} alt="play"/>
                        </div>
                        
                    </div>
                        <div className=" bg-white absolute lg:bottom-m35 bottom-m25 md:px-5 px-2 md:py-2 py-1 rounded-t-2xl drop-shadow-md">
                            <p className=" font-SF-Bold md:text-sm text-xs text-menu-bg">EXERCISE NAME | S-2, E-4</p>
                            <h4 className=" font-Futura md:text-xl text-sm text-black">Lorem Ipsum Dolor Sit Amet</h4>
                        </div >
                    </div>
                    
                    <div className="relative mx-auto flex justify-center">
                    <div className="  inset-0  relative overflow-hidden  lg:mb-0  flex justify-center items-center">
                        <img src="/assets/gym-lady2.png" width={592} height={363} alt="lady2"/>
                        
                        <div className=" absolute bg-menu-bg inset-0 opacity-50  rounded-lg md:rounded-2xl "></div>
                        <div className=" absolute  w-16 h-16 md:w-104 md:h-104 mx-auto">
                            <Image src="/assets/play-2.png" width={104} height={104} alt="play"/>
                        </div>
                        
                    </div>
                        <div className=" bg-white absolute lg:bottom-m35 bottom-m25 md:px-5 px-2 md:py-2 py-1 rounded-t-2xl drop-shadow-md">
                            <p className=" font-SF-Bold md:text-sm text-xs text-menu-bg">EXERCISE NAME | S-2, E-3</p>
                            <h4 className=" font-Futura md:text-xl text-sm text-black">Lorem Ipsum Dolor Sit Amet</h4>
                        </div >
                    </div>
                
            </div>

            <Swiper
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide className='hidden lg:block md:my-10 my-7'>
          <div className='h-96 w-50 pb-24   flex justify-center items-center'>
          <div className=" lg:flex md:px-40 px-7 py-3  ">
                    <div className="relative mx-auto flex justify-center mb-16 lg:mb-0">
                    <div className="  inset-0  relative overflow-hidden lg:mr-11 lg:mb-0  flex justify-center items-center">
                        <img src="/assets/lady1a.png" width={592} height={363} alt="lady1"/>
                        
                        <div className=" absolute bg-menu-bg inset-0 opacity-50  rounded-lg md:rounded-2xl "></div>
                        <div className=" absolute  w-16 h-16 md:w-104 md:h-104 mx-auto">
                            <Image src="/assets/play-2.png" width={104} height={104} alt="play"/>
                        </div>
                        
                    </div>
                        <div className=" bg-white absolute lg:bottom-m35 bottom-m25 md:px-5 px-2 md:py-2 py-1 rounded-t-2xl drop-shadow-md">
                            <p className=" font-SF-Bold md:text-sm text-xs text-menu-bg">EXERCISE NAME | S-2, E-4</p>
                            <h4 className=" font-Futura md:text-xl text-sm text-black">Lorem Ipsum Dolor Sit Amet</h4>
                        </div >
                    </div>
                    
                    <div className="relative mx-auto flex justify-center">
                    <div className="  inset-0  relative overflow-hidden  lg:mb-0  flex justify-center items-center">
                        <img src="/assets/gym-lady2.png" width={592} height={363} alt="lady2"/>
                        
                        <div className=" absolute bg-menu-bg inset-0 opacity-50  rounded-lg md:rounded-2xl "></div>
                        <div className=" absolute  w-16 h-16 md:w-104 md:h-104 mx-auto">
                            <Image src="/assets/play-2.png" width={104} height={104} alt="play"/>
                        </div>
                        
                    </div>
                        <div className=" bg-white absolute lg:bottom-m35 bottom-m25 md:px-5 px-2 md:py-2 py-1 rounded-t-2xl drop-shadow-md">
                            <p className=" font-SF-Bold md:text-sm text-xs text-menu-bg">EXERCISE NAME | S-2, E-3</p>
                            <h4 className=" font-Futura md:text-xl text-sm text-black">Lorem Ipsum Dolor Sit Amet</h4>
                        </div >
                    </div>
                
            </div>
 
          </div>
        </SwiperSlide>
        <SwiperSlide></SwiperSlide>
        <SwiperSlide></SwiperSlide>
        
      </Swiper>

        </div>
    </>
  )
}

export default Video