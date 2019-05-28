import React, {Component} from 'react'

class Options extends Component {
    constructor() {
        super()
        this.state = {
            field: 'id',
            value: '',
        }
    }
    h_update = e => this.setState({[e.target.name]: e.target.value})
    filter = () => console.log(this.state)
    refresh = () => console.log('refreshing table...')
    render = () =>
        <div className='table-options'>
            <select name='field' onChange={this.h_update}>
                <option value='id'>id</option>
                <option value='name'>name</option>
                <option value='age'>age</option>
            </select>
            <input
                type='text'
                name='value'
                placeholder='value'
                onChange={this.h_update}
                value={this.state.value}/>
            <button onClick={this.filter}>Filter</button>
            <button onClick={this.refresh}>Refresh</button> {/*make an icon for this*/}
        </div>
}

export default Options