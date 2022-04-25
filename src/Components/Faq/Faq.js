import React from 'react'
import { useState } from 'react'
import { FaqData } from './FaqData'
import { motion } from 'framer-motion'

const Faq = () => {
    const [faq,faqOpen] = useState(null)

    const Toggle = (index) =>{
        if(faq === index){
            return faqOpen(null)
        }

        faqOpen(index);
    }

  return (
    <div className="faq-wrapper h-auto w-full mx-auto px-[8%] bg-gray-900 text-gray-100 cursor-pointer sm:px-[5%]" id='faq med:px-[1%]'>
            <div className="faq-inner-wrapper h-full w-full pt-20 sm:pt-12 tab:pt-12" >
                <div className="flex flex-col w-3/6 justify-center space-y-5 sm:w-full sm:space-y-2 tab:space-y-2 tab:w-5/6 med:w-5/6 med:space-y-3">
                    <div className="artworks-gallery w-full flex justify-start items-center">
                        <div className="hero-bg-text-top flex items-center text-base font-light space-x-3 text-gray-200">
                            <motion.div initial={{x:-30 }} whileInView={{ x:0}}  transition={{delay: .3, type:'spring', stiffness:80}}>
                                <h3>07</h3>
                            </motion.div>
                            
                            <motion.div initial={{y:70+'px',opacity:0 }} whileInView={{ y:0, opacity:1}}  transition={{delay: .1, type:'spring', stiffness:60}}>
                                <p className='h-px w-16 bg-gray-300'></p>
                            </motion.div>
                            <motion.div initial={{x:100+'px' }} whileInView={{ x:0}}  transition={{delay: .3, type:'spring', stiffness:80}}>
                                <h2>FAQ</h2>
                            </motion.div>
                        </div>
                    </div>
                    <motion.div initial={{y:150+'px',opacity:0 }} whileInView={{ y:0, opacity:1}}  transition={{delay: .3, type:'spring', stiffness:60}}>
                        <h1 className='text-5xl font-bold sm:text-2xl sm:font-semibold tab:text-4xl '>
                            EVOLUTION APES CREW
                        </h1>
                    </motion.div>
                </div>
                <motion.div 
                    initial={{y:150+'px', opacity:0}} 
                    whileInView={{ y:0, opacity:1}}  
                    transition={{delay: .8, type:'spring', stiffness:60}} 
                    viewport={{ once: true }}
                    className="faq-lists mx-auto mt-8 w-5/6 text-gray-100  pb-40 border-b sm:w-full sm:pb-20  tab:w-full tab:pb-16 med:mt-5 med:w-full"
                    >
                    {FaqData.map((e,index)=>(
                        <div key={index} className='sm:space-y-3'>
                            <div onClick={()=> Toggle(index)} className={"cursor-pointer flex faq-head w-full h-auto text-[1.3em] sm:text-base tab:text-base tab:font-normal sm:px-0 sm:font-medium  justify-between items-center font-semibold px-4 bg-[#c8d0f004] py-2 z-40"}>
                                <p className='w-5/6'>{e.question}</p>
                                {faq===index? <motion.i 
                                    initial={{ scale:1}} whileTap={{ scale:1.5}} animate={{rotate:180}} transition={{duration:.3}}
                                    className="fas fa-minus text-[#5d6ebe]"></motion.i>: <motion.i 
                                        initial={{ scale:1}} whileTap={{ scale:1.5}} transition={{duration:.3}}
                                        className="fas fa-plus text-[#5d6ebe]"></motion.i>}
                            </div>
                            {faq === index?<motion.p 
                                initial={{y:-20, opacity:0}} animate={{y:0, opacity:1}} transition={{type:'ease'}}
                                className={"faq-text text-sm h-auto w-5/6 ml-5 pb-2 mb-6 text-gray-300 pt-2 sm:pt-0"}>
                                {e.answer}
                            </motion.p>: ''}
                        </div>
                    ))}

                    <p className='text-lg w-full text-gray-400 font-semibold pl-1 pt-4 sm:text-sm'>If you can’t find the information you seek here, don’t hesitate to reach out to our super-friendly support team </p>
                </motion.div>
            </div>
        </div>
  )
}

export default Faq