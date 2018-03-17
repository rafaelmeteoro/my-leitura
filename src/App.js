import React, { Component } from 'react'
import { BrowserRouter } from 'react-router-dom'
import './App.css'
import { connect } from 'react-redux'
import { fetchCategories, fetchPosts } from './actions'
import { capitalize } from './utils/helpers'
import AppBar from 'material-ui/AppBar'
import Paper from 'material-ui/Paper'
import { BottomNavigation, BottomNavigationItem } from 'material-ui/BottomNavigation'
import FontIcon from 'material-ui/FontIcon'

const favoritesIcon = <FontIcon className='material-icons'>favorite</FontIcon>

class App extends Component {

    componentDidMount() {
        this.props.fetchCategories()
        this.props.fetchPosts()
    }

    render() {

        const { categories, posts } = this.props

        return (
            <BrowserRouter>
                <div>
                    <AppBar
                        title='MyLeitura'
                        showMenuIconButton={false}
                    />
                    <Paper zDepth={1}>
                        <BottomNavigation>
                            {categories && categories.map((category) => (
                                <BottomNavigationItem
                                    key={category.name}
                                    label={capitalize(category.name)}
                                    icon={favoritesIcon}
                                />
                            ))}
                        </BottomNavigation>
                    </Paper>
                </div>
            </BrowserRouter>
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

export default connect(mapStateToProps, mapDispatchToProps)(App);
