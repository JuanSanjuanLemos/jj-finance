import styled from "styled-components";

export const Container = styled.button`
  padding: 0.675rem 1rem;
  background-color: var(--white);
  border-radius: 0.3125rem;
  font-weight: 600;
  line-height: 1.5;
  color: var(--dark-blue);
  transition: 0.2s;
  &:hover{
    filter: brightness(0.8);
  }
`;
