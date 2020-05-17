import React from 'react'

const Post = (props) => {
  return (
    <div className="post">
      <div className="img-thumb">
        <img src="http://placeimg.com/200/150/tech" alt="post thumbnail"/>
      </div>
      <div className="content">
        <p className="title">{props.data.title}</p>
        <p className="desc">{props.data.body}</p>
        <button className="detail" onClick={() => props.goDetail(props.data.id)}>Detail</button>
        <button className="update" onClick={() => props.update(props.data)}>Update</button>
        <button className="remove" onClick={() => props.remove(props.data.id)}>Remove</button>
      </div>
    </div>
  )
}

export default Post