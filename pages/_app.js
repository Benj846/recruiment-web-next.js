import Layout from "../components/Layout";
import "../styles/globals.scss";
import "bootstrap-icons/font/bootstrap-icons.css";
import { ApolloProvider, ApolloClient, InMemoryCache, gql, useMutation } from "@apollo/client";
import { createUploadLink } from "apollo-upload-client";
// import client from "../pages/works/index";

export const client = new ApolloClient({
  uri: "http://localhost:3000/api/graphql",
  // link: createUploadLink({ uri: "http://localhost:3000/api/graphql" }),
  cache: new InMemoryCache(),
});
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
