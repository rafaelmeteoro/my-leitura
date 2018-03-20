import React from 'react'
import Post from './Post'
import List, { ListItem } from 'material-ui/List'

const PostList = ({ posts }) => (
    <div>
        <List>
            {posts && posts.map((post) => (                
                <ListItem key={post.id}>
                    <Post post={post} />
                </ListItem>
            ))}
        </List>
    </div>
)

export default PostList
