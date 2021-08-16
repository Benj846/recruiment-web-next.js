import { ApolloServer, gql } from "apollo-server-micro";
import { PrismaClient } from "@prisma/client";
const mysql = require("mysql2/promise");
const prisma = new PrismaClient();

require("dotenv").config();
const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PW,
  database: process.env.DB_DATABASE,
  port: process.env.PORT,
  connectionLimit: 10,
  queueLimit: 0,
});
const typeDefs = gql`
  type Work {
    ID(id: ID): Int!
    LV: Int!
    VAL: String!
    UPPER_ID: Int!
    USE_YN: Boolean!
  }
  type User {
    ID: Int!
    Name: String!
    Email: String!
    Password: String!
  }
  type Query {
    getDefaultWork(LV: Int): [Work]
    getUserInfo(ID: Int): [User]
    hello: String!
  }
  type Mutation {
    addWork(ID: Int, LV: Int, VAL: String, UPPER_ID: Int, USE_YN: Boolean): Work
  }
`;

const getUserInfo = async ({ ID }) => {
  const [rows] = await pool.query("select * from User");
};
// const getDefaultWork = async ({ LV }) => {
//   const [rows] = await pool.query("select * from User ");
//   // const [rows] = await pool.query("select * from TB_CMN_WORK");
//   //const [rows] = await prisma.work.findMany();
//   // const rows = await prisma.work.findMany();
//   const filteredWorks = rows.filter((args) => args.LV === LV);
//   return filteredWorks;
// };
const getDefaultWork = async ({ ID }) => {
  const [rows] = await pool.query("select * from User ");
  // const [rows] = await pool.query("select * from TB_CMN_WORK");
  //const [rows] = await prisma.work.findMany();
  // const rows = await prisma.work.findMany();
  const filteredWorks = rows.filter((args) => args.ID === ID);
  return filteredWorks;
};
const resolvers = {
  Query: {
    hello: (_parent, _args, _context) => {
      return "Hello!";
    },
    getDefaultWork: (parent, { LV }, context, info) => getDefaultWork({ LV }),
    getUserInfo: () => getUserInfo({ ID }),
  },
  Mutation: {
    addWork(_, { ID, LV, VAL, UPPER_ID, USE_YN }, context) {
      prisma.work.create({
        data: {
          ID: ID,
          LV: LV,
          VAL: VAL,
          UPPER_ID: UPPER_ID,
          USE_YN: USE_YN,
        },
      });
    },
  },
};

const apolloServer = new ApolloServer({
  typeDefs,
  resolvers,
  uploads: false,
  // disable apollo built-in file upload support cuz node -versoin is > 14
  //see more detail in https://www.apollographql.com/docs/apollo-server/data/file-uploads/#uploads-in-node-14-and-later
});

const handler = apolloServer.createHandler({ path: "/api/graphql" });

export const config = {
  api: {
    bodyParser: false,
  },
};

export default handler;
