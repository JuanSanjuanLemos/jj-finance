import styled from "styled-components";

export const Form = styled.form`


  legend{
    font-size: 1.5rem;
    font-weight: 600;
    color: var(--title);
    margin-bottom: 1rem;
  }

  .box-types{
    width: 100%;
    display: flex;
    justify-content: space-between;
    .wrapper-type{
      width: 48%;
      display: flex;
      justify-content: center;
      padding: 1rem;
      gap: 1rem;
      border: 1px solid #D7D7D7;
      color: var(--title);
      font-weight: 500;
      border-radius: 0.5rem;
      margin-top: 1rem;
      background-color: #fff;
      cursor: pointer;
      transition: 0.2s linear;
      &.inflow.-active{
        background-color: #12a4542e;
      }
      &.withdrawal.-active{
        background-color: #cd13132e;
      }
      .wrapper-icon{
        width: 1.5rem;
        height: 1.5rem;
        position: relative;
      }
    }
  }
  input{
    border-radius: 0.5rem;
    width: 100%;
    padding: 1.2rem;
    background-color: #E7E9EE;
    border: 1px solid #D7D7D7;
    margin-top: 1rem;
  }
  .input-submit{
    background-color: var(--dark-blue);
    border: none;
    color: var(--white);
    transition: 0.2s linear;
    cursor: pointer;
    :hover{
      filter: brightness(1.2);
    }
  }
`;