import React from "react";
import { mount } from "enzyme";
import SuppliesForm from "./SuppliesForm";
import { UsersContext } from '../Contexts/UsersContext';
import { ItemsContext } from '../Contexts/ItemsContext';
import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });

describe("SuppliesForm", () => {
  let wrapper;
  let UsersContext;
  let ItemsContext;

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
      ItemsContext = {
        currentItems: [
          {id: "1", name: "Diapers", quantity: 10},
          {id: "2", name: "Food", quantity: 10},
          {id: "3", name: "Water", quantity: 11},
          {id: "4", name: "Soap", quantity: 7},
          {id: "5", name: "Toothpaste", quantity: 0}
        ],
        setCurrentItems: () => {}            
      }
      wrapper = mount(
        <SuppliesForm/>,
        { UsersContext },
        { ItemsContext }
      );
    });

  it.skip("should render without crashing", () => {
    expect(wrapper.length).toEqual(1);
  });

  it.skip("should match the snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });

  it.skip("should mock context", () => {
    wrapper.setContext({ UsersContext })
    wrapper.setContext({ ItemsContext })
    expect(wrapper).toMatchSnapshot();
  });
})