import moment from 'moment'

export function capitalize(str = '') {
    return typeof str !== 'string' ?
        '' :
        str[0].toUpperCase() + str.slice(1)
}

export function formatTimestamp(timestamp = 0) {
    return moment(timestamp).format("DD-MM-YYYY hh:mm")
}

export function order(posts, order = ORDER_SCORE) {
    switch (order) {
        case ORDER_SCORE:
            return sortByScore(posts)
        case ORDER_TIME:
            return sortByTime(posts)
        default:
            return posts
    }
}

const sortByScore = posts => {
    if (Array.isArray(posts)) {
        return posts.sort((obj1, obj2) => obj2.voteScore - obj1.voteScore)
    }

    return posts
}

const sortByTime = posts => {
    if (Array.isArray(posts)) {
        return posts.sort((obj1, obj2) => obj2.timestamp - obj1.timestamp)
    }

    return posts
}

export const ORDER_SCORE = 'ORDER_SCORE'
export const ORDER_TIME = 'ORDER_TIME'
