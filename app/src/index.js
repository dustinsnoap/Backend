import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import {ThemeProvider} from 'styled-components'

import App from './components/app'
import store from './config/store'
import GlobalStyle from './design/global_style'
import light from './design/theme/light'

const root = document.getElementById('root')
ReactDOM.render(
    <ThemeProvider theme={light}>
        <Provider store={store}>
            <GlobalStyle/>
            <App/>
        </Provider>
    </ThemeProvider>,
    root
)