import Image from "next/image"

function About() {
  return (
    <>
        <div className=" bg-white bg-red-bg-design  bg-no-repeat bg-right-bottom bg-100% md:bg-45%">
            <div className=" lg:flex  px-8 md:mt-32 mt-20 md:px-44">
                <div className=" flex-1">
                    <h4 className=" font-SF-Bold text-t-grey-3 md:text-lg text-base">ABOUT US</h4>
                    <h1 className=" font-Futura md:text-6xl text-4xl text-black">Who Are We</h1>
                    <div className=' md:w-48 w-24 h-1 bg-menu-bg border border-solid border-menu-bg mb-3'></div>
                    <p className=" font-Futura-Medium md:text-xl text-base text-t-black-1 md:mb-12 mb-10 ">
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
                    At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, 
                    consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et
                    </p>

                    <div className="">
                        <div className=" flex md:mb-10 mb-8 items-center">
                            <div className=" md:mr-10 mr-8"><Image src="/assets/sit-up.svg" width={62} height={41} alt="sit-up"/></div>
                            <div>
                                <h4 className=" md:text-lg text-xs font-SF-Bold text-black">Fitness Exercise</h4>
                                <p className=" md:text-xl text-xs font-Futura-Medium text-t-grey-4">Lorem ipsum dolor sit amet, consetetur.</p>
                            </div>
                        </div>
                        <div className=" flex   mb-8 items-center">
                            <div className=" md:mr-10 mr-8"><Image src="/assets/outline.svg" width={62} height={62} alt="outline"/></div>
                            <div>
                                <h4 className=" md:text-lg text-xs font-SF-Bold text-black">Cardio Training</h4>
                                <p className=" md:text-xl text-xs font-Futura-Medium text-t-grey-4">Lorem ipsum dolor sit amet, consetetur.</p>
                            </div>
                        </div>
                        
                    </div>
                </div>
                <div className=" flex-1  ">
                    <img src="/assets/couples.png" className="  h-full w-full " alt="couples"/>
                </div>
            </div>

               
        </div>

        
    </>
  )
}

export default About