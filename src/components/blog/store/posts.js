import _ from 'lodash'
import { ADD_POST, 
    ADD_POST_SUCCESS, 
    UPDATE_POST_SUCCESS, 
    FETCH_POSTS_SUCCESS, 
    FETCH_POST_SUCCESS,
    DELETE_POST } from "./../actions";

let posts = [];

export default (prevPosts = posts, action) => {
    let index = -1;

    switch(action.type) {
        case DELETE_POST:
            //delete post 
            return prevPosts.filter(post => post._id !== action.payload)
        case UPDATE_POST_SUCCESS:
            return prevPosts.map((post) => {
                if (post._id === action.payload._id) return action.payload
                return post
            })
        case FETCH_POSTS_SUCCESS:
            //fetch all posts
            return action.payload
        case FETCH_POST_SUCCESS:
            //fetch single post
            index = prevPosts.findIndex((post) => post._id === action.payload._id);
            if (index > -1) {
                return prevPosts.map((post) => {
                    if (post._id === action.payload._id) return action.payload
                    return post
                })
            } else {
                return [...prevPosts, action.payload]
            }
        case ADD_POST_SUCCESS:
            //add new post
            return [...prevPosts, action.payload]
        default:
            return prevPosts
    }
}