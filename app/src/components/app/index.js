import React from 'react'
import {BrowserRouter as Router} from 'react-router-dom'

import Wrapper from './style'
import SideNav from '../navigation/side'
import Main from '../table'

const App = () =>
    <Wrapper className='app'>
        <Router>
            <SideNav />
            <Main />
            {/* footer? */}
        </Router>
    </Wrapper>

export default App