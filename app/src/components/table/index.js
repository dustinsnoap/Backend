import React, {Component} from 'react'
import {connect} from 'react-redux'

import Wrapper from './style'

import Options from './options'
import Table from './table'

class Main extends Component {
    componentDidMount = () => {
        //db calls
    }
    render = () => 
        <Wrapper className='main'>
            {/* header */}
            <Options />
            {/* message */}
            <Table />
        </Wrapper>
}

const mapStateToProps = state => {
    return {}
}

export default connect(
    mapStateToProps,
    {})(Main)