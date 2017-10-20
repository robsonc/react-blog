import React, { Component } from "react"
import { Link } from "react-router-dom";

class PostExcerpt extends Component {
    render() {
        return (
            <div className="PostExcerpt">
                <div>
                    <Link to={`/posts/${this.props.post._id}`}>
                        <h2>{this.props.post.title}</h2>
                    </Link>
                    {/* <p>{this.props.post.date.toLocaleDateString()} - {this.props.post.date.toLocaleTimeString()}</p> */}
                    <p>{this.props.post.excerpt}</p>
                    <Link to={`/posts/${this.props.post._id}`}>Read more...</Link>
                </div>
            </div>
        )
    }
}

PostExcerpt.defaultProps = {
    post: {
        _id: null,
        title: '',
        excerpt: '',
        content: ''
    }
}

export default PostExcerpt
