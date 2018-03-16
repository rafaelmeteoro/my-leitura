import React, { Component } from 'react'
import { BrowserRouter } from 'react-router-dom'
import './App.css'
import { connect } from 'react-redux'
import { fetchCategories } from './actions'
import { AppBar, BottomNavigation, BottomNavigationItem, Paper } from 'material-ui'
// import FavoriteIcon from 'material-ui-icons/Favorite'
import FavIcon from 'material-ui/svg-icons/action/alarm-add'

import OutroIcon from 'material-ui/FontIcon'

const outro = <OutroIcon className="material-icons">outroios</OutroIcon>

class App extends Component {

    componentDidMount() {
        this.props.fetchCategories()
    }

    render() {
        return (
            <BrowserRouter>
                <div>
                    <AppBar
                        title='MyLeitura'
                        showMenuIconButton={false}
                    />
                    <Paper zDepth={1}>
                        <BottomNavigation>
                            <BottomNavigationItem
                                label="outros"
                                icon={outro}
                            />
                            <BottomNavigationItem
                                label="2"
                                icon={outro}
                            />
                        </BottomNavigation>
                    </Paper>
                </div>
            </BrowserRouter>
        );
    }
}

const mapStateToProps = ({ categories }) => ({
    categories
})

const mapDispatchToProps = (dispatch) => ({
    fetchCategories() {
        dispatch(fetchCategories())
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
