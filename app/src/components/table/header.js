import React from 'react'

const Header = () =>
    <header className='header'>
        <pre className='path'>http://localhost:3333/uid/users</pre>
        <div className='table-info'>
            <pre className='table-name'>Users</pre>
            <div className='statistics'>
                <pre className='stat'>Entries:</pre>
                <pre className='value'>3</pre>
                <pre className='stat'>Fields:</pre>
                <pre className='value'>3</pre>
                <pre className='stat'>Calls:</pre>
                <pre className='value'>376</pre>
            </div>
        </div>
    </header>

export default Header