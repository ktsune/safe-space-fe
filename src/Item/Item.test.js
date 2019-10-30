import React from "react";
import { shallow } from "enzyme";
import Item from "./Item";
import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });

describe("Item", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(
      <Item
        item=""
        items={[
          "Diapers",
          "Baby Wipes",
          "Breastfeeding Supplies",
          "Infant Formula",
          "Feminine Products",
          "Phone Charger (iphone)",
          "Phone Charger (android)",
          "add item"
          ]}
        setItems={jest.fn()}
        neededItems={[]}
        setNeededItems={jest.fn()}
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