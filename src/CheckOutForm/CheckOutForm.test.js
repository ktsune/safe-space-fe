import React from "react";
import { mount } from "enzyme";
import CheckOutForm from "./CheckOutForm";
import { UsersContext } from '../Contexts/UsersContext';
import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });

describe("CheckOutForm", () => {
  let wrapper;
  let UsersContext;

  beforeEach(() => {
    UsersContext = {
      reliefCenter: {
        name: "Turing Relief Center",
        addressPrint: "1331 17th St Denver CO 80202",
        lat: "39.7508132",
        lng: "-104.9967997",
        phone: "5555555555",
        website: "www.relief-center.com",
        id: "1"
      },
      setreliefCenter: () => {}            
    }
    wrapper = mount(
      <CheckOutForm/>,
      { UsersContext }
    );
  });

  it("should render without crashing", () => {
    expect(wrapper.length).toEqual(1);
  });

  it("should match the snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });

  it("should mock context", () => {
    wrapper.setContext({UsersContext})
    expect(wrapper).toMatchSnapshot();
  });
});