import * as Api from '../utils/Api'

// Action types
export const FETCH_CATEGORIES = 'FETCH_CATEGORIES'

// Categories actions
export const fetchCategories = () => dispatch =>
    Api.getAllCategories().then(data =>
        dispatch({
            type: FETCH_CATEGORIES,
            data
        })
    );
