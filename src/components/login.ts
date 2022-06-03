import styled from "styled-components";

export const Container = styled.main`
  background-color: #7897c7;
  height: 100vh;
  overflow: hidden;
  .content{
    max-width: 1440px;
    height: 100vh;
    
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 4rem 1rem;
    .login{
      background-color: var(--dark-blue);
      padding: 1.5rem;
      border-radius: 1rem;
      box-shadow: 0 0 0.5rem var(--dark-blue);
      .logo{
        width: 18rem;
        height: 4.5rem;
        position: relative;
        margin: auto;
      }
      color: var(--white);
      h1{
        margin-top: 4rem;
        font-size: 2rem;
      }
      p{
        font-size: 1.2rem;
        margin-top: 1rem;
        span{
          font-size: 2rem;
          vertical-align: middle;
        }
      }
      button{
        background-color: var(--white);
        padding: 0.5rem 1rem;
        width: 100%;
        border-radius: 2rem;
        color: var(--dark-blue);
        font-weight: 900;
        font-size: 1.2rem;
        transition: filter linear 0.2s;
        margin: 4rem auto 0;
        &:hover{
          filter: brightness(0.8);
        }
        span{
          font-size: 2rem;
          vertical-align: middle;
          margin-right: 0.5rem;
        }
      }
    }
  }
`;