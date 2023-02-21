import React, { Component } from 'react'
import { MdSportsBaseball } from 'react-icons/md'
import { HiBolt } from 'react-icons/hi2'
import { IoBusinessSharp } from 'react-icons/io5'
import { AiFillHeart } from 'react-icons/ai'
import { MdScience } from 'react-icons/md'
import { GrTechnology } from 'react-icons/gr'
import { Link } from 'react-router-dom'
export class Category extends Component {
    render() {
        return (
            <div>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#af695c" fillOpacity="1" d="M0,288L34.3,282.7C68.6,277,137,267,206,256C274.3,245,343,235,411,213.3C480,192,549,160,617,160C685.7,160,754,192,823,218.7C891.4,245,960,267,1029,229.3C1097.1,192,1166,96,1234,58.7C1302.9,21,1371,43,1406,53.3L1440,64L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z"></path></svg>
                <div className='bg-[#af695c]'>

                    <div className='flex flex-col items-start justify-center px-40 space-y-5'>
                        <h2 className='text-7xl text-[#f9f4ed] font-semibold'>Categories</h2>
                        <h4 className='text-[#f9f4ed] text-xl font-light'>Get topic wise top headlines</h4>
                    </div>

                    <div className='grid grid-cols-3 gap-10 items-center justify-between text-left w-full bg-[#af695c] px-40 pt-20  text-[#2a2a2a]' >

                        <Link to="/general">
                            <div className='p-12 bg-gradient-to-tl from-[#af695c] to-[#f9f4ed] rounded-2xl flex  justify-between transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 duration-75'>
                                <div className='space-y-2'>
                                    <h3 className='text-3xl font-semibold '>Genenral</h3>
                                    <p>Top General Headlines</p>
                                </div>
                                <div>
                                    <HiBolt className='text-6xl' />
                                </div>
                            </div>
                        </Link>

                        <Link to="/business">
                        <div className='p-12 bg-gradient-to-tl from-[#af695c] to-[#f9f4ed] rounded-2xl  flex  justify-between'>
                            <div className='space-y-2'>
                                <h3 className='text-3xl font-semibold '>Business</h3>
                                <p>Top Business Headlines</p>
                            </div>
                            <div>
                                <IoBusinessSharp className='text-6xl' />
                            </div>
                        </div>
                        </Link>

                        <Link to="/sports"><div className='p-12 bg-gradient-to-tl from-[#af695c] to-[#f9f4ed] rounded-2xl  flex  justify-between'>
                            <div className='space-y-2'>
                                <h3 className='text-3xl font-semibold '>Sports</h3>
                                <p>Top Sports Headlines</p>
                            </div>
                            <div>
                                <MdSportsBaseball className='text-6xl' />
                            </div>
                        </div>
                        </Link>

                        <Link to="/health">
                        <div className='p-12 bg-gradient-to-tl from-[#af695c] to-[#f9f4ed] rounded-2xl  flex  justify-between'>
                            <div className='space-y-2'>
                                <h3 className='text-3xl font-semibold '>Health</h3>
                                <p>Top Health Headlines</p>
                            </div>
                            <div>
                                <AiFillHeart className='text-6xl' />
                            </div>
                        </div>
                        </Link>

                        <Link to="/science">
                        <div className='p-12 bg-gradient-to-tl from-[#af695c] to-[#f9f4ed] rounded-2xl  flex  justify-between'>
                            <div className='space-y-2'>
                                <h3 className='text-3xl font-semibold '>Science</h3>
                                <p>Top Science Headlines</p>
                            </div>
                            <div>
                                <MdScience className='text-6xl' />
                            </div>
                        </div>
                        </Link>

                        <Link to="/technology">
                        <div className='p-12 bg-gradient-to-tl from-[#af695c] to-[#f9f4ed] rounded-2xl  flex  justify-between'>
                            <div className='space-y-2'>
                                <h3 className='text-3xl font-semibold '>Technology</h3>
                                <p>Top Technology Headlines</p>
                            </div>
                            <div>
                                <GrTechnology className='text-6xl' />
                            </div>
                        </div>
                        </Link>



                    </div>
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#af695c" fillOpacity="1" d="M0,288L40,288C80,288,160,288,240,245.3C320,203,400,117,480,112C560,107,640,181,720,213.3C800,245,880,235,960,213.3C1040,192,1120,160,1200,154.7C1280,149,1360,171,1400,181.3L1440,192L1440,0L1400,0C1360,0,1280,0,1200,0C1120,0,1040,0,960,0C880,0,800,0,720,0C640,0,560,0,480,0C400,0,320,0,240,0C160,0,80,0,40,0L0,0Z"></path></svg>

            </div>
        )
    }
}

export default Category
