import {gql} from '@apollo/client';

const DELETE_CONTACT = gql`
mutation deleteClient($id:ID!){
    deleteContact(id:$id){
        id
        name
        email
    }
   
}
`;

const ADD_CONTACT = gql`
  mutation addContact($name: String!, $email: String!, $subject: String!,  $message: String!) {
    addContact(name: $name, email: $email, subject: $subject, message:$message) {
      _id
      name
      email
      subject
      message
    }
  }
`;


export {ADD_CONTACT, DELETE_CONTACT};