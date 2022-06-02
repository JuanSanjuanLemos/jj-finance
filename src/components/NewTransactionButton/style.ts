import styled from "styled-components";

export const Container = styled.button`
  padding: 0.675rem 1rem;
  background-color: var(--dark-blue);
  border-radius: 0.3125rem;
  font-weight: 600;
  line-height: 1.5;
  color: var(--white);
  transition: 0.2s;
  &:hover{
    filter: brightness(1.2);
  }
`;
