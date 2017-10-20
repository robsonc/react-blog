import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import PostExcerpt from './PostExcerpt'

class PostsList extends Component {
    render() {
        let posts = []

        posts = this.props.posts.map(post => {
            return <PostExcerpt key={post._id} post={post} {...this.props} />
        })

        return (
            <div>
                <h1>Blog Posts</h1>
                <Link to="/posts/new" className="btn btn-default">New Post</Link>
                {posts}
            </div>
        )
    }
}

export default PostsList