import React, { Component } from 'react'
import BlogPost from '../BlogPost/BlogPost'
import './Home.css'

class Home extends Component {
  render(){
    return(
      <div>
        <p className="home-title">Blog Post</p>
        <hr />
        <BlogPost />
      </div>
    )
  }
}

export default Home