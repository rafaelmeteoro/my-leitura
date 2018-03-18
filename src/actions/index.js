import * as Api from '../utils/Api'

// Action types
export const FETCH_CATEGORIES = 'FETCH_CATEGORIES'
export const FETCH_POSTS = 'FETCH_POSTS'
export const UPDATE_POST = 'UPDATE_POST'
export const DELETE_POST = 'DELETE_POST'

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
