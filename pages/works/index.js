import Meta from "../../components/Meta";
import { ApolloClient, InMemoryCache, gql } from "@apollo/client";
const works = ({ works }) => {
  return (
    <div>
      <Meta title='works' />
      <p>
        {works.map((a) => (
          <div key={a.ID}>{a.VAL}</div>
        ))}
      </p>
    </div>
  );
};

export const getStaticProps = async () => {
  const client = new ApolloClient({
    uri: "http://localhost:3000/api/graphql",
    cache: new InMemoryCache(),
  });
  const { data } = await client.query({
    query: gql`
      {
        getDefaultWork(LV: 1) {
          ID
          VAL
        }
      }
    `,
  });
  return {
    props: {
      works: data.getDefaultWork,
    },
  };
};

export default works;
