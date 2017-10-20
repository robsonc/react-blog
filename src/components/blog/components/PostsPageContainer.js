import { connect } from 'react-redux'
import { fetchPosts, deletePost } from './../actions'
import PostsPage from './PostsPage'

const mapStateToProps = (state) => {
    return {
        posts: state.blog.posts
    }
}

export default connect(
    mapStateToProps,
    { 
        fetchPosts,
        deletePost 
    }
)(PostsPage)