import React from 'react'
import {BsGithub,BsLinkedin} from 'react-icons/bs'
import {AiTwotoneMail} from 'react-icons/ai'
export default function Footer() {
  return (
    <div>

        {/* <svg width="100%" height="20%" id="svg" viewBox="0 0 1440 390" xmlns="http://www.w3.org/2000/svg" class="transition duration-300 ease-in-out delay-150"><path d="M 0,400 C 0,400 0,200 0,200 C 121.39285714285714,220.75 242.78571428571428,241.5 352,251 C 461.2142857142857,260.5 558.2500000000001,258.75 674,241 C 789.7499999999999,223.25 924.2142857142858,189.50000000000003 1055,180 C 1185.7857142857142,170.49999999999997 1312.892857142857,185.25 1440,200 C 1440,200 1440,400 1440,400 Z" stroke="none" stroke-width="0" fill="#af695c" fill-opacity="1" class="transition-all duration-300 ease-in-out delay-150 path-0"></path></svg> */}
        <footer className="flex flex-col md:flex-row md:px-10 py-5 md:justify-between  space-y-5 bg-[#af695c]">
                <div className="flex flex-col md:flex-row items-center justify-center md:space-x-5  space-y-2 ">
                    <img className="rounded-full border-4 border-black h-12 w-12" alt="logo" src="/images/logo.png" />
                    <p className="text-2xl font-bold text text-[#f9f4ed]">News App </p>
                </div>
                <div className='flex space-x-10 items-center justify-center text-[#f9f4ed]'>
                    <a href='https://github.com/AayushDev-02'><BsGithub className='w-8 h-8'/></a>
                    <a href='https://www.linkedin.com/in/aayush-yadav-50ab55239/'><BsLinkedin className='w-8 h-8'/></a>
                    <a href="mailto::yadavaayush002@gmail.com"><AiTwotoneMail className='w-9 h-9'/></a>
                    
                    
                </div>

            </footer>
    </div>
  )
}
