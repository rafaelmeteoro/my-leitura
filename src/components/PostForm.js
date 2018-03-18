import React, { Component } from 'react'
import { connect } from 'react-redux'
import { capitalize } from '../utils/helpers'
import AppBar from 'material-ui/AppBar'
import { TextField, SelectField, Card, MenuItem } from 'material-ui'
import RaisedButton from 'material-ui/RaisedButton'

class PostForm extends Component {

    render() {

        const { categories } = this.props
        console.log(categories)

        return (
            <div>
                <AppBar
                    title='MyLeitura'
                    showMenuIconButton={false}
                />

                <Card style={{ padding: 20, marginLeft: 20, marginRight: 20, marginTop: 20, marginBottom: 20}}>
                    <TextField
                        id='title'
                        floatingLabelText='Title'
                    />
                    <br />
                    <TextField
                        id='body'
                        floatingLabelText='Body'
                    />
                    <br />
                    <TextField
                        id='author'
                        floatingLabelText='Author'
                    />
                    <br />
                    {categories && categories.length > 0 && (
                        <SelectField
                            floatingLabelText='Category'
                        >
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
                    />
                </Card>

            </div>
        )
    }
}

const mapStateToProps = ({ categories }) => ({
    categories
})

export default connect(mapStateToProps, null)(PostForm);
