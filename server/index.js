'use strict';

const { ApolloServer } = require('apollo-server');
const mongoose = require('mongoose');

const keys = require('./config/keys');
const { typeDefs, resolvers } = require('./schemas');
const { todoModel, newsModel } = require('./models');


mongoose.connect(keys.mongoURI);

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: () => {
    // put env variable into context
    const context = {
      todoModel,
      newsModel,
    };
    return context;
  },
});


server.listen().then(({ url }) => {
  console.log(`server listhen at ${url}`);
});
