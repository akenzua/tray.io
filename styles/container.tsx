import styled from "styled-components";

import { up } from "styled-breakpoints";

export const Container = styled.main`
  width: 100%;
  padding: 10px;
  display: flex;
  flex-direction: column;

  ${up("md")} {
    flex-direction: row;
    justify-content: center;
  }
`;
