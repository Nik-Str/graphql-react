//React
import { useState } from 'react';
//Apollo client
import { useLazyQuery } from '@apollo/client';
//Querys
import { QUERY_A_MOVIE } from '../grapql/querys';

const Movie = () => {
  const [movie, setMovie] = useState('');
  const [fetchMovie, { data, loading }] = useLazyQuery(QUERY_A_MOVIE);

  const handleGetMovie = () => {
    fetchMovie({
      variables: {
        name: movie,
      },
    });
  };

  //Example of error handling from server
  return (
    <>
      <input value={movie} onChange={(e) => setMovie(e.target.value)} type="text" placeholder="Aaa" />
      <button type="button" onClick={handleGetMovie}>
        Get Movie
      </button>
      {loading && <p>Loading...</p>}
      {data?.movie.message && <p>{data.movie.message}</p>}
      {data?.movie.movie && (
        <div>
          <p>Name: {data.movie.movie.name}</p>
          <p>Publication date: {data.movie.movie.publicationDate}</p>
          <p>Is in theater: {data.movie.movie.isInTheater ? 'Yes' : 'No'}</p>
        </div>
      )}
    </>
  );
};

export default Movie;
