import Layout from "../components/Layout";
import "../styles/globals.scss";
import "bootstrap-icons/font/bootstrap-icons.css";
import { ApolloProvider, ApolloClient, InMemoryCache, createHttpLink } from "@apollo/client";
import client from "./works/index";

function MyApp({ Component, pageProps }) {
  return (
    <ApolloProvider client={client}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ApolloProvider>
  );
}

export default MyApp;
