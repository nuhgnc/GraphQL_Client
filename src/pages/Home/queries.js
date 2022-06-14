import { gql } from '@apollo/client';

export const GET_POST = gql`
  query getAllPost{
    posts{
      id
      title
      description
      short_description
      user{
        profile_photo
      }
    }
  }
`;

export const POST_SUBS = gql`
subscription PostCreated {
  postCreated{
    id
    title
    description
    user{
      profile_photo
    }
  }
}
`;