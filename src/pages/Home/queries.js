import { gql } from '@apollo/client';

export const GET_POST = gql`
query Events {
  events {
    id
    title
    date
    desc
    
  }
}
`;

