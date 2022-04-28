import { useState, useRef, useLayoutEffect} from 'react'
import DomImg1 from '../Images/001.jpg'
import DomImg2 from '../Images/002.jpg'
import DomImg3 from '../Images/003.jpg'
import { motion, useViewportScroll, useTransform, useSpring } from 'framer-motion'


function Collection(){
    const offset = -120;
    const [elementTop, setElementTop] = useState(0)
    const [clientHeight, setClientHeight] = useState(0)
    const ref = useRef(null)
    const { scrollY } = useViewportScroll()
    

    // start animating our element when we've scrolled it into view
    const initial = elementTop - clientHeight
    // end our animation when we've scrolled the offset specified
    const final = elementTop + offset


    // const yRange = useTransform(scrollY, [initial, final], [offset, -offset])
    const y = useSpring(useTransform(scrollY, [initial, final], [offset, -offset]), { stiffness: 400, damping: 90 })
    const ym = useSpring(useTransform(scrollY, [initial, final], [-offset, offset]), { stiffness: 400, damping: 90 })

    useLayoutEffect(() => {
        const element = ref.current
        // save our layout measurements in a function in order to trigger
        // it both on mount and on resize
        const onResize = () => {
        // use getBoundingClientRect instead of offsetTop in order to
        // get the offset relative to the viewport
        setElementTop(element.getBoundingClientRect().top + window.scrollY || window.pageYOffset)
        setClientHeight(window.innerHeight)
        }
        onResize()
        window.addEventListener('resize', onResize)
        return () => window.removeEventListener('resize', onResize)
    }, [ref])



  return (
    <div className="wrapper h-auto w-full bg-white pt-0 pb-28 sm:pb-16 tab:pb-16">
        <div className="domination flex w-full h-full justify-between sm:items-center sm:flex-col sm:space-y-4 tab:space-y-4 tab:space-x-2  tab:flex-col">
            <div className="flex flex-col w-3/6 justify-center space-y-5 ml-[5%] sm:w-full sm:space-y-2 tab:space-y-2 px-[5%] tab:w-5/6 med:px-[1%]">
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
                    <h1 className='text-5xl font-bold sm:text-2xl sm:font-semibold tab:text-4xl med:tracking-tighter'>
                        DOMINATION IS INEVITABLE
                    </h1>
                </motion.div>
                
                <motion.p 
                    className='w-full text-base sm:hidden tab:hidden'
                    initial={{y:150+'px',opacity:0 }} whileInView={{ y:0, opacity:1}}  
                    transition={{delay: .5, type:'spring', stiffness:60}} viewport={{ once: true }}>

                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam accusamus placeat consectetur vel recusandae labore! Laudantium quia adipisci minus vitae tempore ea.
                    <br className='med:hidden'/>
                    <br/>
                    Our project is designed to deliver new heights of NFT sector awareness to users of all walks – and unlike the pastime for which our NFTs’ ancestors are renowned, we ain’t hanging around…
                    <br className='med:hidden'/>
                    <br/>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad aspernatur natus tempora error quam reprehenderit pariatur impedit suscipit ipsa, animi aperiam maxime possimus.
                    <br className='med:hidden'/>
                    <br/>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente perspiciatis molestias vitae iusto maiores. Asperiores dolorum quo cupiditate officia! Facere rerum iusto officia, doloribus quaerat expedita ab impedit veritatis perferendis?
                    <br className='med:hidden'/>
                    <br/>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laboriosam facilis laudantium, eius aut quam consequatur totam libero delectus...
                </motion.p>
            </div>

    
            <div className="zig-img-wrapper w-[45%] mr-[8%] h-100 sm:h-auto sm:w-full tab:h-auto tab:w-[90%] tab:order-1 sm:order-1 tab:m-auto sm:m-auto sm:block tab:block tab:space-y-8 sm:space-y-8 sm:px-[5%]" >
                <div className="zig-zag h-full w-full flex space-x-3 justify-around items-center">
                    <motion.div ref={ref} style={window.innerWidth < 700? '':{y}} className=" h-[32em] w-2/6 sm:h-60 tab:h-96 sm:self-center">
                        <img src={DomImg1} alt="" className='h-full w-full'/>
                    </motion.div>
                    <motion.div  style={window.innerWidth < 700? '':{y:ym}}  className="h-[32em] w-2/6 sm:h-60 tab:h-96 sm:self-end sm:mt-7 tab:mt-7" >
                        <img src={DomImg2} alt="" className='h-full w-full'/>
                    </motion.div>
                    <motion.div ref={ref} style={window.innerWidth < 700? '':{y}} className="h-[32em] w-2/6 sm:h-60 tab:h-96 sm:self-center">
                        <img src={DomImg3} alt="" className='h-full w-full'/>
                    </motion.div>
                </div>
                <motion.p 
                    className='w-full text-sm hidden tab:block sm:block'
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