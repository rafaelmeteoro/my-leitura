import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchPostsByCategory } from '../actions'
import { order } from '../utils/helpers'
import PostList from './PostList'
import AppBar from 'material-ui/AppBar'

class Category extends Component {

    componentDidMount() {
        const { category } = this.props.match.params
        this.props.fetchPostsByCategory(category)
    }

    render() {

        const { posts } = this.props

        return (
            <div>
                <AppBar
                    title='MyLeitura'
                    showMenuIconButton={false}
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
