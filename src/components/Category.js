import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchPostsByCategory } from '../actions'
import { order } from '../utils/helpers'
import PostList from './PostList'
import AppBar from 'material-ui/AppBar'
import NavigationArrowBack from 'material-ui/svg-icons/navigation/arrow-back'
import { Redirect } from 'react-router-dom'
import { IconButton } from 'material-ui'

class Category extends Component {

    state = {
        backClick: false
    }

    handleBackArrow = () => {
        this.setState({
            backClick: true
        })
    }

    componentDidMount() {
        const { category } = this.props.match.params
        this.props.fetchPostsByCategory(category)
    }

    render() {

        const { posts } = this.props
        const { backClick } = this.state

        if (backClick) {
            return <Redirect to={'/'} />
        }

        return (
            <div>
                <AppBar
                    title='MyLeitura'
                    onLeftIconButtonClick={this.handleBackArrow}
                    iconElementLeft={<IconButton><NavigationArrowBack /></IconButton>}
                />

                <PostList posts={posts} />
            </div>
        )
    }
}

const mapStateToProps = ({ posts, postsOrder }) => ({
    posts: order([...posts], postsOrder)
})

const mapDispatchToProps = (dispatch) => ({
    fetchPostsByCategory(category) {
        dispatch(fetchPostsByCategory(category))
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(Category)
