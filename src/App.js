import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import Main from './components/Main'
import PostForm from './components/PostForm'
import PostDetails from './components/PostDetails'

class App extends Component {

    render() {
        return (
            <div>
                <Route exact path='/' component={Main} />
                <Route exact path='/post/new' component={PostForm} />
                <Route exact path='/post/edit/:postId' component={PostForm} />
                <Route exact path='/:category/:postId' component={PostDetails} />
            </div>
        )
    }
}

export default App
