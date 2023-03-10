import React, { Component } from 'react'

import loading from '../spinner.gif';


export class Spinner extends Component {
  render() {
    return (
      <div className='flex items-center justify-center my-10 h-screen'>
        <img src={loading} alt="Loading" />
      </div>
    )
  }
}

export default Spinner
