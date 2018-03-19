import * as Api from '../utils/Api'

// Action types
export const FETCH_CATEGORIES = 'FETCH_CATEGORIES'
export const FETCH_POSTS = 'FETCH_POSTS'
export const UPDATE_POST = 'UPDATE_POST'
export const DELETE_POST = 'DELETE_POST'
export const ADD_POST = 'ADD_POST'
export const FETCH_COMMENTS = 'FETCH_COMMENTS'
export const ADD_COMMENT = 'ADD_COMMENT'

// Categories actions
export const fetchCategories = () => dispatch =>
    Api.getAllCategories().then(data =>
        dispatch({
            type: FETCH_CATEGORIES,
            data
        })
    );

// Posts actions
export const fetchPosts = () => dispatch =>
    Api.getAllPosts().then(data =>
        dispatch({
            type: FETCH_POSTS,
            data
        })
    );

export const fetchPostById = id => dispatch =>
    Api.getPostById(id).then(data =>
        dispatch({
            type: FETCH_POSTS,
            data: [data]
        })
    )

export const votePost = (id, option) => dispatch =>
    Api.votePost(id, option).then(data =>
        dispatch({
            type: UPDATE_POST,
            data
        })
    )

export const deletePost = data => dispatch =>
    Api.deletePost(data.id).then(res => {
        if (res.status === 200) {
            dispatch({
                type: DELETE_POST,
                value: data
            })
        }
    })

export const addPost = post => dispatch =>
    Api.addPost(post).then(data =>
        dispatch({
            type: ADD_POST,
            data
        })
    )

export const updatePost = (id, option) => dispatch =>
    Api.updatePost(id, option).then(data =>
        dispatch({
            type: UPDATE_POST,
            data
        })
    )

// Comment actions
export const fetchCommentsByPost = postId => dispatch =>
    Api.getCommentsByPost(postId).then(data =>
        dispatch({
            type: FETCH_COMMENTS,
            data
        })
    )

export const addComment = comment => dispatch =>
    Api.addComment(comment).then(data => {
        dispatch({
            type: ADD_COMMENT,
            data
        })
    })
