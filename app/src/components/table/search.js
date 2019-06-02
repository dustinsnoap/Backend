import React, {Component} from 'react'

class Search extends Component {
    constructor() {
        super()
        this.state = {
            search: {field: 'id', value: ''},
            menus_active: false,
            menus: {insert: false, search: false},
        }
    }
    h_search_update = e => {
        const name = e.target.name
        const value = e.target.value
        this.setState(prevState => {return {search: {...prevState.search, [name]: value}}})
    }
    h_menu_click = e => {
        const target = e.currentTarget.name
        this.setState(prev => {
            return {
                menus_active: !prev.menus_active,
                menus: {...prev.menus, [target]: !prev.menus[target]}
            }
        })
    }
    h_menu_hover_in = e => this.menu_hover(e, true)
    h_menu_hover_out = e => this.menu_hover(e, false)
    menu_hover = (e, b) => {
        const target = e.currentTarget.name
        if(this.state.menus_active)
            this.setState(prev => {
                prev.menus[target] = b
                return {menus: prev.menus}
            })
    }
    filter = () => console.log(this.state)
    refresh = () => console.log('refreshing table...')
    render = () =>
        <div className='table-search'>
            <button name='insert'
                onMouseEnter={this.h_menu_hover_in}
                onMouseLeave={this.h_menu_hover_out}
                onClick={this.h_menu_click}>
                <span>Insert</span>
                <div className={this.state.menus.insert ? 'menu-vertical active' : 'menu-vertical'}>
                    <span className='menu-option'>Entry</span>
                    <span className='menu-option'>Field</span>
                    <span className='menu-option'>Table</span>
                </div>
            </button>
            <button name='search'
                onMouseEnter={this.h_menu_hover_in}
                onMouseLeave={this.h_menu_hover_out}
                onClick={this.h_menu_click}>
                <span>id</span>
                <div className={this.state.menus.insert ? 'menu-vertical active' : 'menu-vertical'}>
                    <span className='menu-option'>id</span>
                    <span className='menu-option'>name</span>
                    <span className='menu-option'>age</span>
                </div>
            </button>
            {/* <select name='field' onChange={this.h_search_update}>
                <option value='id'>id</option>
                <option value='name'>name</option>
                <option value='age'>age</option>
            </select> */}
            <input
                type='text'
                name='value'
                placeholder='value'
                onChange={this.h_search_update}
                value={this.state.value}/>
            <button onClick={this.filter}>Filter</button>
            <button onClick={this.refresh}>Refresh</button> {/*make an icon for this*/}
        </div>
}

export default Search