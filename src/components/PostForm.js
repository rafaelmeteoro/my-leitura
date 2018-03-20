import React, { Component } from 'react'
import { connect } from 'react-redux'
import { capitalize } from '../utils/helpers'
import AppBar from 'material-ui/AppBar'
import { TextField, SelectField, Card, MenuItem } from 'material-ui'
import RaisedButton from 'material-ui/RaisedButton'
import FlatButton from 'material-ui/FlatButton'
import Dialog from 'material-ui/Dialog'
import uuid from 'uuid'
import { addPost, updatePost } from '../actions'
import { Redirect } from 'react-router-dom'

class PostForm extends Component {

    state = {
        title: this.props.post ? this.props.post.title : '',
        body: this.props.post ? this.props.post.body : '',
        author: this.props.post ? this.props.post.author : '',
        category: this.props.post ? this.props.post.category : '',
        finish: false,
        openDialogError: false,
    }

    finish = () => {
        this.setState({
            finish: true
        })
    }

    handleFormChange = (event, value) => {
        this.setState({
            [event.target.id]: value
        })
    }

    handleCategoryChange = (event, index, value) => {
        this.setState({
            category: value
        })
    }

    showErrorDialog = () => {
        this.setState({
            openDialogError: !this.state.openDialogError
        })
    }

    hideErrorDialog = () => {
        this.setState({
            openDialogError: false
        })
    }

    hasError = () => {
        const { title, body, author, category } = this.state

        return (
            title.length === 0 ||
            body.length === 0 ||
            author.length === 0 ||
            category.length === 0
        ) ? true : false
    }

    submitPost = (event) => {
        const { addPost, updatePost, post } = this.props

        if (this.hasError()) {
            this.showErrorDialog()
        } else {
            let newPost = {}
            if (post) {
                newPost = {
                    ...post,
                    timestamp: Date.now(),
                    title: this.state.title,
                    body: this.state.body,
                    author: this.state.author,
                    category: this.state.category
                }
                updatePost(newPost)
            } else {
                newPost = {
                    id: uuid().split('-').join(''),
                    timestamp: Date.now(),
                    title: this.state.title,
                    body: this.state.body,
                    author: this.state.author,
                    category: this.state.category
                }
                addPost(newPost)
            }

            this.finish()
        }
    }

    render() {
        const { finish } = this.state
        if (finish) {
            return <Redirect to={'/'} />
        }

        const { categories } = this.props

        const actions = [
            <FlatButton
                label='OK'
                primary={true}
                onClick={this.hideErrorDialog}
            />
        ]

        return (
            <div>
                <AppBar
                    title='MyLeitura'
                    showMenuIconButton={false}
                />

                <Card style={{ padding: 20, marginLeft: 20, marginRight: 20, marginTop: 20, marginBottom: 20}}>
                    <TextField
                        id='title'
                        value={this.state.title}
                        onChange={this.handleFormChange}
                        floatingLabelText='Title'
                    />
                    <br />
                    <TextField
                        id='body'
                        value={this.state.body}
                        onChange={this.handleFormChange}
                        floatingLabelText='Body'
                    />
                    <br />
                    <TextField
                        id='author'
                        value={this.state.author}
                        onChange={this.handleFormChange}
                        floatingLabelText='Author'
                    />
                    <br />
                    {categories && categories.length > 0 && (
                        <SelectField
                            floatingLabelText='Category'
                            value={this.state.category}
                            onChange={this.handleCategoryChange}>
                            {categories.map((category) => (
                                <MenuItem
                                    key={category.path}
                                    value={category.name}
                                    primaryText={capitalize(category.name)}
                                />
                            ))}
                        </SelectField>
                    )}
                    <br />
                    <RaisedButton
                        label='Ok'
                        primary={true}
                        onClick={this.submitPost}
                    />
                </Card>

                <Dialog
                    title='Error'
                    actions={actions}
                    modal={false}
                    open={this.state.openDialogError}
                    onRequestClose={this.hideErrorDialog}>
                    Please fill all fields.
                </Dialog>

            </div>
        )
    }
}

const mapStateToProps = ({ categories, posts }, ownProps) => {
    const { postId } = ownProps.match.params

    return {
        post: posts && posts.find((post) => post.id === postId),
        categories
    }
}

const mapDispatchToProps = (dispatch) => ({
    addPost(post) {
        dispatch(addPost(post))
    },
    updatePost(post) {
        dispatch(updatePost(post))
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(PostForm);
