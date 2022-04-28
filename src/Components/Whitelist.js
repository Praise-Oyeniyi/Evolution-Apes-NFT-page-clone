import React from 'react'
import { motion } from 'framer-motion'

const Whitelist = () => {
    const fadeIn = {
        initial:{
            y:-70, 
            opacity:.1},
        
        whileInView:{
            y:10, 
            opacity:1, 
            transition:{delay: .3, type:'spleen', duration:1,when:'beforeChildren',staggerChildren:0.5,} 
        }
    }
    const fadeInText = {
        initial:{
            opacity:.1},
        
        whileInView:{
            opacity:1, 
            transition:{delay: .4, type:'spleen', duration:1.3,when:'beforeChildren',staggerChildren:0.5,} 
        }
    }



  return (
    <div className="bg-gray-900 space-y-10 h-auto w-full py-28 med:pt-0 px-[5%] sm:py-5 sm:p-[5%] tab:py-5 " >
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
                        <p className='w-3/6 text-base sm:w-full tab:w-5/6 med:w-4/6'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur illum saepe, vero cupiditate nemo...                 
                        </p>
                    </motion.div>
                </div>




                <div className="w-full h-auto text-white mt-14 sm:mt-8">
                    <div className=" w-[90%] flex space-y-20 sm:space-y-10 tab:space-y-14 flex-col ml-auto tab:m-auto sm:m-auto border-l-2 border-gray-500 sm:border-l-0 tab:border-l-0">
                        <div className="flex items-center justify-around w-full h-auto sm:flex-col tab:flex-col tab:space-y-10 sm:space-y-5">
                            <motion.h3
                                variants={fadeIn} initial={'initial'} whileInView={'whileInView'} 
                                className="text-4xl font-bold tab:text-3xl sm:text-2xl">
                                EVOLUTION 1
                            </motion.h3>
                            <motion.p 
                                variants={fadeInText} initial={'initial'} whileInView={'whileInView'}
                                className='text-sm w-3/6 text-gray-300 sm:w-full tab:w-full'>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur repellendus quidem esse velit commodi iusto corporis, 
                                <br/>
                                <br/>
                                aliquid error eum sed exercitationem quis voluptates, ut debitis modi provident explicabo dignissimos illum!
                            </motion.p>
                        </div>
                        <div className="flex items-center justify-around w-full h-auto sm:flex-col tab:flex-col tab:space-y-10 sm:space-y-5">
                            <motion.h3
                                variants={fadeIn} initial={'initial'} whileInView={'whileInView'} 
                                className="text-4xl font-bold tab:text-3xl sm:text-2xl">
                                EVOLUTION 2
                            </motion.h3>
                            <motion.p 
                                variants={fadeInText} initial={'initial'} whileInView={'whileInView'}
                                className='text-sm w-3/6 text-gray-300 sm:w-full tab:w-full'>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur repellendus quidem esse velit commodi iusto corporis, 
                                <br/>
                                <br/>
                                aliquid error eum sed exercitationem quis voluptates, ut debitis modi provident explicabo dignissimos illum!
                            </motion.p>
                        </div>
                        <div className="flex items-center justify-around w-full h-auto sm:flex-col tab:flex-col tab:space-y-10 sm:space-y-5">
                            <motion.h3
                                variants={fadeIn} initial={'initial'} whileInView={'whileInView'} 
                                className="text-4xl font-bold tab:text-3xl sm:text-2xl">
                                EVOLUTION 3
                            </motion.h3>
                            <motion.p 
                                variants={fadeInText} initial={'initial'} whileInView={'whileInView'}
                                className='text-sm w-3/6 text-gray-300 sm:w-full tab:w-full'>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur repellendus quidem esse velit commodi iusto corporis, 
                                <br/>
                                <br/>
                                aliquid error eum sed exercitationem quis voluptates, ut debitis modi provident explicabo dignissimos illum!
                                <br/>
                                <br/>
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae illum sunt ducimus numquam esse! Quam ea earum pariatur eligendi reiciendis officiis unde quas quaerat alias nemo voluptatum accusamus, sed repudiandae!
                            </motion.p>
                        </div>
                        <div className="flex items-center justify-around w-full h-auto sm:flex-col tab:flex-col tab:space-y-10 sm:space-y-5">
                            <motion.h3
                                variants={fadeIn} initial={'initial'} whileInView={'whileInView'} 
                                className="text-4xl font-bold tab:text-3xl sm:text-2xl">
                                EVOLUTION 4
                            </motion.h3>
                            <motion.p 
                                variants={fadeInText} initial={'initial'} whileInView={'whileInView'}
                                className='text-sm w-3/6 text-gray-300 sm:w-full tab:w-full'>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur repellendus quidem esse velit commodi iusto corporis, 
                                <br/>
                                <br/>
                                aliquid error eum sed exercitationem quis voluptates, ut debitis modi provident explicabo dignissimos illum!
                            </motion.p>
                        </div>
                        <div className="flex items-center justify-around w-full h-auto sm:flex-col tab:flex-col tab:space-y-10 sm:space-y-5">
                            <motion.h3
                                variants={fadeIn} initial={'initial'} whileInView={'whileInView'} 
                                className="text-4xl font-bold tab:text-3xl sm:text-2xl">
                                EVOLUTION 5
                            </motion.h3>
                            <motion.p 
                                variants={fadeInText} initial={'initial'} whileInView={'whileInView'}
                                className='text-sm w-3/6 text-gray-300 sm:w-full tab:w-full'>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur repellendus quidem esse velit commodi iusto corporis, 
                                <br/>
                                <br/>
                                aliquid error eum sed exercitationem quis voluptates, ut debitis modi provident explicabo dignissimos illum!
                                <br/>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem quas asperiores, natus tempora quia sit dolor praesentium eos deserunt. Numquam illo eaque qui eum eius ea ad rerum neque? Sint.
                            </motion.p>
                        </div>
                        <div className="flex items-center justify-around w-full h-auto sm:flex-col tab:flex-col tab:space-y-10 sm:space-y-5">
                            <motion.h3
                                variants={fadeIn} initial={'initial'} whileInView={'whileInView'} 
                                className="text-4xl font-bold tab:text-3xl sm:text-2xl">
                                EVOLUTION 6
                            </motion.h3>
                            <motion.p 
                                variants={fadeInText} initial={'initial'} whileInView={'whileInView'}
                                className='text-sm w-3/6 text-gray-300 sm:w-full tab:w-full pb-12'>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur repellendus quidem esse velit commodi iusto corporis, 
                                <br/>
                                <br/>
                                aliquid error eum sed exercitationem quis voluptates, ut debitis modi provident explicabo dignissimos illum!
                                <br/>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem quas asperiores, natus tempora quia sit dolor praesentium eos deserunt. Numquam illo eaque qui eum eius ea ad rerum neque? Sint.
                            </motion.p>
                        </div>
                    </div>
                </div>
        </div>
    </div>
  )
}

export default Whitelist