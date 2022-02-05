import React, { useState } from 'react';

const IMG_API = 'https://image.tmdb.org/t/p/w1280';

const Movie = ({ title, poster_path, overview, vote_average }) => {
  const [showOverview, setShowOverview] = useState(false);

  const setVoteColor = (vote) => {
    return vote >= 8 ? 'green' : vote >= 6 ? 'orange' : 'red';
  };

  return (
    <div
      className="movie"
      onMouseEnter={() => setShowOverview(true)}
      onMouseLeave={() => setShowOverview(false)}
    >
      <div className="movie-show">
        <img src={IMG_API + poster_path} alt={title} />
        <div className={`movie-overview ${showOverview ? 'show' : ''}`}>
          <h5>Overview</h5>
          <p>{overview}</p>
        </div>
      </div>
      <div class="movie-info">
        <h5>{title}</h5>
        <p className={setVoteColor(vote_average)}>{vote_average}</p>
      </div>
    </div>
  );
};

export default Movie;
