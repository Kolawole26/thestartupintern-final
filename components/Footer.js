import React from 'react';
import Image from 'next/image';

function Footer() {
  return (
    <>
        <div className=' bg-nav-black md:pt-20 pt-10 md:pb-16 pb-8 '>
            <div className='md:mx-36 mx-7 '>
                <div className=' lg:grid lg:grid-cols-4 gap-7 md:grid md:grid-cols-2 items-end'>
                    <div>
                        <div className='md:mb-9 mb-4'>
                            <Image src="/assets/logo.png" width={198} height={88} alt="logo"/>
                        </div>
                        <div className=' flex md:mb-5 mb-2'>
                            <div className=' md:mr-3 mr-2'>
                                <Image src="/assets/location-sharp.png" width={12} height={17} alt="location"/>
                            </div>
                            <p className=' font-Futura-Book md:text-base text-xs text-white'>463 Round Table Drive, Norwood, OH, Ohio</p>
                        </div>
                        <div className=' flex md:mb-10 mb-5'>
                            <div className=' md:mr-3 mr-2'>
                                <Image src="/assets/phone.png" width={15} height={15} alt="phone"/>
                            </div>
                            <p className=' font-Futura-Book md:text-base text-xs text-white'>+123456789</p>
                        </div>
                        
                        <div className=' flex items-center'>
                            <div className=' md:mr-6 mr-3'>
                                <Image src="/assets/linkedin.png" width={32} height={32} alt="linkedin"/>
                            </div>
                            <div className=' md:mr-6 mr-3'>
                                <Image src="/assets/twitter.png" width={32} height={32} alt="twitter"/>
                            </div>
                            <div className=' md:mr-6 mr-3'>
                                <Image src="/assets/facebook.png" width={32} height={32} alt="facebook"/>
                            </div>
                        </div>
                    </div>

                    <div className=' mt-4 lg:mt-0'>
                        <h4 className=' font-Futura-Medium md:text-2xl text-base text-white md:mb-10 mb-4'>Category</h4>
                        <p className=' font-Futura-Book md:text-base text-xs text-white md:mb-7 mb-3'>First Link</p>
                        <p className=' font-Futura-Book md:text-base text-xs text-white md:mb-7 mb-3'>Second Long Link</p>
                        <p className=' font-Futura-Book md:text-base text-xs text-white md:mb-7 mb-3'>Third Link</p>
                        <p className=' font-Futura-Book md:text-base text-xs text-white '>Fourth long Link</p>
                    </div>
                    
                    <div className=' mt-4 lg:mt-0'>
                        <h4 className=' font-Futura-Medium md:text-2xl text-base text-white md:mb-10 mb-4'>Category</h4>
                        <p className=' font-Futura-Book md:text-base text-xs text-white md:mb-7 mb-3'>First Link</p>
                        <p className=' font-Futura-Book md:text-base text-xs text-white md:mb-7 mb-3'>Second Long Link</p>
                        <p className=' font-Futura-Book md:text-base text-xs text-white md:mb-7 mb-3'>Third Link</p>
                        <p className=' font-Futura-Book md:text-base text-xs text-white '>Fourth long Link</p>
                    </div>
                    
                    <div className=' mt-4 lg:mt-0'>
                        <h4 className=' font-Futura-Medium md:text-2xl text-base text-white md:mb-10 mb-4'>Category</h4>
                        <p className=' font-Futura-Book md:text-base text-xs text-white md:mb-7 mb-3'>First Link</p>
                        <p className=' font-Futura-Book md:text-base text-xs text-white md:mb-7 mb-3'>Second Long Link</p>
                        <p className=' font-Futura-Book md:text-base text-xs text-white md:mb-7 mb-3'>Third Link</p>
                        <p className=' font-Futura-Book md:text-base text-xs text-white '>Fourth long Link</p>
                    </div>
                </div>
            </div>
        </div>
        <div className=' bg-black md:py-5 py-2 text-center'>
            <p className='font-Futura-Book md:text-base text-xs text-white'>Copyright 2020 - All right Recived</p>
        </div>
    </>
  )
}

export default Footer