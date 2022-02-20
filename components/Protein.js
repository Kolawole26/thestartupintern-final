import React from 'react';
import Image from 'next/image';

function Protein() {
  return (
    <>
        <div className=' bg-white md:pt-28 pt-14 relative lg:pb-14'>
            <div className=" lg:block hidden absolute lg:top-0 lg:right-0">
                <Image src="/assets/back-line2.png" width={1200} height={755} alt="back-line"/>
            </div>
            <div className=' bg-white md:pt-28 md:pb-16 relative max-w-1300'>
                <div className=' lg:flex md:mx-36 mx-7 items-center '>
                    <div className='md:flex-1 '>
                        <div className=" relative inline-block md:px-10 py-10 px-9 md:py-10 border-l-5 border-solid border-border-R  before:absolute after:absolute before:border-border-R after:border-border-R before:right-2/4  after:right-2/4 before:left-0 after:left-0 before:h-5 after:h-5 before:border-r-5 after:border-r-5 before:top-0 before:border-t-5 after:bottom-0 after:border-b-5">
                            <div className=' flex items-center '>
                                <div className=' flex-1'>
                                    <Image src="/assets/Med.png" width={200} height={200} alt="Med"/>
                                </div>
                                <div className='flex-1 relative lg:right-48 right-20 '>
                                    <Image src="/assets/Med.png" width={739} height={739} alt="Med"/>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                    <div className=' md:flex-1 py-9 lg:py-0 '>
                        <h4 className=' font-SF-Bold md:text-base text-sm text-t-grey-3 md:mb-4'>BEST SELLING PRODUCT</h4>
                        <h1 className=' font-Futura md:text-59 text-2xl text-black max-w-md md:mb-3 md:leading-12'>WHEY PROTEIN</h1>
                        <div className=' md:w-48 w-24 h-1 bg-menu-bg border border-solid border-menu-bg md:mb-12 mb-8'></div>
                        <p className=' font-Futura-Medium md:text-xl text-sm text-t-grey-6 md:mb-7 mb-3'>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, 
                            sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
                        </p>
                        <div className=' mb-3 md:mb-5'>
                            <button className=' bg-t-grey-8 text-t-grey-7 font-SF-Semibold md:text-lg text-xs md:py-2 py-1 md:px-6 px-3 rounded-3xl mr-3 md:mr-5'>2,27 KG</button>
                            <button className=' bg-white text-black font-SF-Semibold md:text-lg text-xs md:py-2 py-1 md:px-6 px-3 rounded-3xl border border-black mr-3 md:mr-5'>4.54 KG</button>
                            <button className=' bg-t-grey-8 text-t-grey-7 font-SF-Semibold md:text-lg text-xs md:py-2 py-1 md:px-6 px-3 rounded-3xl mr-3 md:mr-5'>7,05 KG</button>
                        </div>
                        <h2 className='font-Futura md:text-59 text-2xl text-black md:leading-12 mb-3 md:mb-5'>$10</h2>
                        <div className=' md:flex '>
                        <button className=' font-SF-Light md:text-sm text-xs text-white md:py-4 py-2 md:px-14 px-7 bg-black  hover:bg-menu-bg hover:text-black transition duration-300 ease-in-out mr-3 md:mr-7 w-full '>ADD TO CART</button>
                        <button className=' font-SF-Light md:text-sm text-xs text-black md:py-4 py-2 md:px-14 px-7 bg-t-grey-8  hover:bg-menu-bg hover:text-black transition duration-300 ease-in-out mt-4 md:mt-0 w-full '>ADD WISHLIST</button>
                        </div>
                    </div>
                </div>
                <p className=" lg:block hidden stk lg:tracking-s-23 tracking-widest font-SF-Bold lg:text-123 text-white rotate-m90 absolute lg:left-m280 lg:top-56">PROTEIN</p>
            </div>
        </div>
    </>
  )
}

export default Protein