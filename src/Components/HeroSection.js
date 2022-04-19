import React from 'react'
import { motion } from 'framer-motion'
import Image1 from '../Images/01.jpeg'
import Image2 from '../Images/02.jpg'
import Image3 from '../Images/03.jpeg'
import Image4 from '../Images/04.jpg'
import Image5 from '../Images/05.jpg'
import Image6 from '../Images/06.jpeg'

const container ={
    initial:{
        x:"-10vw",
        opacity:0,
    },
    animate:{
        x:0,
        opacity:1,
        transition:{delay:.5, type:'spring', duration:.5,when:'afterChildren',},
    }
}

const cardContainer ={
    initial:{
        y:-100,
        opacity:0,
    },
    animate:{
        y:0,
        opacity:1,
        transition:{delay:.2, type:'spring', duration:.7, stiffness:400,}
    }
}


const HeroSection = () => {
  return (
    <div 
        className='flex justify-between relative before:absolute before:w-full before:h-full before:bg-gray-900 before:opacity-90 before:-z-10 before:top-0 hero-bg-wrapper bg-gray-800 bg-[url("Images/hero-bg.jpg")] h-[90vh] sm:h-[27em] text-white w-full z-30'>
       
        <motion.div 
            variants={container} initial={'initial'} animate={'animate'}
            className="hero-bg-text flex flex-col w-3/6 justify-center space-y-5 ml-[8%] h-full sm:w-full">

            <div className="hero-bg-text-top flex items-center text-base font-light space-x-3 text-gray-300">
                <motion.h3
                    initial={{x:-80 }} 
                    whileInView={{x:0}}  
                    transition={{delay: .1, type:'ease'}} 
                    viewport={{ once: true }}
                >01
                </motion.h3>
                <motion.p 
                    initial={{y:70+'px',opacity:0 }} whileInView={{ y:0, opacity:1}}  transition={{delay: .2, type:'spring', stiffness:60}} viewport={{ once: true }}
                    className='h-px w-16 bg-gray-100'></motion.p>
                <motion.h2
                    initial={{x:'300' }} whileInView={{ x:0}}  transition={{delay: .3, type:'spring', stiffness:30}} viewport={{ once: true }}
                >EVOLUTION APES
                </motion.h2>
            </div>
            <h1 className='text-6xl font-bold tracking-wider w-5/6 sm:text-4xl'>
                FINDING YOUR APESSS...
            </h1>
            <h4 className='w-5/6 sm:text-sm'>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero beatae earum exercitationem repellat, similique sed autem optio accusamus amet...
            </h4>
            <motion.button 
                className='py-2 px-4 bg-gray-100 text-gray-800 w-2/6 hover:bg-red-500 hover:text-gray-100 ease-in sm:w-3/6'>
                VIEW ON OPENSEA
            </motion.button>
        </motion.div>
        
        <div 
            className="hero-card-wrapper w-auto rotate-6 self-center mr-24 text-gray-300 bg-[#cccaca25] p-5 rounded-lg relative sm:hidden"
            >
            <motion.div 
                variants={cardContainer} initial={'initial'} animate={'animate'}
                className="card w-full space-y-4 text-xs">
                <div className="card-top flex justify-between items-center">
                    <div className="images h-8 flex cursor-pointer">
                        <img src={Image2} alt="" className='rounded-[50%] relative'/>
                        <img src={Image3} alt="" className='rounded-[50%] relative -left-3'/>
                        <img src={Image4} alt="" className='rounded-[50%] relative -left-6'/>
                        <img src={Image6} alt="" className='rounded-[50%] relative -left-9'/>
                        <img src={Image5} alt="" className='rounded-[50%] relative -left-12'/>
                    </div>
                    <div className="options flex space-x-1 cursor-pointer">
                        <div className="w-1 h-1 bg-white rounded"></div>
                        <div className="w-1 h-1 bg-white rounded"></div>
                        <div className="w-1 h-1 bg-white rounded"></div>
                    </div>
                </div>
                <img src={Image1} alt="hero-card-img" className='rounded-lg relative h-[23em] opacity-6'/>
                <div>
                    <div className="market-info flex justify-between w-full items-center cursor-pointer">
                        <div className="bid">
                            <h5>Current Bid</h5>
                            <h3 className='text-white text-base font-medium'>5.00 Eth</h3>
                        </div>
                        <div className="time-left">
                            <h5>Ending In</h5>
                            <h3 className='text-white text-base font-medium'>20m 17s</h3>
                        </div>
                    </div>
                </div>
            </motion.div>
        </div>
    </div>
  )
}

export default HeroSection