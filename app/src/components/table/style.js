import Styled from 'styled-components'

export default Styled.div`
    display: flex;
    flex-direction: column;
    // display: grid;
    // grid-auto-flow: row;
    // grid-template-areas: "header header" "search search" "table options";
    // grid-template-columns: 1fr auto;
    height: fit-content;

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
    .menu-bar {
        align-items: center;
        display: grid;
        grid-auto-flow: column;
        grid-gap: 1rem;
        height: 25px;
        padding: 0 1rem;
        width: fit-content;
        .menu {
            .menu-name {font-size: 1.8rem}
            .menu-options {
                background-color: #fff;
                box-shadow: 0 0 2px 0px rgba(0,0,0,.42);
                display: flex;
                flex-direction: column;
                padding: 1rem 0;
                position: absolute;
                .option {
                    align-items: center;
                    cursor: pointer;
                    color: #000;
                    display: flex;
                    font-size: 1.6rem;
                    height: 25px;
                    justify-content: space-between;
                    padding: 0.75rem 1.25rem;
                    &:hover {background-color: #ccc}
                    .option-name {min-width: 75px}
                    .option-hotkey {
                        color: #666;
                        font-size: 1.4rem;
                        font-weight: 700;
                    }
                }
            }
        }
    }
    .table-search {
        align-items: center;
        background-color: #222;
        display: flex;
        grid-area: search;
        height: 35px;
        width: 100%;
        .menu-vertical {
            background-color: #222;
            display: none;
            grid-auto-flow: row;
            grid-gap: 0.5rem;
            position: absolute;
            &.active {display: grid}
            .menu-option {
                text-align: left;
                padding: 0.5rem 1rem;
                &:hover{
                    background-color: #ccc;
                    color: #222;
                }
            }
        }
    }
    .table {
        display: flex;
        grid-area: table;
        table {
            width: 100%;
            font-size: 1.6rem;
            .table-header {
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