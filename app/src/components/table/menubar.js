import React, {Component} from 'react'

import Menu from './menu'



class MenuBar extends Component {
    constructor() {
        super()
        this.state = {
            active_menu: '0',
            menus: [
                {
                    id: 1,
                    name: 'Insert',
                    options: [
                        {name: 'Entry', hotkey: 'Ctrl+E', func: () => console.log('new entry')},
                        {name: 'Field', hotkey: 'Ctrl+F', func: () => console.log('new field')},
                        {name: 'Table', hotkey: 'Ctrl+T', func: () => console.log('new table')},
                    ]
                },
                {
                    id: 2,
                    name: 'menu2',
                    options: [
                        {name: 'Entry', hotkey: '', func: () => console.log('new entry')},
                        {name: 'Field', hotkey: '', func: () => console.log('new field')},
                        {name: 'Table', hotkey: '', func: () => console.log('new table')},
                    ]
                },
            ]
        }
    }
    menu_toggle = e => {
        //opens and closes menu by changing 'active_menu' in state
        const name = e.currentTarget.getAttribute('name')
        this.setState(prev => {
            prev.active_menu === name
            ? prev.active_menu = ''
            : prev.active_menu = name
            return {active_menu: prev.active_menu}
        })
    }
    render = () =>
        <div className='menu-bar'>
            {this.state.menus.map(menu =>
                <Menu
                    active={this.state.active_menu === menu.name}
                    key={menu.id}
                    menu={menu}
                    toggle={this.menu_toggle}
                />
            )}
        </div>
}

export default MenuBar