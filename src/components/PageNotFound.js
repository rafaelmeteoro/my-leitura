import React from 'react'
import AppBar from 'material-ui/AppBar'
import { Card, CardTitle } from 'material-ui'

const PageNotFound = () => (
    <div>
        <AppBar
            title='MyLeitura'
            showMenuIconButton={false}
        />
        <Card>
            <CardTitle
                title={'Page Not Found'}
            />
        </Card>
    </div>
)

export default PageNotFound
