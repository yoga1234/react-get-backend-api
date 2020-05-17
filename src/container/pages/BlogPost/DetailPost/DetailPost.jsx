import React, { Component } from 'react'
import Axios from 'axios'
import './DetailPost.css'

class DetailPost extends Component {

  state = {
    post: {
      title: '',
      body: ''
    }
  }

  componentDidMount() {
    let id = this.props.match.params.id
    Axios.get(`http://localhost:3004/posts/${id}`).then(res => {
      let post = res.data
      this.setState({
        post: {
          title: post.title,
          body: post.body
        }
      })
    })
  }

  render() {
    return(
      <div className="p-detail-post">
        <p className="detail-title">{this.state.post.title}</p>
        <p className="detail-body">{this.state.post.body}</p>
      </div>
    )
  }
}

export default DetailPost