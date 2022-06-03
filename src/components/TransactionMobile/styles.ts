import styled from "styled-components";

export const Box = styled.article`
  width: 100%;
  max-width: 25rem;
  margin: auto;
  background-color: var(--white);
  padding: 1.2rem 1.5rem;
  border-radius: 0.5rem;

  h2{
    color: var(--title);
    font-size: 1rem;
    line-height: 1.5;
    margin-bottom: 0.5rem;
  }

  strong{
    font-size: 1.4rem;
    line-height: 1.5;
    margin-bottom: 0.5rem;
    &.-inflow{
      color: var(--green);
    }
    &.-withdrawal{
      color: var(--red);
    }
  }

  .category-date{
    display: flex;
    justify-content: space-between;
  }  

`;