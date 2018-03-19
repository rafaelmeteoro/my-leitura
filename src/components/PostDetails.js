import React, { Component } from 'react'
import { Card, CardTitle, CardText, Divider, CardHeader } from 'material-ui'
import { CardActions, IconButton } from 'material-ui'
import ActionThumbUp from 'material-ui/svg-icons/action/thumb-up'
import ActionThumbDown from 'material-ui/svg-icons/action/thumb-down'
import RaisedButton from 'material-ui/RaisedButton'
import { connect } from 'react-redux'
import { fetchPostById, votePost, fetchCommentsByPost } from '../actions'
import { formatTimestamp } from '../utils/helpers'

class PostDetails extends Component {

    componentDidMount() {
        const { postId } = this.props.match.params
        this.props.fetchPostById(postId)
        this.props.fetchCommentsByPost(postId)
    }

    componentWillReceiveProps(nextProps) {

    }

    handleVote = (post, option) => {
        this.props.votePost(post.id, option)
    }

    render() {

        const { post, comments } = this.props
        console.log(comments);

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
                        />
                    </Card>
                )}
                {post && comments.length > 0 && (
                    <div>
                        <Card style={{ padding: 10, margin: 2 }}>
                            <CardHeader
                                title={`Comment: ${post.commentCount}`}
                            />
                        </Card>
                    </div>
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
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(PostDetails)
