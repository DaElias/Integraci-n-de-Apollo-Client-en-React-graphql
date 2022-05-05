import React from "react";
import { BrowserRouter } from "react-router-dom";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

//   link: "https://petgram-server-asdas.vercel.app/graphql",
const client = new ApolloClient({
  uri: "https://petgram-server-asdas.vercel.app/graphql",
  cache: new InMemoryCache(),
});
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </BrowserRouter>
);
