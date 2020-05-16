import React, { Component, Fragment } from 'react'
import './BlogPost.css'
import Post from '../../component/Post/Post'
import axios from 'axios'

class BlogPost extends Component {
  state = {
    post: [],
    formBlogPost: {
      userId: 1,
      id: 1,
      title: '',
      body: ''
    }
  }
  
  getPostAPI = () => {
    axios.get('http://localhost:3004/posts?_sort=id&_order=desc')
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
  
  handleFormChange = (e) => {
    let formBlogPostNew = {...this.state.formBlogPost}
    let timeStamp = new Date().getTime();
    formBlogPostNew[e.target.name] = e.target.value
    formBlogPostNew["id"] = timeStamp
    this.setState({
      formBlogPost: formBlogPostNew
    })
  }
  
  handleSubmit = () => {
    this.postDataToAPI()
  }
  
  postDataToAPI = () => {
    axios.post(`http://localhost:3004/posts`, this.state.formBlogPost).then((res) => {
      console.log(res);
      this.getPostAPI();
    }, (err) => {
      console.log('err', err)
    })
  }
  
  componentDidMount() {
    this.getPostAPI()
  }

  render() {
    return (
      <Fragment>
        <div className="form-add-post">
          <label htmlFor="title">Title</label>
          <input type="text" name="title" placeholder="Add title here" onChange={this.handleFormChange}/>
          <label htmlFor="body">Blog Content</label>
          <textarea name="body" id="body" cols="30" rows="10" onChange={this.handleFormChange}></textarea>
          <button onClick={this.handleSubmit} className="btn-submit">Simpan</button>
        </div>
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