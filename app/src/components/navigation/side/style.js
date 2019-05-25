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
        font-size: 1.6rem;
        grid-auto-flow: row;
        grid-gap: 1rem;
        height: fit-content;
        .database {
            display: grid;
            grid-auto-flow: row;
            grid-gap: 0.5rem;
            overflow: hidden;
            header {
                cursor: pointer;
                display: flex;
                margin: 0;
            }
            .tables {
                cursor: pointer;
                display: grid;
                grid-auto-flow: row;
                grid-gap: 0.5rem;
                height: fit-content;
                max-height: 0;
                transition: max-height 420ms ease-in-out;
                &.open {max-height: 200px}
                .table {text-indent: 40px}
            }
        }
    }
`