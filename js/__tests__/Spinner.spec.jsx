import React from 'react';
import { shallow } from 'enzyme';
import Spinner from '../Spinner';

test('Spinner render correctly', () => {
  const component = shallow(<Spinner />);
  expect(component).toMatchSnapshot();
});
