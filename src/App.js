import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SearchBar from './Searchbar';
import MovieList from './Movies';
import './App.css'

const API_KEY = 'cfe422613b250f702980a3bbf9e90716'; 

function App() {
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    if (query) {
      axios
        .get(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${query}`)
        .then((response) => {
          setMovies(response.data.results);
          console.log(response.data.results)
        })
        .catch((error) => {
          console.error('API request error:', error);
        });
    } else {
      setMovies([]); 
    }
  }, [query]);

  return <>
  <div id='wrapper' >
      <h1>MoVie SeaRch</h1>
      <SearchBar onSearch={setQuery} />
    
      <MovieList movies={movies} />
     

    </div>

    <footer>

    </footer>
  </>
    
}

export default App;
