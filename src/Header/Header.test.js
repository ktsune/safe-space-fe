import React from 'react';
import { shallow } from 'enzyme';
import Header from './Header';


describe('Header', () => {
  let wrapper;

  beforeEach(() => {
    jest.resetModules()
    wrapper = shallow(<Header />)
  })

  it('should match the snapshot with the data passed through', () => {
    expect(wrapper).toMatchSnapshot();
  })
})