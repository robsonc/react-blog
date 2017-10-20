import React, { Component } from 'react'
import _ from 'lodash'
import { connect } from 'react-redux'
import { addPost, fetchPost, updatePost } from './../actions'

class FormNewPost extends Component {
    
    constructor(props) {
        super(props)

        this.state = {
            _id: props.post ? props.post._id : null,
            title: props.post ? props.post.title : '',
            date: props.post ? props.post.date : '',
            excerpt: props.post ? props.post.excerpt : '',
            content: props.post ? props.post.content : ''
        }

        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(e) {
        const target = e.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
    
        this.setState({
          [name]: value
        });
    }

    handleSubmit(e) {
        e.preventDefault()
        
        if (this.state._id) {
            //console.log('call update');
            this.props.updatePost({
                _id: this.state._id,
                title: this.state.title,
                date: new Date(),
                excerpt: this.state.excerpt,
                content: this.state.content
            });
        } else {
            //console.log('call add')
            this.props.addPost({
                title: this.state.title,
                date: new Date(),
                excerpt: this.state.excerpt,
                content: this.state.content
            });
        }
    }

    componentWillReceiveProps(props) {
        if (this.props.match.params._id) {
            this.setState({
                _id: props.post._id,
                title: props.post.title,
                excerpt: props.post.excerpt,
                content: props.post.content
            })
        }
    }

    componentWillMount() {
        if (this.props.match.params._id) {
            this.props.fetchPost();
        }
    }

    render() {
        return (
            <div>
                <h1>Novo Post</h1>        
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label>Title</label>
                        <input type="text" className="form-control" name="title" value={this.state.title} 
                            onChange={this.handleChange} placeholder="A title for this post" />
                    </div>
                    <div className="form-group">
                        <label>Date</label>
                        <input type="text" className="form-control" name="date" value={this.state.date} 
                            onChange={this.handleChange} placeholder="A date for this post" />
                    </div>
                    <div className="form-group">
                        <label>Excerpt</label>
                        <textarea className="form-control" name="excerpt" value={this.state.excerpt} rows='5'
                            onChange={this.handleChange}></textarea>
                    </div>
                    <div className="form-group">
                        <label>Content</label>
                        <textarea className="form-control" name="content" value={this.state.content} rows='10' 
                            onChange={this.handleChange}></textarea>
                    </div>
                
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    
    let post = null;

    if (ownProps.match.params._id) {
        post = state.blog.posts.find(post => {
            return post._id === ownProps.match.params._id;
        })
    }

    return {
        post: post
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchPost,
        addPost: (post) => {
            addPost(dispatch, post)
        },
        updatePost: (post) => {
            updatePost(dispatch, post)
        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(FormNewPost)