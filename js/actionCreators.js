import { SET_SEARCH_TERM } from './actions';

export function setSearchTerm(searchTerm) {
  return { type: SET_SEARCH_TERM, payload: searchTerm };
}

// FIXME (FOR COMPILING)
export function noop() {}
