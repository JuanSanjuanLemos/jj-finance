import styled from "styled-components";

export const Container = styled.tr`
  padding: 1.5rem;
  font-weight: 600;
  border-radius: 0.5rem;
  margin-top: 0.5rem;

  background-color: var(--white);
  td{
    padding: 1.5rem;
  }
  .title{
    color: var(--title);
    width: 40%;
  }
  .price{
    &.-inflow{
      color: var(--green);
    }
    &.-withdrawal{
      color: var(--red);
    }
  }
  .category, .date, .price{
    width: 20%;
  }
  .delete{
    button{
      background-color: var(--red);
      padding: 0.8rem;
      border-radius: 1.2rem;
      font-weight: bold;
      color: var(--white);
      transition: filter 0.2s linear;
      &:hover{
        filter: brightness(0.8);
      }
    }

  }
`;