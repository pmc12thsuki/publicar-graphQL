import React, { Component } from 'react';
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import DashBoard from './DashBoard'
import Header from './Header';
import TodoNew from './TodoNew';
import TodoDetail from './TodoDetail';

const GRAPHQL_URL = 'https://00k8w7mw6n.sse.codesandbox.io/'
const client = new ApolloClient({
  uri: GRAPHQL_URL,
});

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <BrowserRouter>
          <div className="container">
            <Header />
            <Route exact path = "/" component={DashBoard} />
            < Switch >
              <Route exact path="/todo/new" component={TodoNew} />
              <Route exact path="/todo/:id" component={TodoDetail} />
            </ Switch>
          </div>
        </BrowserRouter>
      </ApolloProvider>
    )
  }
}


export default App;
