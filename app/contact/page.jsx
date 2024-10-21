"use client";

import {motion} from "framer-motion";
import { useContext } from "react";
import Image from "next/image";
import { CursorContext } from "@/components/ui/CursorContext";
import Form from "@/components/ui/Form";

const Contact = () => {
  const {mouseEnterHandler, mouseLeaveHandler} = useContext(CursorContext);
  return (
    <motion.section
      initial={{opacity: 0}} 
      animate={{opacity: 1, transition: {delay: 2}}} 
      className="min-h-screen flex items-center overflow-x-hidden"
      >
      <div className="container mx-auto pt-48 pb-12 xl:pt-32 xl:pb-0">
        <div className="flex flex-col gap-12 xl:flex-row h-full">
          <motion.div 
          onMouseEnter={mouseEnterHandler}
          onMouseLeave={mouseLeaveHandler} 
          initial={{opacity: 0, x: -60}} 
          animate={{
          opacity: 1, 
          x: 0, 
          transition: {delay: 2, duration: 0.0, ease: "easeInOut"},
          }} 
          className="flex-1 flex flex-col justify-center">
            <h3 className="h3 mb-5 text-center xl:text-left">Contact info</h3>
            <div className="flex flex-col items-center xl:items-start gap-12">
              <div className="flex items-start gap-4">
                <div className="relative w-[36px] h-[36px]">
                  <Image src="/assets/contact/pin.svg" fill alt=""/>
                </div>
                <div className="pt-1 flex-1">
                  <h4 className="h4 mb-2">Address</h4>
                  <p className="leading-relaxed">
                  86 McArthur Drive
                  <br/>
                  Guelph, ON N1L 1S4
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="relative w-[36px] h-[36px]">
                  <Image src="/assets/contact/phone.svg" fill alt=""/>
                </div>
                <div className="pt-1 flex-1">
                  <h4 className="h4 mb-2">Phone</h4>
                  <div className="pt-1 flex-1">
                    <p>Phone: +1 519 400 3788</p>
                  </div>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="relative w-[36px] h-[36px]">
                  <Image src="/assets/contact/email.svg" fill alt=""/>
                </div>
                <div className="pt-1 flex-1">
                  <h4 className="h4 mb-2">Email</h4>
                  <div className="flex flex-col gap-1">
                    <p>Main: phntax@yahoo.com</p>
                    <p>Support: navxkhan21@yahoo.com</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
          <div className="flex-1">
            <div className="w-full max-w-[580px] gap-4 p-10 mx-auto xl:mx-0">
              <h3 className="h3 mb-8 text-center">Get in touch</h3>
              <Form/>    
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  )
}

export default Contact;