import styled from "styled-components";

export const Container = styled.div`
  width: 90%;
  margin: auto;
  overflow-x: scroll;
  transform: translateY(-50%);
  .wrapper-cards{
    margin: auto;
    width: 70rem;
    display: flex;
    justify-content: space-between;
    @media (max-width: 576px) {
      &{
        width: auto;
        justify-content: initial;
        gap: 1.5rem;
      }
    }
  }
`;
