import React, {Component} from 'react'
import {connect} from 'react-redux'

import Wrapper from './style'

import Header from './header'
import Options from './options'
import Table from './table'

import {get_table} from '../../actions/tables'

class Main extends Component {
    componentDidMount = () => {
        this.props.get_table('users')
    }
    render = () => 
        <Wrapper className='main'>
            <Header />
            <Options />
            {/* message */}
            <Table table={this.props.table}/>
        </Wrapper>
}

const mapStateToProps = state => {
    return {
        table: state.tables.table,
    }
}

export default connect(
    mapStateToProps,
    {get_table,
    })(Main)