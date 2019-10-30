import React from "react";
import { mount } from "enzyme";
import CheckInForm from "./CheckInForm";
import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });

describe("CheckInForm", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(
      <CheckInForm
      reliefCenter={{        
        name: "Turing Relief Center",
        addressPrint: "1331 17th St Denver CO 80202",
        lat: "39.7508132",
        lng: "-104.9967997",
        phone: "5555555555",
        website: "www.relief-center.com",
        id: "1"
      }}
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