'use strict';

const {
  gql,
} = require('apollo-server');

// Schema
const typeDefs = gql`
extend type Query {
  getRandomNews: News
}
type News {
    title: String!
    description: String
    source: String
    url: String
}
`;

// resolvers
const resolvers = {
  Query: {
    getRandomNews: (root, args, { newsModel }) => newsModel.getRandomNews(),
  },
};

module.exports = {
  typeDefs,
  resolvers,
};
