import React, { useState, useEffect } from 'react';
import './style.css';

//Components
import Movie from './components/Movie';
import Error from './components/Error';

//API
const FEATURED_API =
  'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1';

const SEARCH_API =
  'https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=';

export default function App() {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(async () => {
    getMovies(FEATURED_API);
  }, []);

  const getMovies = (API) => {
    fetch(API)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setMovies(data.results);
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (searchTerm) {
      getMovies(SEARCH_API + searchTerm);

      setSearchTerm('');
    }
  };

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div className="container">
      <header>
        <div className="searchbar">
          <h2>Movie App</h2>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Search movie..."
              value={searchTerm}
              onChange={handleChange}
            />
          </form>
        </div>
      </header>
      <div className="movie-container">
        {movies.length > 0 ? (
          movies.map((movie) => {
            return <Movie key={movie.id} {...movie} />;
          })
        ) : (
          <Error />
        )}
      </div>
    </div>
  );
}
