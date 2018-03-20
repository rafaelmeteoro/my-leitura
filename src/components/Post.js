import React, { Component } from 'react'
import { formatTimestamp } from '../utils/helpers'
import { votePost, deletePost } from '../actions'
import { Card, CardTitle, CardText, Divider } from 'material-ui'
import { CardActions, IconButton } from 'material-ui'
import ActionThumbUp from 'material-ui/svg-icons/action/thumb-up'
import ActionThumbDown from 'material-ui/svg-icons/action/thumb-down'
import Delete from 'material-ui/svg-icons/action/delete'
import Edit from 'material-ui/svg-icons/image/edit'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

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
                <Card style={{ padding: 10, margin: 2 }}>
                    <Link to={`/${post.category}/${post.id}`} style={{textDecoration: 'none'}}>
                        <CardTitle
                            title={post.title}
                            subtitle={'Date: ' + formatTimestamp(post.timestamp)}
                        />
                        <CardText>Author: {post.author} - Comments: {post.commentCount}</CardText>
                        <CardText>Score: {post.voteScore}</CardText>
                    </Link>
                    <Divider />
                    <CardActions>
                        <IconButton tooltip='Add score' onClick={() => this.handleVote(post, 'upVote')}>
                            <ActionThumbUp />
                        </IconButton>
                        <IconButton tooltip='Sub score' onClick={() => this.handleVote(post, 'downVote')}>
                            <ActionThumbDown />
                        </IconButton>
                        <IconButton tooltip='Delete post' onClick={() => this.handleDeletePost(post)}>
                            <Delete />
                        </IconButton>
                        <IconButton tooltip='Edit post' containerElement={<Link to={`/post/edit/${post.id}`} />}>
                            <Edit />
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
