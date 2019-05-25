import Styled from 'styled-components'

export default Styled.div`
    background-color: #222;
    color: #ccc;
    height: 100%;
    padding: 1rem;

    header {
        display: grid;
        grid-auto-flow: row;
        grid-gap: 1rem;
        .heading {
            .host {
                font-size: 1.8rem;
            }
            .ver {
                font-size: 1.6rem;
            }
        }
        .stats {
            display: grid;
            grid-auto-flow: column;
            font-size: 1.6rem;
            .value {font-weight: 1000}
        }
    }
`