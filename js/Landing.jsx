// @flow

import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { setSearchTerm } from './actionCreators';

const Landing = (props: { searchTerm: string, handleSearchSearchTerm: Function }) => (
  <div className="landing">
    <h1>svideo</h1>
    <input onChange={props.handleSearchSearchTerm} type="text" value={props.searchTerm} placeholder="Search" />
    <Link to="/search">or Browse All</Link>
  </div>
);

const mapStateToProps = state => ({ searchTerm: state.searchTerm });
const mapDispatchToProps = (dispatch: Function) => ({
  handleSearchSearchTerm(event) {
    dispatch(setSearchTerm(event.target.value));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Landing);
