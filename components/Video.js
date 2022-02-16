import Image from "next/image"

function Video() {
  return (
    <>
        <div className="relative">
            <div className=' bg-nav-black md:pt-14 pt-7 md:pb-60 pb-32 px-7 md:px-36 '>
                <div className="lg:flex justify-items-center ">
                    <div className="flex items-center lg:mr-20 mx-12 lg:mx-0 lg:mb-0 mb-6 ">
                        <div className=" stroke-2 stroke-white mr-1">
                            <Image src="/assets/bicep.png" width={69} height={67} className="stroke-white" />
                        </div>
                        <div>
                            <h1 className=" font-Futura text-white md:text-44 text-3xl">143</h1>
                            <p className=" font-SF-Regular md:text-lg text-xs text-white">LOREM IPSUM</p>
                        </div>
                    </div>
                    <div className="flex items-center lg:mr-20 mx-12 lg:mx-0 lg:mb-0 mb-6 ">
                        <div className=" stroke-2 stroke-white mr-1">
                            <Image src="/assets/stationary-bike.png" width={69} height={67} className="stroke-white" />
                        </div>
                        <div>
                            <h1 className=" font-Futura text-white md:text-44 text-3xl">654</h1>
                            <p className=" font-SF-Regular md:text-lg text-xs text-white">LOREM IPSUM</p>
                        </div>
                    </div>
                    <div className="flex items-center lg:mr-20 mx-12 lg:mx-0 lg:mb-0 mb-6 ">
                        <div className=" stroke-2 stroke-white mr-1">
                            <Image src="/assets/medicine.png" width={69} height={67} className="stroke-white" />
                        </div>
                        <div>
                            <h1 className=" font-Futura text-white md:text-44 text-3xl">246</h1>
                            <p className=" font-SF-Regular md:text-lg text-xs text-white">LOREM IPSUM</p>
                        </div>
                    </div>
                    <div className="flex items-center lg:mr-20 mx-12 lg:mx-0 lg:mb-0 mb-6 ">
                        <div className=" stroke-2 stroke-white mr-1">
                            <Image src="/assets/weight-lifter.png" width={110} height={67} className="stroke-white" />
                        </div>
                        <div>
                            <h1 className=" font-Futura text-white md:text-44 text-3xl">545</h1>
                            <p className=" font-SF-Regular md:text-lg text-xs text-white">LOREM IPSUM</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className=" relative ">
                <div className=" ">
                    <div className=" lg:block hidden absolute left-36">
                        <Image src="/assets/back-line.png" width={1000} height={480}/>
                    </div>
                    <div className=' mx-7 my-7  lg:mx-0 lg:my-0 max-w-1200 lg:absolute lg:top-m120 right-0 bg-black '>
                        <Image src="/assets/press-up.png" width={1550} height={665}/>
                    </div>
                    <div className=" absolute lg:right-36 lg:top-11 top-8 md:top-16 md:left-72 left-32 w-14 h-14 md:w-172 md:h-172 mx-auto">
                        <Image src="/assets/play.png" width={172} height={172}/>
                    </div>
                    <p className=" lg:block hidden stk lg:tracking-s-23 tracking-widest font-SF-Bold lg:text-123 text-white rotate-m90 absolute lg:left-m170 lg:top-36">VIDEO</p>
                </div>
                
            </div>
            
        </div>
        <div className=" lg:pt-580 pb-4 text-center">
            <div className="md:px-40 px-7 max-w-821 mx-auto">
                <div className=''>
                    <h1 className=' stk font-SF-Bold md:text-80 text-33 text-white'>VIDEOS</h1>
                    <h2 className=' font-Futura md:text-59 text-2xl text-black  relative bottom-10 md:bottom-76 '>Our Training Series</h2>
                    <div className=' md:w-48 w-24 h-1 bg-menu-bg border border-solid border-menu-bg relative md:bottom-16 bottom-11 mx-auto'></div>
                </div>
                <p className=' font-Futura-Medium md:text-xl text-sm text-t-grey-6 md:mb-16 mb-11'>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, 
                    sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam.
                </p>
            </div>
            <div className=" lg:flex md:px-40 px-7 py-3 ">
                
                    <div className="  inset-0  relative overflow-hidden lg:mr-11 lg:mb-0 mb-6">
                        <Image src="/assets/gym-lady1.png" width={592} height={363}/>
                        
                        <div className=" absolute bg-menu-bg inset-0 opacity-50 "></div>
                        <div className=" absolute lg:left-60 lg:top-32 top-11 md:top-20 md:left-54 left-28 w-16 h-16 md:w-104 md:h-104 mx-auto">
                            <Image src="/assets/play-2.png" width={104} height={104}/>
                        </div>
                    </div>
                    
                    
                    <div className=" inset-0  relative overflow-hidden ">
                        <Image src="/assets/gym-lady2.png" width={592} height={363}/>
                        <div className=" absolute bg-menu-bg inset-0 opacity-50 "></div>

                        <div className=" absolute lg:left-60 lg:top-32 top-11 md:top-20 md:left-54 left-28 w-16 h-16 md:w-104 md:h-104 mx-auto">
                            <Image src="/assets/play-2.png" width={104} height={104}/>
                        </div>
                    
                    </div>

                
            </div>
        </div>
    </>
  )
}

export default Video