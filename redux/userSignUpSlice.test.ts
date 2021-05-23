import store from "./store";
import {
  userInfoActionCreator,
  privacyActionCreator,
  doneActionCreator,
} from "./userSignUpSlice";

test("Add user information", () => {
  //   before dispatch
  let state = store.getState().user;
  const initialUserState = state.info;
  expect(initialUserState.name).toBe("");
  expect(initialUserState.email).toBe("");
  expect(initialUserState.role).toBe("");
  expect(initialUserState.password).toBe("");

  //   dispatch
  store.dispatch(
    userInfoActionCreator({
      name: "john vogue",
      role: "Senior Frontend",
      email: "john.vogue@gmail.com",
      password: "Password123456",
    })
  );
  //   after dispatch
  state = store.getState().user;
  const newUserState = state.info;
  expect(newUserState.name).toBe("john vogue");
  expect(newUserState.role).toBe("Senior Frontend");
  expect(newUserState.email).toBe("john.vogue@gmail.com");
  expect(newUserState.password).toBe("Password123456");
});

test("Add user privacy preference", () => {
  let state = store.getState().user;
  //   before dispatch
  const initialUserPrivacy = state.privacy;
  expect(initialUserPrivacy.communication).toBe(false);
  expect(initialUserPrivacy.update).toBe(false);

  //   dispatch
  store.dispatch(
    privacyActionCreator({
      update: true,
      communication: true,
    })
  );

  //   after dispatch
  state = store.getState().user;
  const newUserPrivacy = state.privacy;
  expect(newUserPrivacy.communication).toBe(true);
  expect(newUserPrivacy.update).toBe(true);
});
