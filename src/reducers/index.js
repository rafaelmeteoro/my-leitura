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

export default combineReducers({
    categories
})
