import React from 'react'

const Menu = props =>
    <div name={props.menu.name} className='menu' onClick={props.toggle}>
        <span className='menu-name'>{props.menu.name}</span>
        <div className='menu-options'>
            {props.active && props.menu.options.map((option, idx) =>
                <div
                    className='option'
                    name={option.name} 
                    onClick={option.func} 
                    key={idx}
                >
                    <span className='option-name'>{option.name}</span>
                    <span className='option-hotkey'>{option.hotkey}</span>
                </div>
            )}
        </div>
    </div>

export default Menu