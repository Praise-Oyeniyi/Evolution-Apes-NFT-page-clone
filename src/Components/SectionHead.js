import React from 'react'
import { motion } from 'framer-motion'

const SectionHead = ({title, paragraph, number, heading}) => {
  return (
    <div className="flex flex-col w-3/6 justify-center space-y-5">
        <div className="artworks-gallery w-full flex justify-start items-center">
            <div className="hero-bg-text-top flex items-center text-base font-light space-x-3 text-gray-200">
                <motion.div initial={{x:-100+'px' }} whileInView={{ x:0}}  transition={{delay: .3, type:'spring', stiffness:80}}>
                    <h3>{number}</h3>
                </motion.div>
                
                <motion.div initial={{x:-100+'px' }} whileInView={{ x:0}}  transition={{delay: .2, type:'spring', stiffness:60}}>
                    <p className='h-px w-16 bg-gray-300'></p>
                </motion.div>
                <motion.div initial={{x:100+'px' }} whileInView={{ x:0}}  transition={{delay: .3, type:'spring', stiffness:80}}>
                    <h2>FAQ</h2>
                </motion.div>
            </div>
        </div>
        <motion.div initial={{y:150+'px',opacity:0 }} whileInView={{ y:0, opacity:1}}  transition={{delay: .5, type:'spring', stiffness:60}}>
            <h1 className='text-5xl font-bold'>
                EVOLUTION APES CREW
            </h1>
        </motion.div>
    </div>
  )
}

export default SectionHead