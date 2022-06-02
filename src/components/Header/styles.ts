import styled from "styled-components";

export const Container = styled.header`
  .content {
    display: flex;
    align-items: center;
    gap: 1.5rem;
    justify-content: space-between;
    background-color: var(--blue);
    padding: 2rem 6rem 8.25rem;
    .wrapper-logo{
      width: 12rem;
      height: 3rem;
      position: relative;
      &.-sm{
        width: 4rem;
      }
    }

    @media (max-width: 1024px) {
     &{
       padding-left: 2rem;
       padding-right: 2rem;
     } 
    }
    @media (max-width: 576px) {
     &{
       padding-left: 1rem;
       padding-right: 1rem;
     } 
    }

    .wrapper-buttons{
      display: flex;
      flex-direction: column;
      gap: 1rem;
      button{
        width: 100%;
      }
    }
  }
`;
