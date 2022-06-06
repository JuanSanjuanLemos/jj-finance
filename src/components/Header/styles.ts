import styled from "styled-components";

export const Container = styled.header`
  .content {
    display: flex;
    max-width: 1440px
    align-items: center;
    gap: 1.5rem;
    justify-content: space-between;
    background-color: var(--blue);
    padding: 2rem 1rem 8.25rem;
    .wrapper-logo{
      width: 12rem;
      height: 3rem;
      position: relative;
      &.-sm{
        width: 4rem;
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
