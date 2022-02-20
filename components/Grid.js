import Image from "next/image"

function Grid() {
  return (
    <>
        <div className=' '>
            <div className="grid grid-cols-3 gap-0">
                <div className=' flex-col bg-light-black bg-16-express bg-right-bottom bg-50% md:bg-25% bg-no-repeat'>
                    <div className=" md:pr-14 text-right md:text-center md:max-w-254 ml-auto">
                        <div className=" pt-4 md:pt-20 ">
                            <Image src="/assets/16-express.svg" width={92} height={40} alt="express"/>
                        </div>
                        <h5 className=" font-Futura text-white text-center text-xx mt-1 md:text-2xl mb-6 md:mb-5">PROGRESSION</h5>
                        <p className=" hidden md:block ml-auto text-base font-SF-Regular text-t-grey-2 text-center mb-20 ">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor.</p>
                    </div>
                </div>
                
                <div className='flex-col bg-border-white bg-power bg-right-bottom bg-50% md:bg-25% bg-no-repeat'>
                    <div className=" md:text-center md:max-w-254 mx-auto">
                        <div className=" text-center md:pt-20 pt-4 ">
                                <Image src="/assets/XMLID_1490_.svg" width={92} height={40} alt="XMLID"/>
                        </div>
                        <h5 className=" font-Futura text-menu-bg text-xx mt-1 text-center md:text-2xl mb-6 md:mb-5">WORKOUT</h5>
                        <p className=" hidden md:block text-base font-SF-Regular text-t-grey text-center mb-20 ">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor.</p>
                    </div>
                    
                </div>
                
                <div className='flex-col bg-menu-bg bg-clipboard bg-right-bottom md:bg-bottom bg-50% md:bg-25% bg-no-repeat'>
                    <div className=" md:pl-12   md:text-center md:max-w-254  ">
                        <div className=" pt-4 md:pt-20">
                            <Image src="/assets/clipboard.svg" width={92} height={40} alt="clipboard"/>
                        </div>
                        <h5 className=" font-Futura text-white text-xx mt-1 mb-6 md:text-2xl md:mb-5 pl-7 md:pl-0 ">NUTRITION</h5>
                        <p className=" hidden md:block  text-base font-SF-Regular text-t-grey-2 text-center mb-20 ">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor.</p>
                    </div>
                </div>
                
            </div>
        </div>  
    </>
  )
}

export default Grid