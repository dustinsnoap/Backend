import React, {Component} from 'react'

class Table extends Component {
    constructor() {
        super()
        this.state = {
            new_entry: {},
        }
    }
    render = () =>
        <div className='table'>
            <table>
                <thead className='header'>
                    <tr>
                        <th><button>Add Entry</button></th>
                        <th><button>id</button></th>
                        <th><button>name</button></th>
                        <th><button>age</button></th>
                    </tr>
                </thead>
                <tbody className='entries'>
                    <tr className='entry'>
                        <td>1</td>
                        <td>1</td>
                        <td>bob</td>
                        <td>50</td>
                    </tr>
                    <tr className='entry'>
                        <td>1</td>
                        <td>1</td>
                        <td>bob</td>
                        <td>50</td>
                    </tr>
                    <tr className='entry'>
                        <td>1</td>
                        <td>1</td>
                        <td>bob</td>
                        <td>50</td>
                    </tr>
                    <tr className='entry'>
                        <td>1</td>
                        <td>1</td>
                        <td>bob</td>
                        <td>50</td>
                    </tr>
                    <tr className='entry'>
                        <td>1</td>
                        <td>1</td>
                        <td>bob</td>
                        <td>50</td>
                    </tr>
                </tbody>
            </table>
            <button>Add Field</button>
        </div>
}

export default Table