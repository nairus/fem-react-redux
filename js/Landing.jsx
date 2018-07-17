// @flow

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Search from './Search';

class Landing extends Component {
  state = {
    searchTerm: ''
  };
  handleKeyPress = (event: SyntheticKeyboardEvent & { target: HTMLInputElement }) => {
    // Change the state if enter key is pressed.
    if (event.charCode === 13) {
      this.setState({ searchTerm: event.target.value });
    }
  };
  props: {
    shows: Array<Show>
  };
  render() {
    if (this.state.searchTerm) {
      return <Search showSearch search={this.state.searchTerm} shows={this.props.shows} />;
    }

    // Otherwise, render the homepage
    return (
      <div className="landing">
        <h1>svideo</h1>
        <input type="text" placeholder="Search" onKeyPress={this.handleKeyPress} />
        <Link to="/search">or Browse All</Link>
      </div>
    );
  }
}

const mapStateToProps = state => ({ searchTerm: state.searchTerm });

export default connect(mapStateToProps)(Landing);
