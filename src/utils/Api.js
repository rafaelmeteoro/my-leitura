const api = "http://localhost:3001"

let token = localStorage.token
if (!token) {
    token = localStorage.token = Math.randon().toString(36).substr(-8)
}

const headers = {
    'Accept': 'application/json',
    'Authorization': token,
    'Content-type': 'application/json'
}

export const getAllCategories = () =>
    fetch(`${api}/categories`, { headers })
    .then(res => res.json())
    .then(data => data.categories)

export const getAllPostsByCategory = (category) =>
    fetch(`${api}/${category}/posts`, { headers })
    .then(res => res.json())

export const getAllPosts = () =>
    fetch(`${api}/posts`, { headers })
    .then(res => res.json())

export const getPostById = id =>
    fetch(`${api}/posts/${id}`, { headers })
    .then(res => res.json())

export const votePost = (id, option) =>
    fetch(`${api}/posts/${id}`, {
        method: 'POST',
        headers: headers,
        body: JSON.stringify({ option })
    }).then(res => res.json())

export const deletePost = id =>
    fetch(`${api}/posts/${id}`, {
        method: 'DELETE',
        headers: headers
    })

export const addPost = post =>
    fetch(`${api}/posts`, {
        method: 'POST',
        headers: headers,
        body: JSON.stringify(post)
    }).then(res => res.json())

export const updatePost = post =>
    fetch(`${api}/posts/${post.id}`, {
        method: 'PUT',
        headers: headers,
        body: JSON.stringify(post)
    }).then(res => res.json())
