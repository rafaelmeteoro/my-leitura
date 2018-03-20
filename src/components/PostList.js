import React from 'react'
import Post from './Post'
import List, { ListItem } from 'material-ui/List'
import { Card, CardTitle } from 'material-ui'

const PostList = ({ posts }) => (
    <div>
        {posts && (posts.length > 0) && (
            <List>
                {posts && posts.map((post) => (
                    <ListItem key={post.id}>
                        <Post post={post} />
                    </ListItem>
                ))}
            </List>
        )}
        {(!posts || (posts.length <= 0)) && (
            <Card style={{ padding: 20, margin: 20 }}>
                <CardTitle
                    title={'No posts to display'}
                />
            </Card>
        )}
    </div>
)

export default PostList
