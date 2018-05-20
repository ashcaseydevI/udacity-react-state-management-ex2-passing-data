import React, { Component } from "react";
import Movies from "./Movies";

class Results extends Component {
  render() {
    const { profiles, users, movies, movieUser } = this.props;

    const movieCards = Object.keys(movies).map(id => (
      <Movies
        key={id}
        movieInfo={movies[id]}
        users={users}
        usersWhoLikedMovie={movieUser[id]}
      />
    ));

    return <ul>{movieCards}</ul>;
  }
}

export default Results;
