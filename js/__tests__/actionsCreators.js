// @flow

import moxios from 'moxios';
import { setSearchTerm, addAPIData } from '../actionCreators';
import getAPIDetails from '../asyncActions';

const got = {
  title: 'Game of Thrones',
  year: '2011–',
  description: 'Nine noble families fight for control over the mythical lands of Westeros, while a forgotten race returns after being dormant for thousands of years.',
  poster: 'got.jpg',
  imdbID: 'tt0944947',
  trailer: 'giYeaKsXnsI'
};

test('setSearchTerm', () => {
  expect(setSearchTerm('New York')).toMatchSnapshot();
});

test('addAPIData', () => {
  expect(addAPIData(got)).toMatchSnapshot();
});

test('getAPIDetails', (done: Function) => {
  const dispatchMock = jest.fn();
  moxios.withMock(() => {
    getAPIDetails(got.imdbID)(dispatchMock);
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request
        .respondWith({
          status: 200,
          response: got
        })
        .then(() => {
          expect(request.url).toEqual(`http://localhost:3000/${got.imdbID}`);
          expect(dispatchMock).toBeCalledWith(addAPIData(got));
          done();
        });
    });
  });
});
