import { gql } from '@apollo/client';

export const QUERY_THOUGHTS = gql`
guery getThoughts {
  thoughts { 
    _id thoughtText
     thoughtAuthor 
     createdAt
     }
  }

  # TODO: Add a query called 'getThoughts' that returns a thought's _id, thoughtText, thoughtAuthor, and createdAt fields
`;


