import { render, within, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "../../../redux/store";
import ConfirmSubmit from "./ConfirmSubmit";

test(" it renders all forms components", () => {
  render(
    <Provider store={store}>
      <ConfirmSubmit />
    </Provider>
  );

  expect(screen.getByTestId("confirm").innerHTML).toContain(
    "Please verify your email address,"
  );
});
