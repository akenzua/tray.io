import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "../../../redux/store";
import PrivacyChecks from "./PrivacyChecks";

const renderForm = render(
  <Provider store={store}>
    <PrivacyChecks />
  </Provider>
);

test(" it renders all forms components", () => {
  const { getByLabelText } = renderForm;
  const update = getByLabelText("update");
  const communication = getByLabelText("communication");

  expect(update).toBeTruthy;
  expect(communication).toBeTruthy;
});
