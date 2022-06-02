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
`;