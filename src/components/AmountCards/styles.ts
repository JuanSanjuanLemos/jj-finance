import styled from "styled-components";

export const Container = styled.article`
  width: 20rem;
  height: 8.5rem;
  padding: 1.5rem 2rem;
  border-radius: 0.5rem;
  background-color: var(--white);
  color: var(--title);
  .wrapper-type{
    display: flex;
    margin-bottom: 0.5rem;
    h3{
      line-height: 1.5rem;
      font-size: 1rem;
    }
    .img{
    margin-left: auto;
    position: relative;
    width: 2rem;
    height: 2rem;
  }
  }
  strong{
    font-size: 2.25rem;
    font-weight: 500;
  }

  &.-balance{
    background-color: var(--dark-blue);
    color: var(--white);
  }
`;