import Meta from "../../components/Meta";
import { ApolloClient, InMemoryCache, gql, useMutation } from "@apollo/client";
import { createUploadLink } from "apollo-upload-client";

const works = ({ works }) => {
  let input;
  const ADD_TODO = gql`
    mutation AddTodo($type: String!) {
      addTodo(type: $type) {
        id
        type
      }
    }
  `;
  const [addTodo, { data }] = useMutation(ADD_TODO);
  return (
    <div>
      <Meta title='works' />
      <div>
        {works.map((a) => (
          <div key={a.ID}>{a.VAL}</div>
        ))}
      </div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          addTodo({ variables: { type: input.value } });
          input.value = "";
        }}>
        <input
          ref={(node) => {
            input = node;
          }}
        />
        <button type='submit'>Add todo</button>
      </form>
    </div>
  );
};

export const client = new ApolloClient({
  // uri: "http://localhost:3000/api/graphql",
  link: createUploadLink({ uri: "http://localhost:3000/api/graphql" }),
  cache: new InMemoryCache(),
});
export const getStaticProps = async () => {
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
