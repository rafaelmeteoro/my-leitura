import React, { Component } from 'react'
import { formatTimestamp } from '../utils/helpers'
import { votePost, deletePost } from '../actions'
import { Card, CardTitle, CardText, Divider } from 'material-ui'
import { CardActions, IconButton } from 'material-ui'
import ActionThumbUp from 'material-ui/svg-icons/action/thumb-up'
import ActionThumbDown from 'material-ui/svg-icons/action/thumb-down'
import Delete from 'material-ui/svg-icons/action/delete'
import { connect } from 'react-redux'

class Post extends Component {

    handleVote = (post, option) => {
        this.props.votePost(post.id, option)
    }

    handleDeletePost = (post) => {
        this.props.deletePost(post)
    }

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
                        <IconButton tooltip='Add vote' onClick={() => this.handleVote(post, 'upVote')}>
                            <ActionThumbUp />
                        </IconButton>
                        <IconButton tooltip='Sub vote' onClick={() => this.handleVote(post, 'downVote')}>
                            <ActionThumbDown />
                        </IconButton>
                        <IconButton tooltip='Delete post' onClick={() => this.handleDeletePost(post)}>
                            <Delete />
                        </IconButton>
                    </CardActions>
                </Card>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    votePost(post, option) {
        dispatch(votePost(post, option))
    },
    deletePost(post) {
        dispatch(deletePost(post))
    }
})

export default connect(null, mapDispatchToProps)(Post)
