import React, {Component} from 'react'
// import {Link} from 'react-router-dom'
import Wrapper from './style'

class SideNav extends Component {
    //toggles 'open' class on tables node when it's header is clicked
    h_open_table = e => e.currentTarget.nextSibling.classList.toggle('open')
    render = () =>
        <Wrapper>
            <header>
                <div className='heading'>
                    <pre className='host'>http://localhost:3333</pre>
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
                <div className='database'>
                    <header onClick={this.h_open_table}>
                        <figure>{'{=}'}</figure>
                        <pre>dbName</pre>
                    </header>
                    <div className='tables'>
                        <pre className='table'>tableName</pre>
                        <pre className='table'>tableName</pre>
                        <pre className='table'>tableName</pre>
                    </div>
                </div>
                <div className='database'>
                    <header onClick={this.h_open_table}>
                        <figure>{'{=}'}</figure>
                        <pre>dbName</pre>
                    </header>
                    <div className='tables'>
                        <pre className='table'>tableName</pre>
                        <pre className='table'>tableName</pre>
                        <pre className='table'>tableName</pre>
                    </div>
                </div>
            </div>
        </Wrapper>
}   

export default SideNav