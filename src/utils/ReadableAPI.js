const api = "https://localhost:3001"

let token = "any-token"

const headers = {
    'Accept': 'application/json',
    'Authorization': token
}

export const getAllPosts = () =>
    fetch(`${api}/posts`, { headers })
    .then(res => res.json())
    .then(data => data)
