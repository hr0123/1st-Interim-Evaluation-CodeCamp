// import "../styles/globals.css";
import "antd/dist/antd.css";
import {
  ApolloClient,
  ApolloLink,
  ApolloProvider,
  InMemoryCache,
} from "@apollo/client";
import Layout from "../src/components/commons/layout";
import { createUploadLink } from "apollo-upload-client";

function MyApp({ Component, pageProps }) {
  const uplodLink = createUploadLink({
    uri: "http://backend06.codebootcamp.co.kr/graphql",
  });
  const client = new ApolloClient({
    link: ApolloLink.from([uplodLink]),
    cache: new InMemoryCache(),
  });

  return (
    <ApolloProvider client={client}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ApolloProvider>
  );
}

export default MyApp;
