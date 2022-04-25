import React from 'react'
import Scrollspy from 'react-scrollspy'

const Header = () => {
  return (
        <div className='sticky top-0 z-40 header-outer-wrapper w-full bg-gray-900 text-white h-auto border-b-2 shadow-xl'>
            <div className="header-wrapper flex justify-between items-center w-5/6 mx-[auto] h-full cursor-pointer sm:w-[93%]">
                <h3 className="  text-3xl flex-auto w-[25%] font-semibold mb-3 ">N<span className='text-4xl text-red-500 font-bold p-px'>F</span>T<span className='text-red-500 text-5xl p-px'>.</span></h3>
                <Scrollspy
                    items={ ['collection','about', 'whitelist','team','faq'] }
                    currentClassName="active" className='tab:hidden justify-items-center  justify-evenly flex w-[50%] flex-auto font-semibold ease-in sm:hidden'>
                        <li className='hover:text-[#a7b3e9d8] delay-100 ease'><a href="#collection">Collection</a></li>
                        <li className='hover:text-[#a7b3e9d8] delay-100 ease'><a href="#about">About</a></li>
                        <li className='hover:text-[#a7b3e9d8] delay-100 ease'><a href="#whitelist">Whitelist</a></li>
                        <li className='hover:text-[#a7b3e9d8] delay-100 ease'><a href="#team">Team</a></li>
                        <li className='hover:text-[#a7b3e9d8] delay-100 ease'><a href="#faq">FAQ</a></li>
                </Scrollspy>
                <div className='w-[25%] justify-self-end flex-auto sm:hidden tab:hidden'>
                    <button className=' border-2 border-dotted font-semibold py-2 px-4 hover:bg-gray-700 hover:border-red-500 delay-75 ease-in-out' >Connect Wallet</button>
                </div>
            </div>
        </div>
  )
}

export default Header;