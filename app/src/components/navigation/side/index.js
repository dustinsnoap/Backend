import React from 'react'
// import {Link} from 'react-router-dom'
import Wrapper from './style'

const SideNav = () =>
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
            {/* filter */}
        </header>
    </Wrapper>

export default SideNav