const { gql } = require('apollo-server-koa')

module.exports = gql`
  type Mutation {
    addTopic(label: String!): Topic,
    addBook(book: BookInput!): Book,
    deleteBook(bookId: Int!): Book,
    detachTopicFromBook(topicId: Int!, bookId: Int!): BookTopic
  }

  type Query { 
    authors: [Author], 
    books: [Book], 
    topics: [Topic]
  }

  input BookInput { author: String!, title: String! }

  type Author { email: String!, name: String, books: [Book]! }

  type Book { id: ID!, title: String, topics: [Topic]!, author: Author }

  type Topic { id: ID!, label: String!, books: [Book]! }

  type BookTopic { book: Int!, topic: Int! }
`