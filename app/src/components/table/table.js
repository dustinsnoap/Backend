import React, {Component} from 'react'

class Table extends Component {
    constructor() {
        super()
        this.state = {
            new_entry: {},
            table: [],
        }
    }
    componentDidMount = () => {
        // console.log(this.props)
    }
    h_sort = e => console.log('sorting by', e.target.name, '...')
    h_add_entry = () => console.log('adding new entry...')
    h_add_field = () => console.log('adding new field...')
    render = () =>
        <div className='table'>
            <table>
                <thead className='table-header'>
                    <tr>
                        <th><button onClick={this.h_add_entry}>Add Entry</button></th>
                        {this.props.table.length
                            ?   Object.keys(this.props.table[0]).map(key =>
                                    <th key={key}>
                                        <button name={key} onClick={this.h_sort}>{key}</button>
                                    </th>
                                )
                            :   null
                        }
                    </tr>
                </thead>
                <tbody className='entries'>
                    {this.props.table.map((entry, idx) =>
                        <tr className='entry' key={idx}>
                            <td>{idx + 1}</td>
                            {Object.keys(entry).map(key =>
                                <td key={key}>{entry[key]}</td>    
                            )}
                        </tr>
                    )}
                </tbody>
            </table>
            <button onClick={this.h_add_field}>Add Field</button>
        </div>
}

export default Table