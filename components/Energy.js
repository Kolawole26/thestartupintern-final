import React from 'react'
import Image from 'next/image'

function Energy() {
  return (
    <>
        <div className=' bg-white lg:mt-20 relative'>
            <div className=' bg-blackBG bg-no-repeat bg-cover bg-center bg-black '>
                <div className=' px-7 md:px-36 py-8  lg:py-0 lg:flex items-center'>
                    <div>
                        <h1 className=' font-Futura md:text-59 text-2xl text-white md:pt-2 md:mb-4'>TITLE HERE</h1>
                        <div className='md:w-48 w-24 h-1 bg-white border border-solid border-white md:mb-4 mb-2'></div>
                        <p className=' font-Futura-Medium md:text-xl text-sm text-white md:mb-12 mb-6 max-w-731'>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam .</p>
                        <button className=' font-SF-Light md:text-sm text-xs text-white md:py-3 py-2 md:px-6 px-4 border border-white hover:bg-white hover:text-menu-bg transition duration-300 ease-in-out'>SHOP NOW</button>
                    </div>
                    <div className='lg:relative lg:bottom-32 mt-7 lg:mt-0'>
                        <div>
                            <Image src="/assets/med-container.png" width={739} height={739} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Energy