import React, {Component} from 'react'
import {connect} from 'react-redux'

import Wrapper from './style'

import {get_table, get_tables} from '../../../actions/tables'

class SideNav extends Component {
    //toggles 'open' class on tables node when it's header is clicked
    // h_open_table = e => e.currentTarget.nextSibling.classList.toggle('open')
    componentDidMount = () => this.props.get_tables()
    h_get_table = e => this.props.get_table(e.target.name)
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
                    {this.props.tables.map(table =>
                        <button
                            className='table'
                            name={table}
                            onClick={this.h_get_table}
                            key={table}
                        >
                            {table}
                        </button>
                    )}
                </div>
            </div>
        </Wrapper>
}   

const mapStateToProps = state => {return {tables: state.tables.tables}}

export default connect(
    mapStateToProps,{
    get_table,
    get_tables,
    })(SideNav)