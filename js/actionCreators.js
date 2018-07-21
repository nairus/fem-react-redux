import { SET_SEARCH_TERM, BROWSE_ALL } from './actions';

export function setSearchTerm(searchTerm) {
  return { type: SET_SEARCH_TERM, payload: searchTerm };
}

export function browseAll() {
  return { type: BROWSE_ALL, payload: '' };
}
