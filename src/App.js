import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import Main from './components/Main'
import PostForm from './components/PostForm'

class App extends Component {

    render() {
        return (
            <div>
                <Route exact path='/' render={() => (
                    <Main />
                )}/>
                <Route exact path='/post/new' render={() => (
                    <PostForm />
                )}/>
            </div>
        );
    }
}

export default App
