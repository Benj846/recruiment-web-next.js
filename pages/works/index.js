import Meta from '../../components/Meta';
import {
  ApolloProvider,
  ApolloClient,
  InMemoryCache,
  createHttpLink,
  gql,
} from '@apollo/client';
// import { createUploadLink } from "apollo-upload-client";
// import client from "../_app";

const GET_USER = gql`
  query {
    getUserInfo {
      ID
      Name
    }
  }
`;
const Works = ({ user }) => {
  // let input;
  // const ADD_TODO = gql`
  //   mutation AddTodo($type: String!) {
  //     addTodo(type: $type) {
  //       id
  //       type
  //     }
  //   }
  // `;
  // const [addTodo, { data }] = useMutation(ADD_TODO);

  return (
    <div>
      <Meta title="works" />
      <div className="min-w-min min-h-60">
        {user.map((a) => (
          <div key={a.ID}>{a.Name}</div>
        ))}
      </div>
    </div>
  );
};

const link = createHttpLink({
  uri: 'http://localhost:3000/api/graphql',
  credentials: 'same-origin',
});

export const client = new ApolloClient({
  link,
  cache: new InMemoryCache(),
});
export async function getStaticProps() {
  const { data } = await client.query({
    query: GET_USER,
  });

  return {
    props: {
      user: data.getUserInfo,
    },
  };
}

export default Works;
