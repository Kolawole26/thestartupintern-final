import React from 'react';
import Image from 'next/image';
import PhoneEnabledIcon from '@mui/icons-material/PhoneEnabled';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faEnvelope, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faYoutube, faGooglePlusG, faInstagram } from '@fortawesome/free-brands-svg-icons';
import Link from 'next/link';
import { useRouter } from 'next/router'


function Navbar({onClick, active}) {

  const router = useRouter()
  return (
      <>
        <header className=' sticky top-0 z-50'>
          <div className='hidden lg:block'>
            <div className='flex '>
              <div className='bg-logo-bg w-80 h-32 bg-cover py-6 px-12'>
              <Image src="/assets/logo.svg" width={217} height={80} alt="logo"/>
              </div>
            <div className='grow' >
              <div className='bg-nav-black h-12 flex items-center justify-between w-full '>
                <div className='flex justify-start'>
                  <div className='flex items-center pr-11 border-border-black border-r py-2.5'>
                    <div className='pl-5 pr-3'><PhoneEnabledIcon className=' text-white text-lg'/></div>
                    <p className='text-white text-sm font-SF-Bold'>740.993.7266</p>
                  </div>
                  <div className='flex items-center pr-16 border-border-black border-r py-2.5'>
                    <div className='pl-5 pr-3'><FontAwesomeIcon icon={faEnvelope} className='text-white text-lg' /></div>
                    <p className='text-white text-sm font-SF-Bold'>Shanny90@gmail.com</p>
                  </div>
                </div>
                <div className='flex  justify-items-end'>
                    <div className='px-5 border-border-black border-l py-2.5'><FontAwesomeIcon icon={faFacebookF} className='text-white text-lg' /></div>
                    <div className='px-5 border-border-black border-l py-2.5'><FontAwesomeIcon icon={faYoutube} className='text-white text-lg'/></div>
                    <div className='px-5 border-border-black border-l py-2.5'><FontAwesomeIcon icon={faGooglePlusG} className='text-white text-lg'/></div>
                    <div className='px-5 border-border-black border-l py-2.5'><FontAwesomeIcon icon={faInstagram} className='text-white text-lg'/></div>
                </div>
                
              </div>
              <div className='bg-white h-20 flex items-center justify-end'>
                <nav>
                  <ul className='flex items-center'>
                    <Link href='/'><a className={`${router.pathname == "/" ? " text-menu-bg" : "" } uppercase text-base text-black mr-16 ml-16 font-Futura-Book`}>HOME</a></Link>
                    <Link href='/'><a className={`${router.pathname == "/shop" ? " text-menu-bg" : "" } uppercase text-base text-black mr-16 font-Futura-Book`}>SHOP</a></Link>
                    <Link href='/'><a className={`${router.pathname == "/about" ? " text-menu-bg" : "" } uppercase text-base text-black mr-16 font-Futura-Book`}>ABOUT</a></Link>
                    <Link href='/'><a className={`${router.pathname == "/contact" ? " text-menu-bg" : "" } uppercase text-base text-black mr-16 font-Futura-Book`}>CONTACT</a></Link>
                    <Link href='/'><a className={`${router.pathname == "/faq" ? " text-menu-bg" : "" } uppercase text-base text-black mr-16 font-Futura-Book`}>FAQ</a></Link>
                    <Link href='/'><a onClick={onClick} className='px-7 border-border-white border-l py-7'><FontAwesomeIcon icon={faMagnifyingGlass} className='text-black text-base'/></a></Link>
                    {/* <div className={`${!active && 'hidden'} mr-4 `}> <input type="text" className='py-3 pl-3   font-SF-Regular text-base border-2 border-menu-bg' placeholder='Search'/></div> */}
                    <div className='h-20 w-20 bg-menu-bg px-6 py-7'><Image src="/assets/menu-bar.svg" width={31} height={20} alt="menu-bar"/></div>
                  </ul>
                </nav>
              </div>
            </div>
            </div>

            <div className={`${!active && 'hidden'}  bg-menu-bg  z-50`}>
                <form>
                  <div className="relative text-gray-600 focus-within:text-gray-400">
                    <span className="absolute inset-y-0 right-0 flex items-center pl-2 bg-black px-4">
                      <button type="submit" className="p-1 focus:outline-none focus:shadow-outline text-white ">
                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" className="w-6 h-6 stroke-2"><path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                      </button>
                    </span>
                    <input type="search" name="q" className="py-3 pl-5 font-SF-Regular text-base text-t-grey-9 border-2 border-menu-bg  focus:outline-none focus:bg-white focus:text-gray-900 w-full" placeholder="Search..." autoComplete="off"/>
                  </div>
                </form>
            </div>

          </div> 
         

          <div className='lg:hidden'>
            <div className=' h-14 bg-logo-bg-mobile flex items-center justify-between'>
              <div className=' pl-4'>
                <Image src="/assets/logo.svg" width={92} height={40} alt="logo"/>
              </div>
              <div onClick={onClick} className='bg-white px-4 h-full py-4'>
                <Image src="/assets/menu-bar-mobile.svg" width={31} height={20} alt="menu-bar"/>
              </div>
              
            </div>
            <nav className={`${!active && 'hidden'}  bg-menu-bg`}>
                <ul className='flex flex-col py-10 text-center divide-y '>
                    <Link href='/'><a className={`${router.pathname == "/" ? " text-t-grey" : "" } uppercase text-base text-white  font-Futura-Book py-3`}>HOME</a></Link>
                    <Link href='/'><a className={`${router.pathname == "/shop" ? " text-menu-bg" : "" } uppercase text-base text-white  font-Futura-Book py-3`}>SHOP</a></Link>
                    <Link href='/'><a className={`${router.pathname == "/about" ? " text-menu-bg" : "" } uppercase text-base text-white  font-Futura-Book py-3`}>ABOUT</a></Link>
                    <Link href='/'><a className={`${router.pathname == "/contact" ? " text-menu-bg" : "" } uppercase text-base text-white font-Futura-Book py-3`}>CONTACT</a></Link>
                    <Link href='/'><a className={`${router.pathname == "/faq" ? " text-menu-bg" : "" } uppercase text-base text-white font-Futura-Book py-3`}>FAQ</a></Link>
                </ul>
              </nav>
          </div>
          
        </header>
      </>
  );
}

export default Navbar;
