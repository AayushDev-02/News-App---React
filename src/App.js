import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import LoadingBar from 'react-top-loading-bar'

import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

export default class App extends Component {
  pageSize = 15;

  API_KEY = process.env.NEWS_API_KEY;

  state = {
    progress: 30,
  }

  setProgress= (progress) => {
    this.setState({
      progress: progress
    })
  }

  render() {
    return (
      <div className='bg-indigo-100'>
        <Router>
          <LoadingBar
            color='#1a2'
            progress={this.state.progress}
            height={3}
          />
          <Navbar />

          <Routes>

            <Route exact path="/" element={<News API_KEY={this.API_KEY} setProgress={this.setProgress} key="general" pageSize={this.pageSize} country="us" category="general" />} />
            <Route exact path="/business" element={<News API_KEY={this.API_KEY} setProgress= {this.setProgress} key="business" pageSize={this.pageSize} country="us" category="business" />} />
            <Route exact path="/entertainment" element={<News API_KEY={this.API_KEY} setProgress= {this.setProgress} key="entertainment" pageSize={this.pageSize} country="us" category="entertainment" />} />
            <Route exact path="/health" element={<News API_KEY={this.API_KEY} setProgress= {this.setProgress} key="health" pageSize={this.pageSize} country="us" category="health" />} />
            <Route exact path="/science" element={<News API_KEY={this.API_KEY} setProgress= {this.setProgress} key="science" pageSize={this.pageSize} country="us" category="science" />} />
            <Route exact path="/sports" element={<News API_KEY={this.API_KEY} setProgress= {this.setProgress} key="sports" pageSize={this.pageSize} country="us" category="sports" />} />
            <Route exact path="/technology" element={<News API_KEY={this.API_KEY} setProgress= {this.setProgress} key="technology" pageSize={this.pageSize} country="us" category="technology" />} />
          </Routes>

        </Router>
      </div>
    )
  }
}
