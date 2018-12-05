import store from "../../../index";
import { login } from "../../actions/header-actions";

describe("header-actions unit tests", () => {
  it("a call to the login function action creator should return a function.", () => {
    expect(typeof login()).toBe("function");
  });
});

describe("header-actions integration tests", () => {
  it("should log a user in.", () => {
    //expect(store.getState()).toBe("One");
  });
});
