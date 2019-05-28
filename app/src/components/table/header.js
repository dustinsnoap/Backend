import React from 'react'

const Header = props =>
    <header className='header'>
        <pre className='path'>http://localhost:3333/uid/users</pre>
        <div className='table-info'>
            <pre className='table-name'>Users</pre>
            <div className='statistics'>
                <pre className='stat'>Entries:</pre>
                <pre className='value'>{props.table.length ? props.table.length : 0}</pre>
                <pre className='stat'>Fields:</pre>
                <pre className='value'>{props.table.length ? Object.keys(props.table[0]).length : 0}</pre>
            </div>
        </div>
    </header>

export default Header