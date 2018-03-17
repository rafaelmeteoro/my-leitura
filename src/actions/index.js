import * as Api from '../utils/Api'

// Action types
export const FETCH_CATEGORIES = 'FETCH_CATEGORIES'
export const FETCH_POSTS = 'FETCH_POSTS'

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
