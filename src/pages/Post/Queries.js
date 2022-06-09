import { gql } from '@apollo/client';

export const GET_EVENT_DETAILS = gql`
query GetEventDetails($id: ID!) {
  event(id: $id) {
    title
    desc
    location {
      id
      desc
      name
    }
    user {
      id
      email
      username
    }
    participant {
      id
      username {
        id
        email
        username
      }
      event_id
    }
  }
}
`;

export const GET_EVENT_PARTICIPANTS = gql`
query GET_EVENT_PARTICIPANTS($id: ID!) {
  event(id: $id) {
    participant {
      username {
        email
        username
      }
    }
  }
}
`;

