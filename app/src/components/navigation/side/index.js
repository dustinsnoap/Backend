import React, {Component} from 'react'
import {connect} from 'react-redux'

import Wrapper from './style'

import {get_tables} from '../../../actions/tables'

class SideNav extends Component {
    //toggles 'open' class on tables node when it's header is clicked
    // h_open_table = e => e.currentTarget.nextSibling.classList.toggle('open')
    componentDidMount = () => {
        this.props.get_tables()
    }
    render = () =>
        <Wrapper>
            <header>
                <div className='heading'>
                    <pre className='ver'>ver. 0.001 beta</pre>
                </div>
                <div className='stats'>
                    <pre className='value'>0</pre>
                    <pre className='title'>Tables</pre>
                    <pre className='value'>0</pre>
                    <pre className='title'>Entries</pre>
                    {/* refresh btn */}
                </div>
                <div className='filter'>
                    <figure>o-</figure>
                    <input type='text' placeholder='filter'/>
                </div>
            </header>
            <div className='content'>
                <div className='tables'>
                    {this.props.tables.map(table => <pre className='table' key={table}>{table}</pre>)}
                </div>
            </div>
        </Wrapper>
}   

const mapStateToProps = state => {
    // console.log(state.tables.tables)
    return {
        tables: state.tables.tables,
    }
}

export default connect(
    mapStateToProps,
    {get_tables,
    })(SideNav)