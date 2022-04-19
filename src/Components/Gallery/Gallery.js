import React from 'react'
import { GalleryData } from './GalleryData'
import { motion } from 'framer-motion'


const Gallery = () => {
  return (
    <div className="artworks-gallery-wrapper h-auto w-full bg-white py-18 py-28 sm:py-14">
        <div className="h-full w-full flex space-y-10 flex-col" id='collection'>
            <div className="flex flex-col w-3/6 justify-center space-y-5 ml-[8%] sm:w-full sm:space-y-2 sm:m-auto sm:px-[5%]">
                <div className="artworks-gallery w-full flex justify-start items-center">
                    <div className="hero-bg-text-top flex items-center text-base font-light space-x-3 text-gray-800" >
                        <motion.div initial={{x:-40 }} whileInView={{x:0}}  transition={{delay: .3, type:'spring', stiffness:80}} viewport={{ once: true }}>
                            <h3>02</h3>
                        </motion.div>
                        <motion.div initial={{y:70+'px',opacity:0 }} whileInView={{ y:0, opacity:1}}  transition={{delay: .1, type:'spring', stiffness:60}} viewport={{ once: true }}>
                            <p className='h-px w-16 bg-gray-900'></p>
                        </motion.div>
                        <motion.div initial={{x:100+'px' }} whileInView={{ x:0}}  transition={{delay: .3, type:'spring', stiffness:80}} viewport={{ once: true }}>
                            <h2>COLLECTION</h2>
                        </motion.div>
                    </div>
                </div>
                <motion.div initial={{y:150+'px',opacity:0 }} whileInView={{ y:0, opacity:1}}  transition={{delay: .2, type:'spring', stiffness:60}} viewport={{ once: true }}>
                    <h1 className='text-5xl font-bold sm:text-2xl sm:font-semibold'>
                        NOTICEABLE COLLECTIONS
                    </h1>
                </motion.div>
                <motion.div initial={{y:150+'px', opacity:0}} whileInView={{ y:0, opacity:1}}  transition={{delay: .5, type:'spring', stiffness:60}} viewport={{ once: true }}>
                    <h4 className='w-4/6 text-base sm:w-full sm:text-sm'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, excepturi repellat, modi distinctio blanditiis nam mollitia animi illum at omnis.
                    </h4>
                </motion.div>
            </div>
            <motion.div 
                className="gallery-wrapper w-full" 
                initial={{x:200, opacity:0}} whileInView={{ x:0, opacity:1}}  
                transition={{delay: .9, type:'spring', stiffness:100}} viewport={{ once: true }}>

                <div className="gallery-wrapper-inner select-none snap-x snap-mandatory h-full w-full overflow-x-auto space-x-6 flex  border-transparent overflow-y-hidden">

                    {GalleryData.map((e, index)=>(
                        <div className='flip-card w-80 h-96 snap-center flex-shrink-0 transform sm:h-80' key={index}>
                            <div className='flip-card-inner relative w-full h-full'>
                                <img src={e.image} alt='nft-images' className="front w-full h-full border-[15px] absolute"/>

                                <div className='back flex justify-center w-full h-full flex-col  bg-[#5d6fbed8] absolute items-center border-[15px] border-[#5d6ebe]'>
                                    <div className='text-xs text-red-200 w-5/6 h-5/6 flex flex-col items-start justify-center space-y-5'>
                                        <div className="nft-name w-full flex flex-col items-start justify-around">
                                            <h3 className='text-white text-base font-semibold'>Haze Ape</h3>
                                            <p>Limited edition</p>
                                        </div>
                                        <div className="creator-info flex space-x-3 justify-around">
                                            <img src={e.image} alt="creator-img" className='h-[4em] rounded-[50%]'/>
                                            <div className="creator-details w-full flex flex-col items-start justify-center">
                                                <h3>Developer</h3>
                                                <p className='text-white text-sm font-semibold'>Praise Oyeniyi</p>
                                            </div>
                                        </div>
                                        <div className="market-info flex justify-between w-full items-center">
                                            <div className="bid">
                                                <h5>Current Bid</h5>
                                                <h3 className='text-white text-base font-medium'>5.00 Eth</h3>
                                            </div>
                                            <div className="time-left">
                                                <h5>Ending In</h5>
                                                <h3 className='text-white text-base font-medium'>20m 17s</h3>
                                            </div>
                                        </div>
                                        <div className="buttons w-full flex justify-between items-center cursor-pointer">
                                            <button className='hover:bg-red-200 w-[40%] h-auto bg-[#5d6ebe] text-white rounded p-2 font-medium ease-in delay-150'>Place Bid</button>
                                            <button className='font-medium w-[40%] h-auto bg-transparent hover:bg-[#5d6fbe3f] hover:border-[#9fb1ff] border-white text-white border  rounded p-2 ease-in delay-150'>View Details</button>
                                        </div>
                                    </div>

                                    <div className='flex w-3/6 m-auto h-1/6 items-start justify-around text-white'>
                                        <div className="bg-blue-900 hover:bg-blue-700 w-10 h-10 flex justify-center items-center">1</div>
                                        <div className="bg-blue-900 hover:bg-blue-700 w-10 h-10 flex justify-center items-center">2</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </motion.div>
        </div>
    </div>

  )
}

export default Gallery