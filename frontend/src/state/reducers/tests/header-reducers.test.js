import store from "../../index";
import { login } from "../../actions/header-actions";

describe("header-actions unit tests", () => {
  const { dispatch, getState } = store;
  it("should log a user in.", () => {
    let logged_in;
    logged_in = getState().authenticationStatus.logged_in;
    expect(logged_in).toBe(false);
    login()(dispatch, getState);
    logged_in = getState().authenticationStatus.logged_in;
    expect(logged_in).toBe(true);
  });
});
