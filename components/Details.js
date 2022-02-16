import React from 'react';
import Image from 'next/image';

function Details() {
  return (
    <>
        <div className=' bg-nav-black md:pt-28 md:pb-52 py-14'>
          <div className=' text-center md:px-40 px-7'>
            <div className=' max-w-821 mx-auto'>
              <div className=''>
                <h1 className=' stk font-SF-Bold md:text-80 text-33 text-nav-black'>FEATURES</h1>
                <h2 className=' font-Futura md:text-59 text-2xl text-white  relative bottom-10 md:bottom-76 '>WHY CHOOSE US</h2>
                <div className=' md:w-48 w-24 h-1 bg-menu-bg border border-solid border-menu-bg relative md:bottom-16 bottom-11 mx-auto'></div>
              </div>
              <p className=' font-Futura-Medium md:text-xl text-sm text-t-grey-5 '>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, 
                sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam.
              </p>
            </div>
            <div className=' grid md:grid-cols-2 lg:grid-cols-4 gap-5 md:my-10 my-7'>
              <div className=' bg-border-black py-5 px-4'>
                <h3 className=' font-Futura md:text-xl text-base text-white md:mb-5 mb-3'>TOPS</h3>
                <div className=' md:mb-6 mb-4'>
                  <Image src="/assets/tops.svg" width={91} height={99}/>
                </div>
                <p className=' font-Futura-Medium md:text-lg text-xs text-t-grey-5'>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor.
                </p>
              </div>
              
              <div className=' bg-border-black py-5 px-4'>
                <h3 className=' font-Futura md:text-xl text-base text-white md:mb-5 mb-3'>BOTTOMS</h3>
                <div className=' md:mb-6 mb-4'>
                  <Image src="/assets/bottoms.svg" width={56} height={99}/>
                </div>
                <p className=' font-Futura-Medium md:text-lg text-xs text-t-grey-5'>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor.
                </p>
              </div>
              
              <div className=' bg-border-black py-5 px-4'>
                <h3 className=' font-Futura md:text-xl text-base text-white md:mb-5 mb-3'>HOODIES AND JACKETS</h3>
                <div className=' md:mb-6 mb-4'>
                  <Image src="/assets/hoodies.svg" width={85} height={98}/>
                </div>
                <p className=' font-Futura-Medium md:text-lg text-xs text-t-grey-5'>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor.
                </p>
              </div>
              
              <div className=' bg-border-black  py-5 px-4'>
                <h3 className=' font-Futura md:text-xl text-base text-white md:mb-5 mb-3'>ACCESSORIES</h3>
                <div className=' md:mb-6 mb-4'>
                  <Image src="/assets/accessories.svg" width={100} height={98}/>
                </div>
                <p className=' font-Futura-Medium md:text-lg text-xs text-t-grey-5'>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className=' bg-white '>
          <div className=' relative lg:pt-44'>
            <div className='lg:flex max-w-1600 lg:max-h-264 lg:absolute lg:bottom-0 right-0 '>
              <div className=' mx-7 my-7  lg:mx-0 lg:my-0  '>
                <Image src="/assets/lady1.png" width={428} height={264}/>
              </div>
              <div className=' bg-menu-bg py-6 md:px-16 px-7 md:flex-1 '>
                <h1 className=' font-Futura md:text-59 text-2xl text-white md:pt-2 md:mb-4'>TITLE HERE</h1>
                <div className='md:w-48 w-24 h-1 bg-white border border-solid border-white md:mb-4 mb-2'></div>
                <p className=' font-Futura-Medium md:text-xl text-sm text-white md:mb-4 mb-2 max-w-731'>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam .</p>
                <button className=' font-SF-Light md:text-sm text-xs text-white md:py-3 py-2 md:px-6 px-4 border border-white hover:bg-white hover:text-menu-bg transition duration-300 ease-in-out'>READ MORE</button>
              </div>
            </div>
       
          </div>
            <div className='lg:py-24 py-10 px-7 md:px-40 lg:flex md:bg-quotes2 bg-quotes1 bg-no-repeat bg-center'>
                <div className=' md:flex-1'>
                  <h4 className=' font-SF-Bold md:text-base text-sm text-t-grey-3 md:mb-4'>TESTIMONIAL</h4>
                  <h1 className=' font-Futura md:text-59 text-2xl text-black max-w-md md:mb-3 md:leading-12'>Reviews From You</h1>
                  <div className=' md:w-48 w-24 h-1 bg-menu-bg border border-solid border-menu-bg md:mb-12 mb-8'></div>
                  <h5 className=' font-SF-Regular md:text-lg text-xs text-t-grey-6 md:mb-3 mb-1'>Nutritionist</h5>
                  <h3 className=' font-SF-Bold md:text-xl text-base text-black md:mb-1'>JEREMY GEORGE</h3>
                  <div className=' flex items-center md:mb-11 mb-10'>
                    <div className=' md:mr-2 mr-1'>
                      <Image src="/assets/star2.png" width={13} height={13}/>
                    </div>
                    <div className=' md:mr-2 mr-1'>
                      <Image src="/assets/star2.png" width={13} height={13}/>
                    </div>
                    <div className=' md:mr-2 mr-1'>
                      <Image src="/assets/star2.png" width={13} height={13}/>
                    </div>
                    <div className=' md:mr-2 mr-1'>
                      <Image src="/assets/star2.png" width={13} height={13}/>
                    </div>
                    <div className=' md:mr-2 mr-1'>
                      <Image src="/assets/star2.png" width={13} height={13}/>
                    </div>
                  </div>
                  <p className=' font-Futura-Medium md:text-lg text-xs text-t-grey-6 lg:mb-0 mb-10 max-w-lg'>
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et 
                  dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet 
                  clita kasd gubergren, no sea takimata.
                  </p>
                  
                </div>
                <div className=' flex-1'>
                <Image src="/assets/man2.png" width={615} height={631}/>
                </div>
              </div>
        </div>
    </>
  )
}

export default Details