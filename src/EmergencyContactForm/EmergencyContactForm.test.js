import React from "react";
import { shallow } from "enzyme";
import EmergencyContactForm from "./EmergencyContactForm";
import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });

describe("EmergencyContactForm", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(
      <EmergencyContactForm
        emergencyName=""
        setEmergencyName={jest.fn()}
        emergencyPhone=""
        setEmergencyPhone={jest.fn()}
        emergencyRelationship=""
        setEmergencyRelationship={jest.fn()}
        sendMessage={jest.fn()}
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