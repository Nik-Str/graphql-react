//React
import { useState } from 'react';
//Apollo client
import { useLazyQuery } from '@apollo/client';
//Querys
import { QUERY_A_USER } from '../grapql/querys';

const User = () => {
  const [userId, setUserId] = useState(0);
  const [fetchUser, { data, loading, error }] = useLazyQuery(QUERY_A_USER);

  const handleGetUser = () => {
    fetchUser({
      variables: {
        userId: userId,
      },
    });
  };

  //Example on error handling in client
  return (
    <>
      <input value={userId} onChange={(e) => setUserId(e.target.value)} type="number" />
      <button type="button" onClick={handleGetUser}>
        Get User
      </button>
      {loading && <p>Loading...</p>}
      {error && <p>User doesn't exist</p>}
      {data?.user && (
        <div>
          <p>Name: {data.user.name}</p>
          <p>Username: {data.user.userName}</p>
          <p>Age: {data.user.age}</p>
          <p>Nationality: {data.user.nationality}</p>
        </div>
      )}
    </>
  );
};

export default User;
