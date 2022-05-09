import Meta from "../../components/Meta";
import { gql } from "@apollo/client";
import client from "../../apollo-client";

const GET_USER = gql`
  query {
    getUserInfo {
      Id
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
    <div className='h-80'>
      <Meta title='Display Users' keywords='getallusers' description='display all the users' />
      <div className='min-w-min min-h-60'>
        {/* {user.map((a) => (
          <div key={a.Id}>{a.Name}</div>
        ))} */}
      </div>
    </div>
  );
};

// export async function getStaticProps() {
//   const { data } = await client.query({
//     query: GET_USER,
//   });

//   return {
//     props: {
//       user: data.getUserInfo,
//     },
//   };
// }

export default Works;
