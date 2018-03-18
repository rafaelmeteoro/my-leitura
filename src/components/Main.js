import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { fetchCategories, fetchPosts } from '../actions'
import { capitalize } from '../utils/helpers'
import PostList from './PostList'
import AppBar from 'material-ui/AppBar'
import Paper from 'material-ui/Paper'
import { BottomNavigation, BottomNavigationItem } from 'material-ui/BottomNavigation'
import ContentFilterList from 'material-ui/svg-icons/content/filter-list'
import { FloatingActionButton } from 'material-ui'
import ContentAdd from 'material-ui/svg-icons/content/add'

class Main extends Component {

    componentDidMount() {
        this.props.fetchCategories()
        this.props.fetchPosts()
    }

    render() {

        const { categories, posts } = this.props

        return (
            <div>
                <AppBar
                    title='MyLeitura'
                    showMenuIconButton={false}
                />

                <PostList posts={posts} />

                <FloatingActionButton style={{ marginLeft: 30, marginBottom: 30 }} containerElement={<Link to={'/post/new'} />}>
                    <ContentAdd />
                </FloatingActionButton>

                <Paper zDepth={1}>
                    <BottomNavigation>
                        {categories && categories.map((category) => (
                            <BottomNavigationItem
                                key={category.name}
                                label={capitalize(category.name)}
                                icon={<ContentFilterList />}
                            />
                        ))}
                    </BottomNavigation>
                </Paper>
            </div>
        );
    }
}

const mapStateToProps = ({ categories, posts }) => ({
    categories,
    posts
})

const mapDispatchToProps = (dispatch) => ({
    fetchCategories() {
        dispatch(fetchCategories())
    },
    fetchPosts() {
        dispatch(fetchPosts())
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(Main);
