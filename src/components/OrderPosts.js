import React, { Component } from 'react'
import { Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle } from 'material-ui/Toolbar'
import DropDownMenu from 'material-ui/DropDownMenu'
import MenuItem from 'material-ui/MenuItem'
import { ORDER_SCORE, ORDER_TIME } from '../utils/helpers'
import { connect } from 'react-redux'
import { sortPosts } from '../actions'

class OrderPosts extends Component {

    handleOrder = (event, index, value) => {
        this.props.sortPosts(value)
    }

    render() {

        const { postsOrder } = this.props

        return(
            <Toolbar>
                <ToolbarGroup style={{margin: 'auto'}}>
                    <ToolbarTitle text='Order By' />
                    <ToolbarSeparator />
                    <DropDownMenu value={postsOrder} onChange={this.handleOrder}>
                        <MenuItem value={ORDER_SCORE} primaryText='Score' />
                        <MenuItem value={ORDER_TIME} primaryText='Time' />
                    </DropDownMenu>
                </ToolbarGroup>
            </Toolbar>
        )
    }
}

const mapStateToProps = ({ postsOrder }) => ({
    postsOrder
})

const mapDispatchToProps = (dispatch) => ({
    sortPosts(order) {
        dispatch(sortPosts(order))
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(OrderPosts)
