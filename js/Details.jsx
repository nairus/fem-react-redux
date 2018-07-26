// @Flow
/* eslint-disable flowtype/no-types-missing-file-annotation */

import React, { Component } from 'react';
import { connect } from 'react-redux';
import getAPIDetails from './asyncActions';
import Header from './Header';
import Spinner from './Spinner';

class Details extends Component {
  state = {
    apiData: { imdbRating: '' }
  };
  componentDidMount() {
    if (!this.props.rating) {
      this.props.getAPIDetails();
    }
  }
  props: {
    show: Show,
    rating: string,
    getAPIDetails: Function
  };
  render() {
    const { title, description, year, poster, trailer } = this.props.show;
    let ratingComponent;
    if (this.props.rating) {
      ratingComponent = <h3>{this.props.rating}</h3>;
    } else {
      ratingComponent = <Spinner />;
    }
    return (
      <div className="details">
        <Header />
        <section>
          <h1>{title}</h1>
          <h2>({year})</h2>
          {ratingComponent}
          <img src={`/public/img/posters/${poster}`} alt={`Poster for ${title}`} />
          <p>{description}</p>
        </section>
        <div>
          <iframe
            src={`https://www.youtube-nocookie.com/embed/${trailer}?rel=0&amp;controls=0&amp;showinfo=0`}
            frameBorder="0"
            title={`Trailer for ${title}`}
          />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  const apiData = state.apiData[ownProps.show.imdbID] ? state.apiData[ownProps.show.imdbID] : {};
  return {
    rating: apiData.rating
  };
};

const mapDispatchToProps = (dispatch: Function, ownProps) => ({
  getAPIDetails() {
    dispatch(getAPIDetails(ownProps.show.imdbID));
  }
});

export const UnWrapped = Details;
export default connect(mapStateToProps, mapDispatchToProps)(Details);
