import React from 'react';
import { MemoryRouter } from 'react-router';
import { mount } from 'enzyme';
import { App } from './App';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('App', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(
      <MemoryRouter intialEntries={['/']}>
        <App />
      </MemoryRouter>
    );
  });

  it('should render without crashing', () => {
    expect(wrapper.length).toEqual(1)
  });

  it.skip('should match the snapshot with the data passed through', () => {
    expect(wrapper).toMatchSnapshot();
  })
});
