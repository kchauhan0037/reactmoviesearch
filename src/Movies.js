import React from 'react';

function Movies({ movies }) {
  return (
    <div id='cardwrapper'>
      
        {movies.map((movie) => (
          <div className='card'  key={movie.imdbID}>
            <img
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.title}
              />            
              <p className='title'>{movie.title}</p> 
            </div>
        ))}
      
    </div>
  );
}

export default Movies;

