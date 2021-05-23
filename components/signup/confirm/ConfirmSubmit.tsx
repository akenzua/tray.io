import { Button, ButtonWrapper, Form } from "../../../styles/form";
import { useSelector } from "react-redux";
import { State } from "../../../type";
import React, { FormEvent, useEffect, useState } from "react";

const ConfirmSubmit = () => {
  const user = useSelector((state: State) => state.user);
  const [button, setButton] = useState<boolean>(true);
  const { info } = user;

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(user);
  };

  useEffect(() => {
    if (info.email !== "") {
      setButton(false);
    }
  }, []);
  return (
    <Form onSubmit={handleSubmit} data-testid="confirm">
      Please verify your email address, you should have recieved an email from
      already
      <ButtonWrapper>
        <Button disabled={button}>Submit</Button>
      </ButtonWrapper>
    </Form>
  );
};
export default ConfirmSubmit;
