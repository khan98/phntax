"use client"
import { motion } from "framer-motion";
import { useContext } from "react";
import { CursorContext } from "@/components/ui/CursorContext";
import Image from "next/image";

const Home = () => {
  const {mouseEnterHandler, mouseLeaveHandler} = useContext(CursorContext)
  return (
    <motion.section
      initial={{opacity: 0}} 
      animate={{opacity: 1, transition: {delay: 2}}} 
      className="min-h-screen flex items-center overflow-x-hidden"
      >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row items-center h-full">
          <motion.div 
            initial={{opacity: 0, y: -100}}
            animate={{opacity: 1, y:0, transition: {delay: 2, duration: 1, ease: "easeInOut"},
          }}
          className="w-full text-center xl:text-left xl:w-[500px] pt-[120px]">
            <h1 className="h1 mb-6">
              Accounting Just Got <br/> Less Taxing
            </h1>
            <p className="lead max-w-xl mx-auto">
              Specialized financial services to help you or your business get through the tax season
            </p>
            <a href="/contact">
              <motion.div onMouseEnter={mouseEnterHandler} onMouseLeave={mouseLeaveHandler}>
                <button className="btn btn-lg">Book an appointment</button>
              </motion.div>
            </a>
          </motion.div>
          <div className="flex-1">
            <motion.div 
            initial={{opacity: 0, bottom: '-100'}}
            animate={{opacity: 1, bottom:0, transition: {delay: 2.4, duration: 1.2, ease: "easeInOut"},
            }}
            className="hidden xl:flex fixed bottom-0">
              <Image src={"/assets/home/img.webp"} width={1214} height={950} quality={100} alt=""/>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.section>
  ); 
    /*<div className='py-24'>
      <button className='btn'>Get Started</button>
    </div>*/
    /*<div className='py-24'>
      <input type='text' className='input'/>
    </div>
    */
   /*<div className="p-24">
      <textarea className='textarea'></textarea>
    </div>
    */
};

export default Home
