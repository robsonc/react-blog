import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom' 
import PostsList from './PostsList'
import PostPage from './PostPage'
import FormNewPost from './FormNewPost'

class PostsPage extends Component {

    componentDidMount() {
        this.props.fetchPosts()
    }

    render() {
        return (
            <div className="posts-page">
                <Switch>
                    <Route exact path="/posts" render={(props) => (
                        <PostsList {...this.props} />
                    )} />
                    <Route path="/posts/new" component={FormNewPost} />
                    <Route path="/posts/edit/:_id" component={FormNewPost} />
                    <Route path="/posts/:_id" component={PostPage} />
                </Switch>

            </div>
        )
    }
}

export default PostsPage