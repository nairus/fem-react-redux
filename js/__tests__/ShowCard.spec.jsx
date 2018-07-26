import React from 'react';
import { shallow } from 'enzyme';
import ShowCard from '../ShowCard';

test('Landing render correctly', () => {
  const got = {
    title: 'Game of Thrones',
    year: '2011–',
    description: 'Nine noble families fight for control over the mythical lands of Westeros, while a forgotten race returns after being dormant for thousands of years.',
    poster: 'got.jpg',
    imdbID: 'tt0944947',
    trailer: 'giYeaKsXnsI'
  };
  const component = shallow(<ShowCard {...got} />);
  expect(component).toMatchSnapshot();
});
