import React, { Component } from 'react'
import { Link } from "react-router-dom";
import { connect } from 'react-redux'
import { deletePost } from './../actions'

class Post extends Component {

    constructor(props) {
        super(props)
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e) {
        console.log(this)
        this.props.onDelete(this.props.post._id)
    }

    render() {
        return (
            <div>
                <h2>{this.props.post.title}</h2>
                {/* <p>{this.props.post.date.toLocaleDateString()} - {this.props.post.date.toLocaleTimeString()}</p> */}
                <p>{this.props.post.content}</p>
                <Link to={`/posts/edit/${this.props.post._id}`} className="btn btn-primary">Edit</Link>
                <button className="btn btn-default" onClick={this.handleClick}>Delete Post</button>
            </div>
        )
    }
}

Post.defaultProps = {
    post: {
        title: '',
        excerpt: '',
        content: ''
    }
}

export default Post