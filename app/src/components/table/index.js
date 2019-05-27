import React, {Component} from 'react'
import {connect} from 'react-redux'

import Wrapper from './style'

import Options from './options'

class Main extends Component {
    componentDidMount = () => {
        //db calls
    }
    render = () => 
        <Wrapper className='main'>
            {/* header */}
            <Options />
            {/* message */}
            {/* table */}
        </Wrapper>
}

const mapStateToProps = state => {
    return {}
}

export default connect(
    mapStateToProps,
    {})(Main)