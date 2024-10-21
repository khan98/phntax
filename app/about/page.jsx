"use client";
import { motion } from "framer-motion"
import Image from "next/image";
import {useContext} from "react";
import { CursorContext } from "@/components/ui/CursorContext";
import StatsItem from "@/components/ui/StatsItem";

const About = () => {
  const {mouseEnterHandler, mouseLeaveHandler} = useContext(CursorContext);
  return (
    <motion.section 
      initial={{opacity: 0}} 
      animate={{opacity: 1, transition: {delay: 2}}} 
      className="min-h-screen flex items-center overflow-x-hidden"
      >
        <div className="container mx-auto flex items-center pt-48 pb-12 xl:pt-32 xl:pb-0">
            <div className="w-full h-full flex flex-col xl:flex-row items-center justify-between">
              <motion.div
                onMouseEnter={mouseEnterHandler}
                onMouseLeave={mouseLeaveHandler} 
                initial={{opacity: 0, x:-60}} 
                animate={{
                  opacity: 1, 
                  x: 0, 
                  transition: {delay: 2, duration: 0.0, ease: "easeInOut"},
              }} 
              className="relative w-[384px] h-[423px] xl:w-[444px] xl:h-[434px] mb-8 xl:mx-0">
              <Image src="/assets/about/accounting.jpg" fill quality={100} priority alt="" className="object-contain"/>
              </motion.div>
            <motion.div 
                  onMouseEnter={mouseEnterHandler}
                  onMouseLeave={mouseLeaveHandler} 
                  initial={{opacity: 0, x: 60}} 
                  animate={{
                  opacity: 1, 
                  x: 0, 
                  transition: {delay: 2.4, duration: 0.0, ease: "easeInOut"},
              }}  
              className="flex flex-col items-start xl:max-w-[650px] text-center xl:text-left mx-auto xl:mx-0">
              <h2 className="h2 mb-6 mx-auto max-w-[540px] xl:max-w-none">Comitted to making your life easier</h2>
            <p className="lead max-w-[600px] mx-auto xl:mx-0">At PHN, we know how complicated and time consuming managing finances can be, whether professional or personal. Luckily, we’re here to take the taxing stuff off your back.</p>
            <div className="grid grid-cols-3 gap-[30px] mb-14 mx-auto xl:mx-0">
              <div>
                <StatsItem countNum={11} text="Years on Market"/>
              </div>
              <div>
                <StatsItem countNum={2500} countText="+" text="Happy Clients"/>
                </div>
              <div>
                <StatsItem countNum={86} countText="%" text="Retention Rate"/>
              </div>
            </div>
            <a href="/services">
              <motion.div onMouseEnter={mouseEnterHandler} onMouseLeave={mouseLeaveHandler}>
                <button className="btn btn-lg">Find out more</button>
              </motion.div>
            </a>
          </motion.div>
        </div>
      </div>
    </motion.section>
  ) 
}

export default About