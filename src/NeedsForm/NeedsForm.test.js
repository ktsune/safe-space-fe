import React from "react";
import { mount } from "enzyme";
import NeedsForm from "./NeedsForm";
import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });

describe("NeedsForm", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(
        <NeedsForm
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

  it("should match the snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });
});