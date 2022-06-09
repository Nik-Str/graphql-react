//React
import { useState } from 'react';
//Apollo client
import { useLazyQuery } from '@apollo/client';
//Querys
import { QUERY_A_MOVIE } from '../grapql/querys';

const Movie = () => {
  const [movie, setMovie] = useState('');
  const [fetchMovie, { data, loading, error }] = useLazyQuery(QUERY_A_MOVIE);

  const handleGetMovie = () => {
    fetchMovie({
      variables: {
        name: movie,
      },
    });
  };

  //By giving an final "else" option we eneble to through a exepction when maybe a new response type is sent from/added by the server
  const Response = () => {
    if (data?.movie.message) {
      return <p>{data.movie.message}</p>;
    } else if (data?.movie.movie) {
      return (
        <div>
          <p>Name: {data.movie.movie.name}</p>
          <p>Publication date: {data.movie.movie.publicationDate}</p>
          <p>Is in theater: {data.movie.movie.isInTheater ? 'Yes' : 'No'}</p>
        </div>
      );
    } else {
      return <p>Unexpected response type</p>;
    }
  };

  //Example of handling diffrent results from server that are not directly errors
  return (
    <>
      <input value={movie} onChange={(e) => setMovie(e.target.value)} type="text" placeholder="Aaa" />
      <button type="button" onClick={handleGetMovie}>
        Get Movie
      </button>
      {loading && <p>Loading...</p>}
      {error && <p>Something went wrong.</p>}
      {data && <Response />}
    </>
  );
};

export default Movie;
