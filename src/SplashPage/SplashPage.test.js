import React from 'react';
import { shallow } from 'enzyme';
import { SplashPage } from './SplashPage';


describe('SplashPage', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<SplashPage />)
  })

  it('should match the snapshot with the data passed through', () => {
    expect(wrapper).toMatchSnapshot();
  })
})