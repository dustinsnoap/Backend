import {createGlobalStyle} from 'styled-components'
import {reset} from 'styled-reset'

const GlobalStyle = createGlobalStyle`
    ${reset}
    //fonts
    @import url('https://fonts.googleapis.com/css?family=Montserrat&display=swap');

    * {
        box-sizing: border-box;
    }
    html {
        font-size: 62.5%;
        height: 100%;
        width: 100%;
    }
    body {
        font-family: 'Montserrat', sans-serif;
        height: 100%;
        width: 100%;
    }
    #root {
        height: 100%;
    }
    button, input, select {
        border: 0;
        outline: none;
    }
`
export default GlobalStyle