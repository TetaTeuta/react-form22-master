import React from "react";
import { shallow } from "enzyme";
import { List } from "../components/list";

describe("<List /> component", () => {
  let ListWrapper;

  beforeAll(() => {
    ListWrapper = shallow(<List />);
  });

  test("render names", () => {
    expect(ListWrapper.find(List)).toHaveLength(0);
  });

  test("test that name wrapping div is rendered", () => {
    expect(ListWrapper.find(".names__container")).toHaveLength(1);
  });

  test("test that X button is rendered", () => {
    expect(ListWrapper.find(".xbutton")).toHaveLength(1);
  });
});
