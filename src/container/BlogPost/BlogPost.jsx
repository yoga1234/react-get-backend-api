import React, { Component, Fragment } from 'react'
import './BlogPost.css'
import Post from '../../component/Post/Post'

class BlogPost extends Component {
  state = {
    post: []
  }
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(json => {
        this.setState({
          post: json
        })
      })
  }
  render() {
    return (
      <Fragment>
        <p className="blog-post-title">Blog Post</p>
        {
          this.state.post.map(post => {
            return <Post key={post.id} title={post.title} desc={post.body}/>
          })
        }
      </Fragment>
    )
  }
}

export default BlogPost