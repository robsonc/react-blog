import React, { Component } from 'react'
import { Route } from 'react-router-dom'

import './BlogApp.css'
import Nav from './Nav'
import HomePage from './HomePage'
import PostsPageContainer from './PostsPageContainer'
import ContactPage from './ContactPage'

class BlogApp extends Component {
    render() {
        return (
            <div className="blog-app container">
                <Nav />
                <Route exact path='/' component={HomePage} />
                <Route path='/posts' component={PostsPageContainer} />
                <Route path='/contact' component={ContactPage} />
                
                {/* HomePage
                  LatestPosts
                PostsPage
                   PostsHeader
                   PostsList
                   Sidebar
                ContactPage
                   ContactHeader
                   ContactForm */}
            </div>
        );
    }
}

export default BlogApp