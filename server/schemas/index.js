'use strict';

const { gql } = require('apollo-server');
const todoSchema = require('./todo');
const newsSchema = require('./news');

const typeDefs = gql`
  type Query {
    _empty: Boolean
  }

  type Mutation {
    _test: Boolean
  }
`;

const resolvers = {
  Query: {
    _empty: () => true,
  },
  Mutation: {
    _test: () => true,
  },
};


module.exports = {
  typeDefs: [typeDefs, todoSchema.typeDefs, newsSchema.typeDefs],
  resolvers: [resolvers, todoSchema.resolvers, newsSchema.resolvers],
};
