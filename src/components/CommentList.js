import React from 'react'
import Comment from './Comment'
import List, { ListItem } from 'material-ui/List'

const CommentList = ({ comments }) => (
    <div>
        <List>
            {comments && comments.map((comment) => (
                <ListItem key={comment.id}>
                    <Comment comment={comment} />
                </ListItem>
            ))}
        </List>
    </div>
)

export default CommentList
