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
      __typename #Show either "MovieSuccessResult" | "MovieErrorResult" in this example. Could be used to identify diffrent results. Doesn't need to be defined here
      ... on MovieSuccessResult {
        movie {
          name
          publicationDate
          isInTheater
        }
      }
      ... on MovieErrorResult {
        message
      }
    }
  }
`;

export const QUERY_A_USER = gql`
  query User($userId: ID!) {
    user(id: $userId) {
      name
      userName
      age
      nationality
    }
  }
`;
