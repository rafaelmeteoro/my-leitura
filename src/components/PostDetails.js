import React, { Component } from 'react'
import { Card, CardTitle, CardText, Divider } from 'material-ui'
import { CardActions, IconButton } from 'material-ui'
import NavigationArrowBack from 'material-ui/svg-icons/navigation/arrow-back'
import ActionThumbUp from 'material-ui/svg-icons/action/thumb-up'
import ActionThumbDown from 'material-ui/svg-icons/action/thumb-down'
import Delete from 'material-ui/svg-icons/action/delete'
import Edit from 'material-ui/svg-icons/image/edit'
import RaisedButton from 'material-ui/RaisedButton'
import AppBar from 'material-ui/AppBar'
import { connect } from 'react-redux'
import { fetchPostById, votePost, fetchCommentsByPost, addComment, deletePost } from '../actions'
import { formatTimestamp } from '../utils/helpers'
import { Link } from 'react-router-dom'
import CommentList from './CommentList'
import CommentDialog from './CommentDialog'
import { Redirect } from 'react-router-dom'

class PostDetails extends Component {

    state = {
        openDialogComment: false,
        postDeleted: false,
        backClick: false,
        errorFetchPosts: false
    }

    componentDidMount() {
        const { postId } = this.props.match.params
        this.props.fetchPostById(postId)
        this.props.fetchCommentsByPost(postId)
    }

    showDialogComment = () => {
        this.setState({
            openDialogComment: !this.state.openDialogComment
        })
    }

    handleVote = (post, option) => {
        this.props.votePost(post.id, option)
    }

    handleDeletePost = (post) => {
        this.props.deletePost(post)
        this.setState({
            postDeleted: true
        })
    }

    handleBackArrow = () => {
        this.setState({
            backClick: true
        })
    }

    render() {

        const { post, comments } = this.props
        const { postDeleted, backClick } = this.state

        if (postDeleted || backClick) {
            return <Redirect to={'/'} />
        }

        return (
            <div>
                <AppBar
                    title='MyLeitura'
                    onLeftIconButtonClick={this.handleBackArrow}
                    iconElementLeft={<IconButton><NavigationArrowBack /></IconButton>}
                />
                {post && (
                    <Card style={{ padding: 10, margin: 2 }}>
                        <CardTitle
                            title={post.title}
                            subtitle={'Date: ' + formatTimestamp(post.timestamp)}
                        />
                        <CardText>Author: {post.author} - Comments: {post.commentCount}</CardText>
                        <CardText>Score: {post.voteScore}</CardText>
                        <CardText style={{fontSize: 28}}>{post.body}</CardText>
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
                            <IconButton tooltip='Edit post' containerElement={<Link to={`/post/edit/${post.id}`} />}>
                                <Edit />
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
    },
    deletePost(post) {
        dispatch(deletePost(post))
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(PostDetails)
