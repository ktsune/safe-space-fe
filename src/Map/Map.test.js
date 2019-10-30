import React from "react";
import { shallow } from "enzyme";
import Map from "./Map";
import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });

describe("Map", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(
      <Map
      selectCenter={jest.fn()}
      />
    );
  });

  it("should render without crashing", () => {
    expect(wrapper.length).toEqual(1);
  });

  it("should match the snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });
});