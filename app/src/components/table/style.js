import Styled from 'styled-components'

export default Styled.div`
    display: flex;
    flex-direction: column;

    // General Styles
    button, input, select {
        font-size: 1.8rem;
        height: 100%;
        padding: 0.5rem 1rem;
    }
    button, select {
        background-color: #222;
        color: #ccc;
        cursor: pointer;
        &:hover {color: #fff}
    }
    input {
        background-color: #d9d9df;
        width: 100%;
        &:hover {background-color: #eef}
    }

    // Specific Styles
    .table-options {
        align-items: center;
        background-color: #222;
        display: flex;
        height: 35px;
        width: 100%;
    }
    .table {
        display: flex;
        table {
            font-size: 1.6rem;

            .header {
                background-color: #222;
                color: #ccc;
                cursor: pointer;
                th {
                    border-color: #666;
                    border-width: 0 1px;
                    border-style: solid;
                    &:first-of-type {border-left: 0}
                    &:last-of-type {border-right: 0}
                }
            }
            .entries {
                .entry {
                    &:hover {
                        background-color: #ccc;
                        td {border-color: #888}
                    }
                    td {
                        border: 1px solid #ccc;
                        padding: 1rem;
                        &:first-of-type {border-left: 0}
                        &:last-of-type {border-right: 0}
                    }
                    &:first-of-type {td {border-top: 0}}
                    &:last-of-type {td {border-bottom: 0}
                    }
                }
            }
        }
    }
`