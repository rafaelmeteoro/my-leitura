import React, { Component } from 'react'
import { Card, CardTitle, CardText, Divider } from 'material-ui'
import { CardActions, IconButton } from 'material-ui'
import ActionThumbUp from 'material-ui/svg-icons/action/thumb-up'
import ActionThumbDown from 'material-ui/svg-icons/action/thumb-down'
import Delete from 'material-ui/svg-icons/action/delete'
import Edit from 'material-ui/svg-icons/image/edit'
import { connect } from 'react-redux'

class Comment extends Component {

    render() {

        const { comment } = this.props

        return (
            <div>
                <Card>
                    <CardTitle
                        title={comment.body}
                        subtitle={'Author: ' + comment.author}
                    />
                    <CardText>Score: {comment.voteScore}</CardText>
                    <Divider />
                    <CardActions>
                        <IconButton tooltip='Add score'>
                            <ActionThumbUp />
                        </IconButton>
                        <IconButton tooltip='Sub score'>
                            <ActionThumbDown />
                        </IconButton>
                        <IconButton tooltip='Delete comment'>
                            <Delete />
                        </IconButton>
                        <IconButton tooltip='Edit comment'>
                            <Edit />
                        </IconButton>
                    </CardActions>
                </Card>
            </div>
        )
    }
}

export default Comment
