import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root{
    --green: #11AC04;
    --blue: #7897c7;
    --dark-blue: #155188;
    --red: #E52E4D;
    --background: #F0F2F5;
    --title: #363F5F;
    --text: #969CB2;
    --white: #fff;
  }
  *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html{
        scroll-behavior: smooth;
    }

    @media(max-width: 1080px){
        html{
            font-size: 93.75%;
        }
    }
    @media(max-width: 720px){
        html{
            font-size: 87.5%;
        }
    }
    body{
        background-color: var(--background);
        color: var(--text);
        .main-modal{
            width: 480px;
            max-width: 95%;
            height: 35rem;
            position: relative;
            left: 50%;
            top: 50%;
            transform: translate(-50%,-50%);
            background-color: #F0F2F5;
            padding: 4rem 3rem;
            border-radius: 0.5rem;
        }
    }

    body, input, textarea, button{
        font: 400 1rem "Inter", sans-serif;
    }

    button{
        cursor: pointer;
        border: none;
    }
    a{
        text-decoration: none;
        color: inherit;
    }
    .content{
      max-width: 1920px;
      margin: auto;
    }
`;
