import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";

import App from "./App";

const client = new ApolloClient({
  uri: "/graphql",
  connectToDevTools: true
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <BrowserRouter>
      <React.Fragment>
        <App />
      </React.Fragment>
    </BrowserRouter>
  </ApolloProvider>,
  document.getElementById("root")
);
