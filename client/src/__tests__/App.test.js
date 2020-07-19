import React from "react";
import App from "../App";
import { List } from "../components/list";
import { shallow } from "enzyme";

describe("<App /> component", () => {
  let AppWrapper;

  beforeAll(() => {
    AppWrapper = shallow(<App />);
  });

  test("render List component", () => {
    expect(AppWrapper.find(List)).toHaveLength(1);
  });

  test("test that add button is rendered", () => {
    expect(AppWrapper.find(".addButton")).toHaveLength(1);
  });
});
