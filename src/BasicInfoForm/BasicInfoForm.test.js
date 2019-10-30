import React from "react";
import { shallow } from "enzyme";
import BasicInfoForm from "./BasicInfoForm";
import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });

describe("BasicInfoForm", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(
      <BasicInfoForm
        personName=""
        setPersonName={jest.fn()}
        personAge=""
        setPersonAge={jest.fn()}
        personPhone=""
        setPersonPhone={jest.fn()}
      />
    );
  });

  it("should render without crashing", () => {
    expect(wrapper.length).toEqual(1);
  });

  it("should match the snapshot with three empty name, age, and phone inputs passed through", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
