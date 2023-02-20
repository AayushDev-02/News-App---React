import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';

export default class App extends Component {
  c= 'aayush';
  render() {
    return (
      <div className='bg-[#f8f8f8]'>
        <Navbar/>
        <News pageSize={15}/>
      </div>
    )
  }
}
