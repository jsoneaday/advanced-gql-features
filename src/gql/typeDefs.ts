import { gql } from "apollo-server-express";

const typeDefs = gql`
  interface Identifiable {
    id: ID!
  }

  interface User implements Identifiable {
    id: ID!
    userName: String!
  }

  interface Rating {
    stars: Int!
  }

  type StandardUser implements Identifiable & User & Rating {
    id: ID!
    userName: String!
    stars: Int!
  }

  type Moderator implements Identifiable & User & Rating {
    id: ID!
    userName: String!
    stars: Int!
    categories: [Category!]
  }

  type Administrator implements Identifiable & User {
    id: ID!
    userName: String!
  }

  type Category implements Identifiable {
    id: ID!
    name: String!
  }

  union Result = StandardUser | Moderator | Administrator

  type Query {
    getAllUsers: [Result!]
  }
`;

// const typeDefs = gql`
//   type StandardUser {
//     id: ID!
//     userName: String!
//     stars: Int!
//   }

//   type Moderator {
//     id: ID!
//     userName: String!
//     stars: Int!
//     categories: [Category!]
//   }

//   type Administrator {
//     id: ID!
//     userName: String!
//   }

//   type Category {
//     id: ID!
//     name: String!
//   }
// `;

export default typeDefs;
