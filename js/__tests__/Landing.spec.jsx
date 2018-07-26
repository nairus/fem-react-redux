import React from 'react';
import { shallow } from 'enzyme';
import { Unwrapped as UnwrappedLanding } from '../Landing';

test('Landing render correctly', () => {
  const component = shallow(<UnwrappedLanding />);
  expect(component).toMatchSnapshot();
});
