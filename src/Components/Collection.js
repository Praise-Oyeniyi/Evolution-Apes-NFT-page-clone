import React from 'react'
import DomImg1 from '../Images/001.jpg'
import DomImg2 from '../Images/002.jpg'
import DomImg3 from '../Images/003.jpg'
import {
    useViewportScroll,
    motion,
    useTransform,
  } from 'framer-motion';

function Collection(){
    const { scrollY } = useViewportScroll();
    const y1 = useTransform(scrollY, [0, 300], [0, 0]);
    const y2 = useTransform(scrollY, [0, 300], [0, 0]);


  return (
    <div className="wrapper h-auto w-full bg-white pt-0 pb-28 sm:pb-16">
        <div className="domination flex w-full h-full justify-between sm:items-center sm:flex-col sm:space-y-4">
            <div className="flex flex-col w-3/6 justify-center space-y-5 ml-[5%] sm:w-full sm:space-y-2 px-[5%]">
                <div className="artworks-gallery w-full flex justify-start items-center">
                    <div className="hero-bg-text-top flex items-center text-base font-light space-x-3 text-gray-800">
                        <motion.div initial={{x:-40}} whileInView={{x:0}}  transition={{delay: .3, type:'spring', stiffness:80}} viewport={{ once: true }}>
                            <h3>03</h3>
                        </motion.div>
                        <motion.div initial={{y:70+'px',opacity:0 }} whileInView={{ y:0, opacity:1}}  transition={{delay: .1, type:'spring', stiffness:60}} viewport={{ once: true }}>
                            <p className='h-px w-16 bg-gray-900'></p>
                        </motion.div>
                        <motion.div initial={{x:100+'px' }} whileInView={{ x:0}}  transition={{delay: .3, type:'spring', stiffness:80}} viewport={{ once: true }}>
                            <h2>WELCOME</h2>
                        </motion.div>
                    </div>
                </div>
                <motion.div initial={{y:150+'px',opacity:0 }} whileInView={{ y:0, opacity:1}}  transition={{delay: .3, type:'spring', stiffness:60}} viewport={{ once: true }}>
                    <h1 className='text-5xl font-bold sm:text-2xl sm:font-semibold'>
                        DOMINATION IS INEVITABLE
                    </h1>
                </motion.div>
                
                <motion.p 
                    className='w-full text-base sm:hidden'
                    initial={{y:150+'px',opacity:0 }} whileInView={{ y:0, opacity:1}}  
                    transition={{delay: .5, type:'spring', stiffness:60}} viewport={{ once: true }}>

                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam accusamus placeat consectetur vel recusandae labore! Laudantium quia adipisci minus vitae tempore ea.
                    <br/>
                    <br/>
                    Our project is designed to deliver new heights of NFT sector awareness to users of all walks – and unlike the pastime for which our NFTs’ ancestors are renowned, we ain’t hanging around…
                    <br/>
                    <br/>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad aspernatur natus tempora error quam reprehenderit pariatur impedit suscipit ipsa, animi aperiam maxime possimus.
                    <br/>
                    <br/>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente perspiciatis molestias vitae iusto maiores. Asperiores dolorum quo cupiditate officia! Facere rerum iusto officia, doloribus quaerat expedita ab impedit veritatis perferendis?
                    <br/>
                    <br/>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laboriosam facilis laudantium, eius aut quam consequatur totam libero delectus...
                </motion.p>
            </div>

    
            <div className="zig-img-wrapper w-[45%] mr-[8%] h-100 sm:h-auto sm:w-full sm:order-1 sm:m-auto sm:block sm:space-y-8 sm:px-[5%]" >
                <div className="zig-zag h-full w-full flex space-x-3 justify-around items-center">
                    <motion.div style={{ y: y1}} className=" h-[32em] w-2/6 sm:h-60 sm:self-center">
                        <img src={DomImg1} alt="" className='h-full w-full'/>
                    </motion.div>
                    <motion.div style={{ y: y2}}  className="h-[32em] w-2/6 sm:h-60 sm:self-end sm:mt-7" >
                        {/* self-end */}
                        <img src={DomImg2} alt="" className='h-full w-full'/>
                    </motion.div>
                    <motion.div style={{y:y1}} className="h-[32em] w-2/6 sm:h-60 sm:self-center">
                    {/* self-start */}
                        <img src={DomImg3} alt="" className='h-full w-full'/>
                    </motion.div>
                </div>
                <motion.p 
                    className='w-full text-sm lg:hidden'
                    initial={{y:150+'px',opacity:0 }} whileInView={{ y:0, opacity:1}}  
                    transition={{delay: .5, type:'spring', stiffness:60}} viewport={{ once: true }}>

                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam accusamus placeat consectetur vel recusandae labore! Laudantium quia adipisci minus vitae tempore ea.
                    <br/>
                    <br/>
                    Our project is designed to deliver new heights of NFT sector awareness to users of all walks – and unlike the pastime for which our NFTs’ ancestors are renowned, we ain’t hanging around…
                    <br/>
                    <br/>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad aspernatur natus tempora error quam reprehenderit pariatur impedit suscipit ipsa, animi aperiam maxime possimus.
                    <br/>
                    <br/>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente perspiciatis molestias vitae iusto maiores. Asperiores dolorum quo cupiditate officia! Facere rerum iusto officia, doloribus quaerat expedita ab impedit veritatis perferendis?
                    <br/>
                    <br/>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laboriosam facilis laudantium, eius aut quam consequatur totam libero delectus...
                </motion.p>
            </div>
        </div>
    </div>

  )
}

export default Collection