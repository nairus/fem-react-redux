// @flow

import { setSearchTerm, addAPIData } from '../actionCreators';

test('setSearchTerm', () => {
  expect(setSearchTerm('New York')).toMatchSnapshot();
});

test('addAPIData', () => {
  expect(
    addAPIData({
      title: 'Game of Thrones',
      year: '2011–',
      description: 'Nine noble families fight for control over the mythical lands of Westeros, while a forgotten race returns after being dormant for thousands of years.',
      poster: 'got.jpg',
      imdbID: 'tt0944947',
      trailer: 'giYeaKsXnsI'
    })
  ).toMatchSnapshot();
});
