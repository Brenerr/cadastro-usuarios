import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    :focus {
        outline: 0;
        box-shadow: 0 0 0 2px ${(props) => props.theme['primary-dark']}
    }

    body {
        background: ${(props) => props.theme['base-background']};
        color: ${(props) => props.theme['base-text']};
        -webkit-font-smoothing: antialiased; 
    }

    body, input, textarea, button {
        font-family: 'Roboto', sans-serif;
        font-weight: 400;
        font-size: 1rem;
    }

    input {
        padding: 0.75rem 0;
        color: ${(props) => props.theme.input.DEFAULT};
        border-bottom: 1px solid ${(props) => props.theme.input.border};
        outline: none;

        &:focus {
            color: ${(props) => props.theme.input.focus};
            box-shadow: none;
        }

        &:invalid {
            color: ${(props) => props.theme.input.invalid};
            border-bottom: 1px solid ${(props) => props.theme.input.invalid};
        }
    }
`
