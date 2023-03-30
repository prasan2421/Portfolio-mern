import { gql } from '@apollo/client';

const GET_BLOGS = gql`
query blogs {
    blogs {
      _id
      title
      markdown
      description
      createdAt
      user {
        _id
        name
        email
        status
          }
    }
  }
`;

export { GET_BLOGS };

