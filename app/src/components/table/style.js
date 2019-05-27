import Styled from 'styled-components'

export default Styled.div`
    display: flex;
    flex-direction: column;

    .table-options {
        display: flex;
        align-items: center;
        background-color: #222;
        height: 35px;
        width: 100%;
        button, input, select {
            font-size: 1.8rem;
            height: 100%;
            padding: 0.5rem 1rem;
        }
        button, select {
            background-color: #222;
            color: #ccc;
            cursor: pointer;
        }
        input {
            background-color: #d9d9df;
            width: 100%;
            &:hover {background-color: #eef}
        }
    }
`