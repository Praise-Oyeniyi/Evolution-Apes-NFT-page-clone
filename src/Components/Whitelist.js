import React from 'react'
import { motion } from 'framer-motion'

const Whitelist = () => {
  return (
    <div className="bg-gray-900 h-[1000px] w-full py-28 med:pt-0 px-[5%] sm:py-5 sm:p-[5%] tab:py-5" >
        <div className="about-wrapper w-full" id='whitelist'> 
                <div className=" pt-28 flex flex-col w-full justify-center space-y-5 text-white bg-gray-900 pb-5 med:space-y-3">
                    <div className="artworks-gallery w-full flex justify-start items-center">
                        <div className="hero-bg-text-top flex items-center text-base font-light space-x-3 text-gray-300">
                            <motion.h3
                                initial={{x:-30}} 
                                whileInView={{x:0}}  
                                transition={{delay: .3, type:'spring', stiffness:80}} 
                                viewport={{ once: true }}
                                >
                                    05
                            </motion.h3>
                            <motion.p 
                            initial={{y:70+'px',opacity:0 }} whileInView={{ y:0, opacity:1}}  transition={{delay: .1, type:'spring', stiffness:60}} viewport={{ once: true }} 
                            className='h-px w-16 bg-gray-100'></motion.p>
                            <motion.h2
                                initial={{x:100+'px' }} whileInView={{ x:0}}  transition={{delay: .3, type:'spring', stiffness:80}} viewport={{ once: true }}
                            >WHITELIST
                            </motion.h2>    
                        </div>
                    </div>
                    <motion.div initial={{y:150+'px',opacity:0 }} whileInView={{ y:0, opacity:1}}  transition={{delay: .3, type:'spring', stiffness:60}} viewport={{ once: true }}>
                        <h1 className='text-5xl font-bold sm:text-2xl sm:font-semibold tab:text-4xl'>
                            THE STORY
                        </h1>
                    </motion.div>
                    <motion.div initial={{y:150+'px', opacity:0}} whileInView={{ y:0, opacity:1}}  transition={{delay: .8, type:'spring', stiffness:60}} viewport={{ once: true }}>
                        <p className='w-2/6 text-base sm:w-full tab:w-5/6 med:w-4/6'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur illum saepe, vero cupiditate nemo...                 
                        </p>
                    </motion.div>
                </div>
        </div>
    </div>
  )
}

export default Whitelist