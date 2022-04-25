import React from 'react'
import { animate, motion } from 'framer-motion'
import Scrollspy from 'react-scrollspy'

export const Navbar = ({nav, navToggle}) => {
    const variants ={
        initial:{
            x:"100vw",
            opacity:0,
        },
        animate:{
            x:0,
            opacity:1,
            transition:{type:'spleen', delay:0.3,when:'beforeChildren',staggerChildren:0.4,},
        }
    }

    const conVariants ={
        initial:{
            x:"100vw",
            opacity:0,
        },
        animate:{
            x:0,
            opacity:1,
            transition:{type:'spleen',delay:0.3,when:'beforeChildren', staggerChildren:0.4},
        }
    }

  return (
    <motion.div onClick={()=>navToggle()}
        variants={variants} initial={'initial'} whileInView={'animate'} 
        className={nav? 'nav-bg w-screen h-screen bg-gray-600 bg-opacity-50 fixed top-0 z-[50] right-0 ease-in md:hidden' : 'md:hidden nav-bg ease-out w-screen h-screen bg-gray-600 bg-opacity-50 fixed top-0 z-[50] right-[-100vw]'}>
        <motion.div 
            variants={conVariants}
            className={" h-full w-4/6 tab:w-[40%] bg-gray-200 ml-auto -mt-6 py-10 px-8 bottom-0"}>
            <Scrollspy
                items={ ['collection','about', 'whitelist','team','faq'] }
                currentClassName="active" className=' text-gray-900 font-bold tracking-wider uppercase h-4/6  text-base text-right w-full space-y-6 mt-14'>
                    <motion.li initial={{opacity:0, x:100,}} whileInView={{opacity:1,x:0}} transition={{delay:0.3,duration:1, type:'spring' }}
                         className='hover:text-[#a7b3e9d8] delay-100 ease border-b border-dotted border-gray-600 py-1 px-1'><a href="#collection">Collection</a></motion.li>
                    <motion.li initial={{opacity:0, x:100,}} whileInView={{opacity:1,x:0}} transition={{delay:0.4,duration:1, type:'spring' }}
                        className='hover:text-[#a7b3e9d8] delay-100 ease border-b  border-dotted border-gray-600 py-1 px-1'><a href="#about">About</a></motion.li>
                    <motion.li initial={{opacity:0, x:100,}} whileInView={{opacity:1,x:0}} transition={{delay:0.5,duration:1, type:'spring' }}
                        className='hover:text-[#a7b3e9d8] delay-100 ease border-b  border-dotted border-gray-600 py-1 px-1'><a href="#whitelist">Whitelist</a></motion.li>
                    <motion.li initial={{opacity:0, x:100,}} whileInView={{opacity:1,x:0}} transition={{delay:0.6,duration:1, type:'spring' }} 
                        className='hover:text-[#a7b3e9d8] delay-100 ease border-b  border-dotted border-gray-600 py-1 px-1'><a href="#team">Team</a></motion.li>
                    <motion.li initial={{opacity:0, x:100,}} whileInView={{opacity:1,x:0}} transition={{delay:0.7,duration:1, type:'spring' }} 
                         className='hover:text-[#a7b3e9d8] delay-100 ease border-b  border-dotted border-gray-600 py-1 px-1'><a href="#faq">FAQ</a></motion.li>
            </Scrollspy>
        </motion.div>
    </motion.div>
  )
}
