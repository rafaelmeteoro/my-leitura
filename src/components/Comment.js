import React, { Component } from 'react'
import { Card, CardTitle, CardText, Divider } from 'material-ui'
import { CardActions, IconButton } from 'material-ui'
import ActionThumbUp from 'material-ui/svg-icons/action/thumb-up'
import ActionThumbDown from 'material-ui/svg-icons/action/thumb-down'
import Delete from 'material-ui/svg-icons/action/delete'
import Edit from 'material-ui/svg-icons/image/edit'
import { connect } from 'react-redux'
import { voteComment, deleteComment } from '../actions'

class Comment extends Component {

    handleVote = (comment, option) => {
        this.props.voteComment(comment.id, option)
    }

    handleDeleteComment = (comment) => {
        this.props.deleteComment(comment)
    }

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
                        <IconButton tooltip='Add score' onClick={() => this.handleVote(comment, 'upVote')}>
                            <ActionThumbUp />
                        </IconButton>
                        <IconButton tooltip='Sub score' onClick={() => this.handleVote(comment, 'downVote')}>
                            <ActionThumbDown />
                        </IconButton>
                        <IconButton tooltip='Delete comment' onClick={() => this.handleDeleteComment(comment)}>
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

const mapDispatchToProps = dispatch => ({
    voteComment(comment, option) {
        dispatch(voteComment(comment, option))
    },
    deleteComment(comment) {
        dispatch(deleteComment(comment))
    }
})

export default connect(null, mapDispatchToProps)(Comment)
