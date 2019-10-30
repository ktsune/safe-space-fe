import React from "react";
import { mount } from "enzyme";
import LogInForm from "./LogInForm";
import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });

describe("LogInForm", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(
      <LogInForm
      reliefCenter={{        
        name: "Turing Relief Center",
        addressPrint: "1331 17th St Denver CO 80202",
        lat: "39.7508132",
        lng: "-104.9967997",
        phone: "5555555555",
        website: "www.relief-center.com",
        id: "1"
      }}
      selectCenter={jest.fn()} 
      isCenterSelected={true}
      />
    );
  });

  it.skip("should render without crashing", () => {
    expect(wrapper.length).toEqual(1);
  });

  it.skip("should match the snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });
});