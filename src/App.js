import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import Main from './components/Main'
import PostForm from './components/PostForm'
import PostDetails from './components/PostDetails'
import PageNotFound from './components/PageNotFound'

class App extends Component {

    render() {
        return (
            <div>
                <Switch>
                    <Route exact path='/' component={Main} />
                    <Route path='/post/new' component={PostForm} />
                    <Route path='/post/edit/:postId' component={PostForm} />
                    <Route path='/:category/:postId' component={PostDetails} />
                    <Route path='/' component={PageNotFound} />
                </Switch>
            </div>
        )
    }
}

export default App
