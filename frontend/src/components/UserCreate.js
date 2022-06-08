//React
import { useState, useEffect } from 'react';
//Apollo client
import { useMutation } from '@apollo/client';
//Querys
import { CREATE_USER_MUTATION } from '../grapql/mutations';

const UserCreate = ({ refetch }) => {
  const [user, setUser] = useState({ name: '', userName: '', age: 0, nationality: '' });
  const [createUser, { data, loading, error }] = useMutation(CREATE_USER_MUTATION);

  const handleCreateUser = () => {
    createUser({
      variables: {
        input: {
          name: user.name,
          userName: user.userName,
          age: Number(user.age),
          nationality: user.nationality,
        },
      },
    });
  };

  useEffect(() => {
    if (data) {
      setUser({ name: '', userName: '', age: 0, nationality: '' });
      refetch();
    }
  }, [data]);

  return (
    <>
      <div>
        <input
          type="text"
          placeholder="Name"
          value={user.name}
          onChange={(e) => setUser({ ...user, name: e.target.value })}
        />
        <input
          type="text"
          placeholder="Username"
          value={user.userName}
          onChange={(e) => setUser({ ...user, userName: e.target.value })}
        />
        <input
          type="number"
          placeholder="Age"
          value={user.age}
          onChange={(e) => setUser({ ...user, age: e.target.value })}
        />
        <input
          type="text"
          placeholder="Nationality"
          value={user.nationality}
          onChange={(e) => setUser({ ...user, nationality: e.target.value.toUpperCase() })}
        />
        <button type="button" onClick={handleCreateUser}>
          Create user
        </button>
      </div>
      {data && <p>User was created!</p>}
      {loading && <p>Loading...</p>}
      {error && <p>Something went wrong!</p>}
    </>
  );
};

export default UserCreate;
