import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "../../../redux/store";
import UserForm from "./UserForm";

const renderForm = render(
  <Provider store={store}>
    <UserForm />
  </Provider>
);

test(" it renders all forms components", () => {
  const { getByLabelText } = renderForm;
  const name = getByLabelText("name");
  const role = getByLabelText("role");
  const email = getByLabelText("email");
  const password = getByLabelText("password");

  expect(name).toBeTruthy;
  expect(role).toBeTruthy;
  expect(email).toBeTruthy;
  expect(password).toBeTruthy;
});
