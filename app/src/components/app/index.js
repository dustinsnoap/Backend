import React from 'react'
import {BrowserRouter as Router} from 'react-router-dom'

import Wrapper from './style'
import SideNav from '../navigation/side'

const App = () =>
    <Wrapper className='app'>
        <Router>
            <SideNav />
            <h1>Main App</h1>
            {/* footer? */}
        </Router>
    </Wrapper>

export default App