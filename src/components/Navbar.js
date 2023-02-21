import React, { Component } from 'react'
import { Link } from 'react-router-dom'
// import PropTypes from 'prop-types'


export class Navbar extends Component {
    // static propTypes = {

    // }

    render() {
        return (
            <nav className="  px-2 sm:px-4 py-2.5 rounded pt-4">
                <div className="container flex flex-wrap items-center justify-between mx-auto">
                    <Link to="/" className="flex items-center">
                        <img  src="/images/logo.png" className="h-6 mr-3 border-[#af695c] border-4 rounded-full sm:h-9" alt="Flowbite Logo" />
                        <span className="self-center text-xl font-semibold whitespace-nowrap text-[#2a2a2a] underline-offset-8 hover:underline decoration-[#af695c] decoration-2">News App</span>
                    </Link>
                    <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
                        <span className="sr-only">Open main menu</span>
                        <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
                    </button>
                    <div className="hidden w-full md:block md:w-auto" id="navbar-default">
                        <ul className="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 ">
                        
                            <li>
                                <Link to="/" className="block py-2 pl-3 pr-4 text-[#2a2a2a] underline-offset-8 underline decoration-[#af695c] decoration-2 rounded  md:p-0 " aria-current="page">Home</Link>
                            </li>
                            <li>
                                <Link to="/business" className="block py-2 pl-3 pr-4 md:border-0  md:p-0 text-[#2a2a2a] underline-offset-8 hover:underline decoration-[#af695c] decoration-2">General</Link>
                            </li>
                            <li>
                                <Link to="/business" className="block py-2 pl-3 pr-4 md:border-0  md:p-0 text-[#2a2a2a] underline-offset-8 hover:underline decoration-[#af695c] decoration-2">Business</Link>
                            </li>
                            <li>
                                <Link to="/entertainment" className="block py-2 pl-3 pr-4 md:border-0  md:p-0 text-[#2a2a2a] underline-offset-8 hover:underline decoration-[#af695c] decoration-2">Entertainment</Link>
                            </li>
                            <li>
                                <Link to="/health" className="block py-2 pl-3 pr-4 md:border-0  md:p-0 text-[#2a2a2a] underline-offset-8 hover:underline decoration-[#af695c] decoration-2">Health</Link>
                            </li>
                            <li>
                                <Link to="/science" className="block py-2 pl-3 pr-4 md:border-0  md:p-0 text-[#2a2a2a] underline-offset-8 hover:underline decoration-[#af695c] decoration-2">Science</Link>
                            </li>
                            <li>
                                <Link to="/sports" className="block py-2 pl-3 pr-4 md:border-0  md:p-0 text-[#2a2a2a] underline-offset-8 hover:underline decoration-[#af695c] decoration-2">Sports</Link>
                            </li>
                            <li>
                                <Link to="/technology" className="block py-2 pl-3 pr-4 md:border-0  md:p-0 text-[#2a2a2a] underline-offset-8 hover:underline decoration-[#af695c] decoration-2">Technology</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        )
    }

}
export default Navbar
