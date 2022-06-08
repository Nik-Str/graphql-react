//Apollo client
import { useQuery } from '@apollo/client';
//Querys
import { QUERY_ALL_USERS } from '../grapql/querys';
//Components
import UserCreate from './UserCreate';

const Userlist = () => {
  const { data, loading, error, refetch } = useQuery(QUERY_ALL_USERS);

  return (
    <>
      <UserCreate refetch={refetch} />
      {loading && <p>Loading...</p>}
      {error && <p>Error fetching data</p>}
      {data && (
        <ul>
          {data?.users.map((user) => (
            <li key={user.id}>
              Name: {user.name}, Username: {user.userName}, Age: {user.age}, Nationality: {user.nationality}
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default Userlist;
