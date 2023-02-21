import React, { Component } from 'react'

import Category from './Category'
import Partners from './Partners'
export class Hero extends Component {
    render() {
        return (
            <div className=' '>
                <div className='flex flex-col items-center justify-between font-poppins pt-40 text-[#2a2a2a]'>
                    <div className='flex flex-col items-center justify-between font-poppins text-[#2a2a2a] space-y-10'>
                        <h1 className='text-8xl font-extrabold '>Welcome to News App</h1>
                        <h4 className='text-2xl underline decoration-[#af695c] underline-offset-8'>Get the latest news from all around the world</h4>
                        <div className='font-bold text-lg space-x-5 flex flex-row w-2/5 text-[#eaeaea]'>

                            <a href='https://github.com/AayushDev-02/News-App---React' className='p-3 bg-[#af695c] w-1/2 border-2 border-transparent text-center hover:bg-[#f9f4ed] hover:border-2 hover:border-[#af695c] hover:text-[#af695c]'>GitHub</a>
                            <a href='https://newsapi.org/' className='p-3 bg-[#af695c] text-center w-1/2 border-2 border-transparent hover:bg-[#f9f4ed] hover:border-2 hover:border-[#af695c] hover:text-[#af695c]'>News API</a>
                        </div>
                    </div>
                </div>
                <Category />
                <Partners/>
            </div>
        )
    }
}

export default Hero
