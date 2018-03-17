import React, { Component } from 'react'
import { formatTimestamp } from '../utils/helpers'
import { Card, CardTitle, CardText, Divider } from 'material-ui'
import { CardActions, IconButton } from 'material-ui'
import ActionThumbUp from 'material-ui/svg-icons/action/thumb-up'
import ActionThumbDown from 'material-ui/svg-icons/action/thumb-down'

class Post extends Component {

    render() {

        const { post } = this.props

        return (
            <div>
                <Card style={{ padding: 10, margin: 2}}>
                    <CardTitle
                        title={post.title}
                        subtitle={'Date: ' + formatTimestamp(post.timestamp)}
                    />
                    <CardText>Author: {post.author} - Comments: {post.commentCount}</CardText>
                    <CardText>Score: {post.voteScore}</CardText>
                    <Divider />
                    <CardActions>
                        <IconButton tooltip='Add vote'><ActionThumbUp /></IconButton>
                        <IconButton tooltip='Sub vote'><ActionThumbDown /></IconButton>
                    </CardActions>
                </Card>
            </div>
        )
    }
}

export default Post
