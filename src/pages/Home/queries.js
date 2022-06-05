import { gql } from '@apollo/client';

export const GET_POST = gql`
  query getAllPost{
    posts{
      id
      title
      description
      user{
        profile_photo
      }
    }
  }
`;

