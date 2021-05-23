import styled, { css } from "styled-components";

import { up, down, between, only } from "styled-breakpoints";

export const FormNav = styled.nav`
  border: 1px solid #6b6b6b;
  display: flex;
  flex-direction: row;
  padding: 0;
  height: auto;
  border-top-left-radius: 7px;
  border-top-right-radius: 7px;
  border-bottom: none;
`;

interface Current {
  current: boolean;
}
export const NavList = styled.ul`
  width: 600px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  height: 100%;
`;

export const NavItem = styled.li<Current>`
  margin: 0;
  list-style: none;
  padding: 10px 20px;
  width: 100%;
  height: 100%;
  text-align: center;
  a {
    text-decoration: none;
    color: #000;
  }

  ${({ current }) =>
    current &&
    css`
      background: #0e91c7;
      a {
        color: white;
        text-decoration: none;
      }
    `}
`;
