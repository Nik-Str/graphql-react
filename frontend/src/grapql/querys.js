import { gql } from '@apollo/client';

export const QUERY_ALL_USERS = gql`
  query Users {
    users {
      id
      name
      age
      nationality
      userName
    }
  }
`;

export const QUERY_A_MOVIE = gql`
  query Movie($name: String!) {
    movie(name: $name) {
      name
      publicationDate
      isInTheater
    }
  }
`;
