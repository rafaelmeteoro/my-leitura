import React, { Component } from 'react'
import { Card, CardTitle, CardText, Divider } from 'material-ui'
import { CardActions, IconButton } from 'material-ui'
import ActionThumbUp from 'material-ui/svg-icons/action/thumb-up'
import ActionThumbDown from 'material-ui/svg-icons/action/thumb-down'
import RaisedButton from 'material-ui/RaisedButton'
import { connect } from 'react-redux'
import { fetchPostById, votePost, fetchCommentsByPost, addComment } from '../actions'
import { formatTimestamp } from '../utils/helpers'
import CommentList from './CommentList'
import CommentDialog from './CommentDialog'

class PostDetails extends Component {

    state = {
        openDialogComment: false
    }

    componentDidMount() {
        const { postId } = this.props.match.params
        this.props.fetchPostById(postId)
        this.props.fetchCommentsByPost(postId)
    }

    componentWillReceiveProps(nextProps) {

    }

    showDialogComment = () => {
        this.setState({
            openDialogComment: !this.state.openDialogComment
        })
    }

    handleVote = (post, option) => {
        this.props.votePost(post.id, option)
    }

    render() {

        const { post, comments } = this.props

        return (
            <div>
                {post && (
                    <Card style={{ padding: 10, margin: 2 }}>
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
                        </CardActions>
                        <RaisedButton
                            label='Add Comment'
                            primary={true}
                            onClick={this.showDialogComment}
                        />
                    </Card>
                )}
                {post && comments.length > 0 && (
                    <div>
                        <Card style={{ padding: 10, margin: 2 }}>
                            <CardTitle title='Comments' />
                            <CommentList comments={comments} />
                        </Card>
                    </div>
                )}
                {this.state.openDialogComment && (
                    <CommentDialog
                        openDialog={this.state.openDialogComment}
                        closeDialog={this.showDialogComment}
                        post={post}
                        funcOp={this.props.addComment}
                    />
                )}
            </div>
        )
    }
}

const mapStateToProps = ({ posts, comments }) => ({
    post: posts && posts[0],
    comments
})

const mapDispatchToProps = dispatch => ({
    fetchPostById(postId) {
        dispatch(fetchPostById(postId))
    },
    votePost(post, option) {
        dispatch(votePost(post, option))
    },
    fetchCommentsByPost(postId) {
        dispatch(fetchCommentsByPost(postId))
    },
    addComment(comment) {
        dispatch(addComment(comment))
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(PostDetails)
