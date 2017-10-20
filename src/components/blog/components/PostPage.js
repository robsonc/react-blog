import React, { Component } from 'react'
import { connect } from 'react-redux'
import Post from './Post'
import { fetchPost, deletePost } from "./../actions";

class PostPage extends Component {

    render() {
        return (
            <div>
                <Post onDelete={this.props.deletePost} post={this.props.post} />
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    if (ownProps.match.params._id) {

        let post = state.blog.posts.find(post => {
            return post._id === ownProps.match.params._id
        })

        return {
            post: post
        }
    }
}

export default connect(mapStateToProps, { fetchPost, deletePost })(PostPage)