import styled, { css } from "styled-components";

import { up } from "styled-breakpoints";

export const Form = styled.form`
  border: 1px solid #6b6b6b;
  padding: 20px;
  border-bottom-left-radius: 7px;
  border-bottom-right-radius: 7px;
`;

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 15px auto;
`;

export const Label = styled.label`
  margin-bottom: 20px;
`;

export const Input = styled.input`
  width: 100%;
  border-radius: 7px;
  border: 1px solid #6b6b6b;
  height: 40px;
  box-sizing: border-box;
  padding: 0.5rem;
  font-size: 18px;
`;
export const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 25px auto;

  ${up("md")} {
    flex-direction: row;
    justify-content: flex-end;
  }
`;

interface Disabled {
  disabled: boolean;
}
export const Button = styled.button<Disabled>`
  padding: 10px 20px;
  background: #327a2d;
  border: 1px solid #327a2d;
  color: #fff;
  font-weight: 700;
  font-size: 15px;
  border-radius: 5px;
  cursor: pointer;
  ${({ disabled }) =>
    disabled &&
    css`
      background: #e2e9f1;
      border: 1px solid #e2e9f1;
      a {
        color: white;
        text-decoration: none;
      }
    `}
`;

export const ErrorContainer = styled.div`
  color: red;
  padding-top: 20px;

  ${up("md")} {
    margin-top: 10px;
    width: 500px;
  }
`;
