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

