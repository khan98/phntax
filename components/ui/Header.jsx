"use client";
import React, { useContext, useState } from 'react';
import { CursorContext } from './CursorContext';

import {motion} from "framer-motion"; 
import Image from 'next/image';
import Link from 'next/link';

import {AiOutlineMenu} from 'react-icons/ai'
import MobileNav from './MobileNav';
import Nav from './Nav';
import Socials from './Socials';
import { FaPhoneAlt } from 'react-icons/fa';
import { IoMdMail } from 'react-icons/io';


const Header = () => {
  const {mouseEnterHandler, mouseLeaveHandler} = useContext(CursorContext);
  const [mobileNav, setMobileNav] = useState(false);
  return ( 
    <header className="pb-6 xl:pb-[50px] fixed z-40 w-full bg-accent-100 xl:bg-transparent">
     <div className="bg-secondary-100 mb-6 xl:mb-[0px] xl:h-[22px] py-4 xl:py-0">
      <div className="container mx-auto h-full">
        <div className='flex items-center justify-between h-full'>
          <motion.div 
            onMouseEnter={mouseEnterHandler} 
            onMouseLeave={mouseLeaveHandler} 
            className='flex flex-col lg:flex-row items-center h-full gap-2 xl:gap-6 
            w-full justify-between xl:w-auto xl:justify-normal'>
          </motion.div>
          <motion.div 
            onMouseEnter={mouseEnterHandler} 
            onMouseLeave={mouseLeaveHandler}  
            className='hidden xl:block'>
            <Socials containerStyles="flex gap-6 text-white"/>
          </motion.div>
          </div>
      </div>
      </div>
      <div className='container mx-auto flex items-center justify-between px-3'>
        {/*logo*/}
        <motion.div onMouseEnter={mouseEnterHandler} onMouseLeave={mouseLeaveHandler}>
          <Link href="/">
            <Image 
              src="/assets/logo.png" 
              width={160} 
              height={44} 
              priority
              alt=""
            />
          </Link>
        </motion.div>
        {/*mobile*/}
        <div className='xl:hidden cursor-pointer' onClick={() => setMobileNav(!mobileNav)}>
          <AiOutlineMenu className="text-3xl text-primary"/>
        </div>
        <motion.div 
          initial={{right: "-100%"}}
          animate={{right: mobileNav ? 0: "-100%"}}
          className="fixed bg-primary top-0 bottom-0 right-0 w-[300px] xl:hidden z-50">
          <MobileNav setMobileNav={setMobileNav}/>
        </motion.div>
        <motion.div onMouseEnter={mouseEnterHandler} 
            onMouseLeave={mouseLeaveHandler} className="hidden xl:block">
          <Nav />
        </motion.div>
      </div>
    </header>
  )
}

export default Header;