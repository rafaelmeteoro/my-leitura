import { combineReducers } from 'redux'
import * as ACTIONS from '../actions'

const categories = (state = [], action) => {
    switch (action.type) {
        case ACTIONS.FETCH_CATEGORIES:
            return action.data
        default:
            return state
    }
}

const posts = (state = [], action) => {
    switch (action.type) {
        case ACTIONS.FETCH_POSTS:
            return [...action.data]
        case ACTIONS.ADD_POST:
            return [...state, action.data]
        case ACTIONS.UPDATE_POST:
            return state.map(post => (action.data.id === post.id ? action.data : post))
        case ACTIONS.DELETE_POST:
            return state.filter(post => post.id !== action.value.id)
        default:
            return state
    }
}

const comments = (state = [], action) => {
    switch (action.type) {
        case ACTIONS.FETCH_COMMENTS:
            return [...action.data]
        case ACTIONS.ADD_COMMENT:
            return [...state, action.data]
        case ACTIONS.UPDATE_COMMENT:
            return state.map(comment => (action.data.id === comment.id ? action.data : comment))
        case ACTIONS.DELETE_COMMENT:
            return state.filter(comment => comment.id !== action.value.id)
        default:
            return state
    }
}

export default combineReducers({
    categories,
    posts,
    comments
})
