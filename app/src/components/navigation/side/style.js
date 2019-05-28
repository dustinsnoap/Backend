import Styled from 'styled-components'

export default Styled.div`
    background-color: #222;
    color: #ccc;
    display: flex;
    flex-direction: column;
    height: 100%;
    padding: 1rem;
    header {
        display: grid;
        grid-auto-flow: row;
        grid-gap: 1rem;
        margin-bottom: 1rem;
        .heading {
            .host {font-size: 1.8rem}
            .ver {font-size: 1.6rem}
        }
        .stats {
            display: grid;
            font-size: 1.6rem;
            grid-auto-flow: column;
            .value {font-weight: 1000}
        }
        .filter {
            padding: 0;
            position: relative;
            transform: translateX(-1rem);
            width: calc(100% + 2rem);
            input {
                background-color: rgba(250,250,250,.75);
                padding: 0.5rem;
                text-indent: 30px;
                width: 100%;    
                &:hover {background-color: rgba(250,250,250,.85)}
            }
            figure {
                color: #000;
                font-size: 2rem;
                left: 15px;
                position: absolute;
            }
        }
    }
    .content {
        display: grid;
        grid-auto-flow: row;
        grid-gap: 1rem;
        height: fit-content;
        .tables {
            cursor: pointer;
            display: flex;
            flex-direction: column;
            transform: translateX(-1rem);
            width: calc(100% + 2rem);
            .table {
                background-color: transparent;
                color: #ccc;
                cursor: pointer;
                font-size: 1.6rem;
                height: 25px;
                text-align: left;
                width: 100%;
                &:hover {
                    background-color: #ccc;
                    color: #222;
                }
            }
        }
    }
`