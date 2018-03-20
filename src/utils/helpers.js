import moment from 'moment'

export function capitalize(str = '') {
    return typeof str !== 'string' ?
        '' :
        str[0].toUpperCase() + str.slice(1)
}

export function formatTimestamp(timestamp = 0) {
    return moment(timestamp).format("DD-MM-YYYY hh:mm")
}

export function order(posts) {
    if (Array.isArray(posts)) {
        return posts.sort((obj1, obj2) => obj2.voteScore - obj1.voteScore)
    } else {
        return posts
    }
}
