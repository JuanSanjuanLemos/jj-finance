import styled from "styled-components";

export const Container = styled.section`
  padding: 0 1rem;
  .header {
    display: flex;
    justify-content: space-between;
    h1 {
      font-size: 1.4rem;
      color: var(--dark-blue);
    }
    .amount-items {
      color: var(--text);
    }
    margin-bottom: 1rem;
  }

  .wrapper-list {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
  .loader{
    position: relative;
    height: 3rem;
    width: 3rem;
    margin: auto;
  }
  .not-transactions{
    text-align: center;
    font-size: 2rem;
  }
  @media (min-width: 576px) {
    &{
      display: none;
    }
  }
`;
