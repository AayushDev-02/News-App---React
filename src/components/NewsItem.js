import React, { Component } from 'react'

export class NewsItem extends Component {

    
    render() {

        let {  title, description, imageUrl, newsUrl, author, date, source } = this.props;
        return (

            <div className=" h-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 ">
                <a href="/">
                    <img className="rounded-t-lg h-1/2 w-full" src={imageUrl} alt="" />
                </a>
                <div className="p-5 mb-10">
                    <a href="/">
                        <h5 className="mb-2 text-xl lg:text-2xl  font-bold tracking-tight text-gray-900 dark:text-white">{title}</h5>
                    </a>
                    <div className="bg-blue-100 my-3 w-fit text-blue-800 text-xs font-medium mr-2 px-3 py-2 rounded-full dark:bg-blue-900 dark:text-blue-300">{source}</div>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{description}</p>
                    <p className='text-sm mb-3 text-gray-400 '>By {author} on {date}</p>
                    <a href={newsUrl} target="_blank" className="inline-flex items-center cursor-pointer px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" rel="noreferrer">
                        Read more
                        <svg aria-hidden="true" className="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                    </a>
                </div>
            </div>

        )
    }
}

export default NewsItem
