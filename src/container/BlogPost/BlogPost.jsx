import React, { Component, Fragment } from 'react'
import './BlogPost.css'
import Post from '../../component/Post/Post'
import axios from 'axios'

class BlogPost extends Component {
  state = {
    post: []
  }
  componentDidMount() {
    this.getPostAPI()
  }

  getPostAPI = () => {
    axios.get('http://localhost:3004/posts')
    .then((result) => {
      this.setState({
        post: result.data
      })
    })
  }

  handleRemove = (data) => {
    axios.delete(`http://localhost:3004/posts/${data}`).then((res) => {
      this.getPostAPI()
    })
  }

  render() {
    return (
      <Fragment>
        <p className="blog-post-title">Blog Post</p>
        {
          this.state.post.map(post => {
            return <Post key={post.id} title={post.title} data={post} desc={post.body} remove={this.handleRemove}/>
          })
        }
      </Fragment>
    )
  }
}

export default BlogPost