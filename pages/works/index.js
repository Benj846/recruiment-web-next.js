import Meta from "../../components/Meta";
import { ApolloClient, InMemoryCache, gql, useMutation } from "@apollo/client";
import { createUploadLink } from "apollo-upload-client";
const works = ({ works }) => {
  return (
    <div>
      <Meta title='works' />
      <div>
        {works.map((a) => (
          <div key={a.ID}>{a.VAL}</div>
        ))}
      </div>
    </div>
  );
};

export const getStaticProps = async () => {
  const link = createUploadLink({ uri: "http://localhost:3000/api/graphql" });
  const client = new ApolloClient({
    // uri: "http://localhost:3000/api/graphql",
    link,
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

  const TEST = gql`
    mutation Addtest($title: String, $type: String) {
      setWork(input: { TITLE: $title, TYPE: $type }) {
        TITLE
        TYPE
      }
    }
  `;
  return {
    props: {
      works: data.getDefaultWork,
    },
  };
};

export default works;
