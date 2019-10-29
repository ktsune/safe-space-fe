import React from 'react';
import { shallow } from 'enzyme';
import { App } from './App';


describe('Header', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<App />)
  })

  it('should match the snapshot with the data passed through', () => {
    expect(wrapper).toMatchSnapshot();
  })
})