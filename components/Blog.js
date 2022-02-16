import React from 'react'
import Image from 'next/image'

function Blog() {
  return (
    <>
        <div className=' lg:pb-48 pb-14'>
            <div className="md:px-40 px-7 max-w-821 mx-auto text-center">
                    <div className=''>
                        <h1 className=' stk font-SF-Bold md:text-80 text-33 text-white'>BLOG</h1>
                        <h2 className=' font-Futura md:text-59 text-2xl text-black  relative bottom-10 md:bottom-76 '>Our Latest Blog</h2>
                        <div className=' md:w-48 w-24 h-1 bg-menu-bg border border-solid border-menu-bg relative md:bottom-16 bottom-11 mx-auto'></div>
                    </div>
                    <p className=' font-Futura-Medium md:text-xl text-sm text-t-grey-6 md:mb-16 mb-11'>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, 
                        sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam.
                    </p>
            </div>
            <div className=' lg:flex md:mx-36 mx-7 lg:items-center md:mb-9 mb-5 '>
                <div className=' lg:mr-8 mb-6 lg:mb-0'>
                   <div className=' relative md:mb-9 mb-3 object-cover '>
                        <Image src="/assets/blog1.png" width={407} height={252} />
                        <div className=' bg-menu-bg  md:w-16  w-8 absolute bottom-11 left-9 text-center'>
                            <p className=' font-SF-Regular  md:py-2 px-auto text-white md:text-lg text-xs '><span className=' md:text-2xl text-sm block'>23</span>JAN</p>
                        </div>
                   </div>
                   <div className=' flex items-center'>
                       <div className='flex items-center mr-5'>
                           <div className=' mr-2'>
                                <Image src="/assets/admin.png" width={10} height={10} />
                           </div>
                           <p className=' font-SF-Regular md:text-sm text-xs text-t-grey-6'>ADMIN</p>
                       </div>
                       <div className='flex items-center mr-5'>
                           <div className=' mr-2'>
                                <Image src="/assets/calendar.png" width={10} height={10} />
                           </div>
                           <p className=' font-SF-Regular md:text-sm text-xs text-t-grey-6'>23 JAN</p>
                       </div>
                       <div className='flex items-center'>
                           <div className=' mr-2'>
                                <Image src="/assets/message.png" width={10} height={10} />
                           </div>
                           <p className=' font-SF-Regular md:text-sm text-xs text-t-grey-6'>12 COMMENTS</p>
                       </div>
                   </div>
                   <p className=' font-SF-Bold md:text-xl text-base text-black md:mb-4 mb-2'>LOREM IPSUM DOLOR SIT AMET, CONSETETUR SADIPSCING</p>
                   <p className=' font-Futura-Medium md:text-lg text-xs text-t-grey-6 md:mb-7 mb-3'>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat.</p>
                   <button className=" border border-black border-solid md:py-4 md:px-12 py-2 px-6 text-black  hover:bg-menu-bg transition duration-300 ease-in-out font-SF-Light opacity-80 text-xs md:text-base ">READ MORE</button>
                </div>


                <div className='lg:mr-8 mb-6 lg:mb-0' >
                   <div className=' relative md:mb-9 mb-3'>
                        <Image src="/assets/blog2.png" width={407} height={252} />
                        <div className=' bg-menu-bg  md:w-16  w-8 absolute bottom-11 left-9 text-center '>
                            <p className=' font-SF-Regular  md:py-2 px-auto text-white md:text-lg text-xs '><span className=' md:text-2xl text-sm block'>14</span>JAN</p>
                        </div>
                   </div>
                   <div className=' flex items-center'>
                       <div className='flex items-center mr-5'>
                           <div className=' mr-2'>
                                <Image src="/assets/admin.png" width={10} height={10} />
                           </div>
                           <p className=' font-SF-Regular md:text-sm text-xs text-t-grey-6'>ADMIN</p>
                       </div>
                       <div className='flex items-center mr-5'>
                           <div className=' mr-2'>
                                <Image src="/assets/calendar.png" width={10} height={10} />
                           </div>
                           <p className=' font-SF-Regular md:text-sm text-xs text-t-grey-6'>14 JAN</p>
                       </div>
                       <div className='flex items-center'>
                           <div className=' mr-2'>
                                <Image src="/assets/message.png" width={10} height={10} />
                           </div>
                           <p className=' font-SF-Regular md:text-sm text-xs text-t-grey-6'>12 COMMENTS</p>
                       </div>
                   </div>
                   <p className=' font-SF-Bold md:text-xl text-base text-black md:mb-4 mb-2'>LOREM IPSUM DOLOR SIT AMET, CONSETETUR SADIPSCING</p>
                   <p className=' font-Futura-Medium md:text-lg text-xs text-t-grey-6 md:mb-7 mb-3'>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat.</p>
                   <button className=" border border-black border-solid md:py-4 md:px-12 py-2 px-6 text-black  hover:bg-menu-bg transition duration-300 ease-in-out font-SF-Light opacity-80 text-xs md:text-base ">READ MORE</button>
                </div>


                <div className='lg:mr-8' >
                   <div className=' relative md:mb-9 mb-3'>
                        <Image src="/assets/blog3.png" width={407} height={252} />
                        <div className=' bg-menu-bg  md:w-16  w-8 absolute bottom-11 left-9 text-center '>
                            <p className=' font-SF-Regular  md:py-2 px-auto text-white md:text-lg text-xs '><span className=' md:text-2xl text-sm block'>05</span>JAN</p>
                        </div>
                   </div>
                   <div className=' flex items-center'>
                       <div className='flex items-center mr-5'>
                           <div className=' mr-2'>
                                <Image src="/assets/admin.png" width={10} height={10} />
                           </div>
                           <p className=' font-SF-Regular md:text-sm text-xs text-t-grey-6'>ADMIN</p>
                       </div>
                       <div className='flex items-center mr-5'>
                           <div className=' mr-2'>
                                <Image src="/assets/calendar.png" width={10} height={10} />
                           </div>
                           <p className=' font-SF-Regular md:text-sm text-xs text-t-grey-6'>05 JAN</p>
                       </div>
                       <div className='flex items-center'>
                           <div className=' mr-2'>
                                <Image src="/assets/message.png" width={10} height={10} />
                           </div>
                           <p className=' font-SF-Regular md:text-sm text-xs text-t-grey-6'>12 COMMENTS</p>
                       </div>
                   </div>
                   <p className=' font-SF-Bold md:text-xl text-base text-black md:mb-4 mb-2'>LOREM IPSUM DOLOR SIT AMET, CONSETETUR SADIPSCING</p>
                   <p className=' font-Futura-Medium md:text-lg text-xs text-t-grey-6 md:mb-7 mb-3'>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat.</p>
                   <button className=" border border-black border-solid md:py-4 md:px-12 py-2 px-6 text-black  hover:bg-menu-bg transition duration-300 ease-in-out font-SF-Light opacity-80 text-xs md:text-base">READ MORE</button>
                </div>
            </div>
            <p className=' font-SF-Regular md:text-base text-xs text-menu-bg text-center'>VIEW MORE</p>
        </div>
        <div className=' bg-border-white'>
            <div className=' bg-menu-bg md:py-24 md:px-20 py-11 px-10 lg:flex justify-between lg:bg-mail bg-no-repeat bg-left-bottom max-w-1200 mx-auto lg:rounded-3xl lg:relative lg:bottom-20'>
                <div>
                    <h1 className=' font-Futura md:text-6xl text-3xl text-white'>LETS START!</h1>
                    <h3 className=' font-Futura-Book md:text-4xl text-xl text-white md:mb-6 mb-3'>SUBSCRIBE TO OUR NEWSLETTER</h3>
                    <p className=' font-Futura-Book md:text-lg text-xs text-white max-w-lg'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                </div>
                <div className=' mt-5 lg:mt-0'>
                    <input type="text" placeholder='Name' className=' font-SF-Regular md:text-base text-xs text-t-grey-9 md:py-5 py-3 md:pl-6 pl-3 bg-white border-2 border-border-white-2 w-full md:mb-7 mb-4'/>
                    <input type="text" placeholder='Email' className=' font-SF-Regular md:text-base text-xs text-t-grey-9 md:py-5 py-3 md:pl-6 pl-3 bg-white border-2 border-border-white-2 w-full md:mb-7 mb-4'/>
                    <button className=' font-SF-Medium md:text-base text-xs bg-nav-black text-white md:py-5 py-3 px-auto w-full hover:text-menu-bg transition duration-300 ease-in-out'>SUBSCRIBE</button>
                </div>
            </div>
        </div>
    </>
  )
}

export default Blog