import Meta from "../../components/Meta";
import { ApolloClient, InMemoryCache, gql, useMutation, useQuery } from "@apollo/client";
import { createUploadLink } from "apollo-upload-client";
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
      <Meta title='works' />
      <div>
        {user.map((a) => (
          <div key={a.ID}>{a.Name}</div>
        ))}
      </div>
    </div>
  );
};

// export const getStaticProps = async () => {
//   const { data } = await client.query({
//     query: gql`
//       {
//         getDefaultWork(LV: 1) {
//           ID
//           VAL
//         }
//       }
//     `,
//   });

//   return {
//     props: {
//       works: data.getDefaultWork,
//     },
//   };
// };
export const client = new ApolloClient({
  uri: "http://localhost:3000/api/graphql",
  // link: createUploadLink({ uri: "http://localhost:3000/api/graphql" }),
  cache: new InMemoryCache(),
});

export async function getStaticProps() {
  const { data } = await client.query({
    query: gql`
      query {
        getUserInfo {
          ID
          Name
          Email
        }
      }
    `,
  });

  return {
    props: {
      user: data.getUserInfo,
    },
  };
}

export default Works;
