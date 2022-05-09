import React from "react";
import { BrowserRouter } from "react-router-dom";
import ReactDOM from "react-dom/client";
import App from "./App";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client";
import { Provider } from "react-redux";
import { store } from "./store";
import { GlobalStyle } from "./components/Styles/GlobalStyle";
import { TOKEN_NAME } from "./actions/types";
import { setContext } from "@apollo/client/link/context";

const httpLink = createHttpLink({
  uri: "https://petgram-server-asdas.vercel.app/graphql",
});

const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem(TOKEN_NAME);
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
    <ApolloProvider client={client}>
      <Provider store={store}>
        <GlobalStyle />
        <App />
      </Provider>
    </ApolloProvider>
  </BrowserRouter>
);
