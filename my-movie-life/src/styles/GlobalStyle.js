import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyles = createGlobalStyle`
    ${reset}
    @font-face {
        font-family: Pretendard;
        src: url('../fonts/Pretendard-Regular.woff');
    }
    body {
        font-family: 'Pretendard';
        font-size: 62.5%;
    }
    * {
        box-sizing: border-box;
    }
    a {
        text-decoration: none;
    }

    input:focus {
        outline: 0;
    }

    button, svg {
        cursor: pointer;
    }
`;

export default GlobalStyles;
