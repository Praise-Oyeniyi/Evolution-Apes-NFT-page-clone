import React from 'react'
import {motion} from 'framer-motion'

const About = () => {
  return (
    <div className=" pr-[5%] wrapper-about h-auto w-full bg-gray-900 bg-[url('Images/01.jpeg')] bg-no-repeat bg-center bg-fixed overflow-hidden" >
            <div className="about-wrapper w-full" id='about'> 
                     <div className=" pt-28 flex flex-col w-6/6 justify-center space-y-5 ml-[5%] text-white bg-gray-900 pb-5 sm:space-y-2 sm:bg-transparent sm:pt-8">
                        <div className="artworks-gallery w-full flex justify-start items-center">
                            <div className="hero-bg-text-top flex items-center text-base font-light space-x-3 text-gray-300">
                                <motion.h3
                                    initial={{x:-30}} 
                                    whileInView={{x:0}}  
                                    transition={{delay: .3, type:'spring', stiffness:80}} 
                                    viewport={{ once: true }}
                                    >
                                        04
                                </motion.h3>
                                <motion.p 
                                initial={{y:70+'px',opacity:0 }} whileInView={{ y:0, opacity:1}}  transition={{delay: .1, type:'spring', stiffness:60}} viewport={{ once: true }} 
                                className='h-px w-16 bg-gray-100'></motion.p>
                                <motion.h2
                                    initial={{x:100+'px' }} whileInView={{ x:0}}  transition={{delay: .3, type:'spring', stiffness:80}} viewport={{ once: true }}
                                >ABOUT
                                </motion.h2>
                            </div>
                        </div>
                        <motion.h1 
                            className='text-5xl font-bold sm:text-2xl sm:font-semibold'
                            initial={{y:150+'px',opacity:0 }} whileInView={{ y:0, opacity:1}}  
                            transition={{delay: .3, type:'spring', stiffness:60}} viewport={{ once: true }}>
                            
                                THE STORY
                        </motion.h1>
                        <motion.div initial={{y:150+'px', opacity:0}} whileInView={{ y:0, opacity:1}}  transition={{delay: .8, type:'spring', stiffness:60}} viewport={{ once: true }}>
                            <p className='w-2/6 text-base sm:w-full sm:text-sm'>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur illum saepe, vero cupiditate nemo...                 
                            </p>
                        </motion.div>
                    </div>

                    <div className="lg:hidden h-80 w-80 m-auto pr-[-5%] bg-[url('Images/01.jpeg')] bg-no-repeat bg-center bg-fixed bg-contain my-4"></div>

                    <motion.div initial={{y:150+'px',opacity:0 }} whileInView={{ y:0, opacity:1}}  transition={{delay: .7, type:'spring', stiffness:40}} viewport={{ once: true }}>
                        <div className="about-right w-[52%] py-10 bg-gray-900 ml-[50%] text-white pr-[5%] sm:w-full sm:m-auto sm:py-5">
                            <p className='w-full pl-5 text-sm'>                    
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque vel sint reprehenderit, ab atque exercitationem nemo magnam deleniti unde eaque laudantium perspiciatis pariatur.
                                <br/>
                                <br/>
                                Some of the Modders were kind, gentle humans who wanted nothing more than their ape subjects to achieve new heights of intelligence. Yet others were tortured souls, modders who saw the arrival of the apes as an opportunity to take out their anger and deploy all manner of deranged designs upon the apes… 
                                <br/>
                                <br/>
                                The darkness of night was often lit up by the flashes that came from the Evo Factory – and if you listened closely, you could hear the shrieks and cries of primates in a state of metamorphosis. And so, one by one, they emerged. 
                                <br/>
                                <br/>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab veritatis amet rem, totam sapiente vel! Debitis perspiciatis praesentium et, laborum obcaecati ut assumenda expedita, quia exercitationem, tempora dolorum hic impedit. Lorem, ipsum dolor sit amet consectetur…
                            </p>
                        </div>

                        <div className="lg:hidden h-80 w-80 m-auto pr-[-5%] bg-[url('Images/02.jpg')] bg-no-repeat bg-center bg-fixed bg-contain"></div>
                        
                        <div className="about-left-down w-[52%] bg-gray-900 py-10 text-white pb-8 pl-[5%] -mt-5 sm:w-full sm:m-auto sm:py-5 sm:pb-o">
                                <p className='text-sm w-full pr-8'>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, nam quidem cumque mollitia sequi ab at amet officiis vitae, iusto magni odit molestias ullam distinctio facilis libero corrupti incidunt adipisci. Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae quis dicta tenetur num.
    ‍                                <br/>
                                <br/>
                                    Whether hell-bent or benevolent, the Evolution Apes spread across the metaverse, and on their way encountered many more apes just like themselves – albeit with less wires and fewer welds.
                                <br/>
                                <br/>
                                    What would the Evolution Apes learn, where would they go? That much is up to you… 
                                <br/>
                                <br/>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi ipsa repellat doloremque nobis eligendi inventore nesciunt ipsum ex aliquid? Quas corrupti harum reprehenderit cumque debitis eos aliquid a quae rem.
    ‍                             <br/>
                                <br/>
                                    Perfect for NFT noob and nut alike, Evolution Apes is driven by nothing more than to create one of the world’s most engaged, interacted NFT communities. 
                                </p>
                        </div>
                    </motion.div>
            </div>
        </div>
  )
}

export default About