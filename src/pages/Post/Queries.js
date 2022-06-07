import { gql } from '@apollo/client';

export const GET_1POST = gql`
query Post($id: ID!) {
  post(id: $id) {
    id
    title
    short_description
    description
    cover
    user {
      id
      full_name
      profile_photo
    }
  }
}
`;

export const GET_POST_COMMENTS = gql`
query GetComments($id: ID!) {
  post(id: $id) {
    comments {
      id
      text
      user {
        id
        profile_photo
        full_name
      }
    }
  }
}
`;

