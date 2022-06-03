import styled from "styled-components";

export const Container = styled.section`
  padding: 0 1rem;

  .wrapper {
    overflow-x: scroll;

    table {
      width: 1120px;
      margin: 0 auto 2rem;
      border-spacing: 0 0.5rem;
      text-align: left;
      thead {
        tr {
          th {
            padding: 2rem 1.5rem;
          }
        }
      }
    }
    .loader {
      position: relative;
      height: 3rem;
      width: 3rem;
      margin: auto;
    }
    .not-transactions {
      text-align: center;
      font-size: 2rem;
    }
  }
`;
