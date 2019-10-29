import React from 'react';
import { shallow } from 'enzyme';
import { Pin } from './Pin';


describe('Pin', () => {
  let wrapper;
  let mockSelectCenter = jest.fn();
  let mockCenter = { 
    name: "Central Denver Disaster Relief", 
    addressPrint: "601 W 11th Ave Denver CO 80204", 
    lat: "39.7341653", 
    lng: "-104.9974374", 
    phone: "5555555555",
    website: "www.safe-space.com",
    id: "2"
  }
  let mockReliefCenter = {
    addressPrint: "1331 17th St Denver CO 80202",
    email: "get-relief@this-center.com",
    id: 1,
    lat: "39.7508132",
    lng: "-104.9967997",
    name: "Turing Relief Center",
    phone: "5555555555",
    website: "www.relief-center.com"
  }

  beforeEach(() => {
    wrapper = shallow(<Pin 
      center={mockCenter}
      selectCenter={mockSelectCenter}
      reliefCenter={mockReliefCenter}
    />)
  })

  it.skip('should match the snapshot with the data passed through', () => {
    expect(wrapper).toMatchSnapshot();
  })
})