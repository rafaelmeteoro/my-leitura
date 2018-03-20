import React, { Component } from 'react'
import { Dialog, FlatButton, TextField } from 'material-ui'
import uuid from 'uuid'

class CommentDialog extends Component {

    state = {
        author: this.props.comment ? this.props.comment.author : '',
        body: this.props.comment ? this.props.comment.body : '',
        authorRequired: '',
        bodyRequired: ''
    }

    handleFormChange = (event, value) => {
        this.setState({
            [event.target.id]: value,
            authorRequired: '',
            bodyRequired: ''
        })
    }

    hasError = () => {
        const { author, body } = this.state

        return (
            author.length === 0 ||
            body.length === 0
        ) ? true : false
    }

    submitComment = (event) => {

        const { post, comment, closeDialog, funcOp } = this.props
        let newComment = {}

        if (this.hasError()) {
            this.setState({
                authorRequired: this.state.author ? '' : 'This field is required',
                bodyRequired: this.state.body ? '' : 'This field is required'
            })
        } else {
            if (comment) {
                newComment = {
                    ...comment,
                    timestamp: Date.now(),
                    author: this.state.author,
                    body: this.state.body
                }
            } else {
                newComment = {
                    id: uuid().split('-').join(''),
                    timestamp: Date.now(),
                    author: this.state.author,
                    body: this.state.body,
                    parentId: post.id
                }
            }
            funcOp(newComment)
            this.setState({
                author: '',
                body: ''
            })
            closeDialog()
        }
    }

    render() {

        const { openDialog, closeDialog } = this.props

        const actions = [
            <FlatButton
                label='Save'
                primary
                onClick={this.submitComment}
            />,
            <FlatButton
                label='Cancel'
                onClick={closeDialog}
            />
        ]

        return (
            <Dialog
                title={'Comment'}
                open={openDialog}
                actions={actions}>
                <div>
                    <TextField
                        id='body'
                        floatingLabelText='Comment'
                        fullWidth
                        value={this.state.body}
                        errorText={this.state.bodyRequired}
                        onChange={this.handleFormChange}
                    />
                    <br />
                    <TextField
                        id='author'
                        floatingLabelText='Author'
                        fullWidth
                        value={this.state.author}
                        errorText={this.state.authorRequired}
                        onChange={this.handleFormChange}
                    />
                </div>
            </Dialog>
        )
    }
}

export default CommentDialog
