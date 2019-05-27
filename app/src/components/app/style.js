import Styled from 'styled-components'

export default Styled.div`
    display: grid;
    grid-template-columns: auto 1fr;
    height: 100%;

    .main {
        width: fit-content;
        min-width: 800px;
    }
`