import React, { FormEvent, useEffect, useState, useCallback } from "react";
import {
  Form,
  FormGroup,
  Input,
  Label,
  Button,
  ButtonWrapper,
  ErrorContainer,
} from "../../../styles/form";
import validator from "validator";
import { State, Info } from "../../../type";
import { useSelector, useDispatch } from "react-redux";
import { userInfoActionCreator } from "../../../redux/userSignUpSlice";
import { useRouter } from "next/router";
import { debounce } from "lodash";

const UserForm = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const { info } = useSelector((state: State) => state.user);

  const defaultUser: Info = {
    name: "",
    role: "",
    email: "",
    password: "",
  };
  const currentUser =
    info.name === "" && info.email === "" ? defaultUser : info;

  const [localUser, setLocalUser] = useState<Info>(currentUser);
  const [nameValid, setNameValid] = useState<string | null>("");
  const [emailValid, setEmailValid] = useState<string | null>("");
  const [passwordValid, setPasswordValid] = useState<string | null>("");
  const [button, setButton] = useState<boolean>(true);
  const { name, email, password } = localUser;

  const handleChange = <P extends keyof Info>(prop: P, value: Info[P]) => {
    setLocalUser({ ...localUser, [prop]: value });
    if (prop === "name") {
      delayedName();
    }
    if (prop === "email") {
      delayedEmail();
    }
    if (prop === "password") {
      delayedPassword();
    }
  };

  // validations
  const validateName = () => {
    name === ""
      ? setNameValid("Please fill your name in the box")
      : setNameValid(null);
  };

  const validateEmail = () => {
    validator.isEmail(localUser.email) === false || validator.isEmpty(email)
      ? setEmailValid("Please enter a valid email")
      : setEmailValid(null);
  };

  const validatePassword = () => {
    validator.isStrongPassword(localUser.password, {
      minLength: 10,
      minNumbers: 1,
      minUppercase: 1,
      minLowercase: 1,
    }) === false || validator.isEmpty(password)
      ? setPasswordValid(
          "Your password must be more tha 9 characters, with atleast one number, one uppercase and one lowercase charater"
        )
      : setPasswordValid(null);
  };

  // debounce functions for validations
  const delayedName = useCallback(debounce(validateName, 3000), [name]);
  const delayedEmail = useCallback(debounce(validateEmail, 3000), [email]);
  const delayedPassword = useCallback(debounce(validatePassword, 3000), [
    password,
  ]);

  // set disabled to false after validation
  useEffect(() => {
    if (nameValid === null && emailValid === null && passwordValid === null) {
      setButton(false);
    }
  });

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(userInfoActionCreator(localUser));
    router.push("/signup/privacy");
  };

  return (
    <Form onSubmit={handleSubmit} data-testid="form">
      <FormGroup>
        <Label>Name:</Label>
        <Input
          type="text"
          name="name"
          value={localUser.name}
          onChange={(e) => {
            handleChange("name", e.target.value);
          }}
          required
          aria-label="name"
        />

        {nameValid === null ? "" : <ErrorContainer>{nameValid}</ErrorContainer>}
      </FormGroup>
      <FormGroup>
        <Label>Role:</Label>
        <Input
          type="text"
          name="role"
          value={localUser.role}
          onChange={(e) => {
            handleChange("role", e.target.value);
          }}
          aria-label="role"
        />
      </FormGroup>
      <FormGroup>
        <Label> Email:</Label>
        <Input
          type="email"
          name="email"
          value={localUser.email}
          onChange={(e) => {
            handleChange("email", e.target.value);
          }}
          required
          aria-label="email"
        />
        {emailValid === null ? (
          ""
        ) : (
          <ErrorContainer>{emailValid}</ErrorContainer>
        )}
      </FormGroup>
      <FormGroup>
        <Label>Password:</Label>
        <Input
          type="password"
          name="password"
          value={localUser.password}
          onChange={(e) => {
            handleChange("password", e.target.value);
          }}
          required
          aria-label="password"
        />
        {passwordValid === null ? (
          ""
        ) : (
          <ErrorContainer>{passwordValid}</ErrorContainer>
        )}
      </FormGroup>
      <ButtonWrapper>
        <Button type="submit" disabled={button}>
          Next
        </Button>
      </ButtonWrapper>
    </Form>
  );
};
export default UserForm;
