export const ADD_POST = 'ADD_POST'
export const ADD_POST_SUCCESS = 'ADD_POST_SUCCESS'
export const UPDATE_POST_SUCCESS = 'UPDATE_POST_SUCCESS'
export const FETCH_POSTS_SUCCESS = 'FETCH_POSTS_SUCCESS'
export const FETCH_POST_SUCCESS = 'FETCH_POST_SUCCESS'
export const DELETE_POST = "DELETE_POST"

export const addPost = (dispatch, post) => {
    return fetch('http://localhost:3005/api/posts', {
        method: 'post',
        body: JSON.stringify(post),
        headers: new Headers({
            'Content-type': 'application/json',
        })
    }).then(response => {
        return response.json()
    }).then(data => {
        dispatch({
            type: ADD_POST_SUCCESS,
            payload: data
        })
        console.log('post added', data)
    }, err => {
        console.log('error', err)
    })
}

export const updatePost = (dispatch, post) => {
    console.log('id', post._id)
    return fetch('http://localhost:3005/api/posts/' + post._id, {
        method: 'post',
        body: JSON.stringify(post),
        headers: new Headers({
            'Content-type': 'application/json',
        })
    }).then(response => {
        return response.json()
    }).then(data => {
        dispatch({
            type: UPDATE_POST_SUCCESS,
            payload: data
        })
        console.log('post updated', data)
    }, err => {
        console.log('error', err)
    })
}

export function fetchPosts() {
    return (dispatch) => {
        fetch('http://127.0.0.1:3005/api/posts', {
            headers: new Headers({
                'Content-type': 'application/json',
            })
        }).then((response) => {
            return response.json()
        }).then((data) => {
            dispatch({
                type: FETCH_POSTS_SUCCESS,
                payload: data
            })
        }, (error) => {
            console.log(error)
        });
    }
}

export function fetchPost(_id) {
    return (dispatch) => {
        fetch('http://127.0.0.1:3005/api/posts/' + _id , {
            headers: new Headers({
                'Content-type': 'application/json',
            })
        }).then((response) => {
            return response.json()
        }).then((data) => {
            dispatch({
                type: FETCH_POST_SUCCESS,
                payload: data
            })
        }, (error) => {
            console.log(error)
        });
    }
}

export function deletePost(_id) {
    return dispatch => {
        //console.log('delete post')
        fetch('http://localhost:3005/api/posts/' + _id, {
            method: "delete"
        }).then(response => {
            return response.json()
        }).then(data => {
            dispatch({
                type: DELETE_POST,
                payload: _id
            })
        }, err => {
            console.log(err)
        })
    }
}