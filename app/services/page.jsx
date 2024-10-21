"use client";
import {useContext} from "react";
import Image from "next/image";
import { CursorContext } from "@/components/ui/CursorContext";
import { motion } from 'framer-motion';

const Services = () => {
  const {mouseEnterHandler, mouseLeaveHandler} = useContext(CursorContext);
  return (
    <motion.section
      initial={{opacity: 0}} 
      animate={{opacity: 1, transition: {delay: 2}}} 
      className="min-h-screen flex items-center overflow-x-hidden"
      >
      <div className="container mx-auto flex items-center pt-48 pb-12 xl:pt-32 xl:pb-0">
        <div className="w-full h-full flex items-center justify-between">
          <motion.div 
          initial={{opacity: 0, x: -60}}
          animate={{
            opacity: 1,
            x: 0,
            transition: {delay: 2, duration: 0.0, ease: 'easeInOut'}
          }}
          onMouseEnter={mouseEnterHandler}
          onMouseLeave={mouseLeaveHandler}
          className="flex flex-col items-start xl:max-w-[650px] text-center xl:text-left mx-auto">
            <h2 className="h2 mb-6 mx-auto max-w-[540px] xl:max-w-none">What we offer...</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-[20px] mb-14 mx-auto xl:mx-0">
              <div className="flex-1 flex flex-col justify-center items-center xl:items-start">
                <div className="flex items-center gap-[12px] mb-2">
                  <div className="w-[14px] h-[14px] bg-accent rounded-tl-[28px] rounded-bl-[28px] rounded-br-[22px] rounded-tr-[4px]"></div>
                    <h3 className="text-2xl">Income Tax Filing</h3>
                  </div>
                  <p className="pl-6 text-[15px]">
                 Since 2013, we’ve filed taxes for over 900 clients throughout Ontario. Our accountants will ensure you can focus on your other needs during the busy tax season, while we do the heavy lifting.
                  </p>
              </div>
              {/*end item*/}
              <div className="flex-1 flex flex-col justify-center items-center xl:items-start">
                <div className="flex items-center gap-[12px] mb-2">
                  <div className="w-[14px] h-[14px] bg-accent rounded-tl-[28px] rounded-bl-[28px] rounded-br-[22px] rounded-tr-[4px]"></div>
                    <h3 className="text-2xl">Bookkeeping
                    </h3>
                  </div>
                  <p className="pl-6 text-[15px]">
                  Our bookkeeping services organize and rectify your financial records, ensuring accuracy and clarity in your business’s fiscal history to keep you, your clients, and employees satisfied. Call today for a rundown
                  </p>
              </div>
              {/*end item*/}
              <div className="flex-1 flex flex-col justify-center items-center xl:items-start">
                <div className="flex items-center gap-[12px] mb-2">
                  <div className="w-[14px] h-[14px] bg-accent rounded-tl-[28px] rounded-bl-[28px] rounded-br-[22px] rounded-tr-[4px]"></div>
                    <h3 className="text-2xl">Payroll</h3>
                  </div>
                  <p className="pl-6 text-[15px]">
                  We’ve provided payroll services to over 30 small and medium businesses in the Guelph area in the past 5 years. We’ll make sure your employees get paid fairly and your business keeps an organized cash flow record
                  </p>
              </div>
              {/*end item*/}
              <div className="flex-1 flex flex-col justify-center items-center xl:items-start">
                <div className="flex items-center gap-[12px] mb-2">
                  <div className="w-[14px] h-[14px] bg-accent rounded-tl-[28px] rounded-bl-[28px] rounded-br-[22px] rounded-tr-[4px]"></div>
                    <h3 className="text-2xl">Financial Analysis                    </h3>
                  </div>
                  <p className="pl-6 text-[15px]">
                  Thinking of making a large transaction? Planning on investing in your child’s education? Our expertise in financial and risk analysis will help to provide you with detailed rundowns to your solutions </p>
              </div>
              {/*end item*/}
            </div>
            <a href="/contact">
              <motion.div onMouseEnter={mouseEnterHandler} onMouseLeave={mouseLeaveHandler}>
                <button className="btn btn-lg">Get in touch</button>
              </motion.div>
            </a>
          </motion.div>
          <div className="hidden xl:flex w-[314px] h-[424px] relative">
            <Image src="/assets/services/handshake.jpeg" fill quality={100} alt="" className="object-contain"/>
          </div>
        </div>
        
      </div>
    </motion.section>
  )
  
}

export default Services;