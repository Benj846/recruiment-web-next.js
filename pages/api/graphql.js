import { ApolloServer, gql } from 'apollo-server-micro';
import prisma from '../../prisma';
const jwt = require('jsonwebtoken');
const mysql = require('mysql2/promise');
const bcrypt = require('bcryptjs');

require('dotenv').config();
const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PW,
  database: process.env.DB_DATABASE,
  port: process.env.PORT,
  connectionLimit: 10,
  queueLimit: 0,
});

// Schema
const typeDefs = gql`
  type Work {
    ID(id: ID): Int!
    LV: Int!
    VAL: String!
    UPPER_ID: Int!
    USE_YN: Boolean!
  }
  type User {
    Id: Int!
    Name: String!
    Email: String!
    Password: String!
  }
  type AuthPayload {
    token: String
    user: User
  }
  type Query {
    getDefaultWork(ID: Int): [User]
    getUserInfo: [User]
    hello: String!
  }
  type Mutation {
    addWork(ID: Int, LV: Int, VAL: String, UPPER_ID: Int, USE_YN: Boolean): Work
    signUp(Name: String!, Email: String!, Password: String!): AuthPayload
    logIn(Email: String!, Password: String!): AuthPayload
  }
`;

// signUp Resolvers
const signUp = async (_, args, { prisma }) => {
  const encriptedPW = await bcrypt.hash(args.Password, 10);
  try {
    const user = await prisma.user.create({
      data: {
        ...args,
        Password: encriptedPW,
      },
    });
    const token = jwt.sign({ userId: user.Id }, process.env.APP_SECRET);
    return {
      token,
      user,
    };
  } catch (e) {
    // console.log(e.meta.target);
  }
};

// Login resolver
const logIn = async (_, args, { prisma }) => {
  try {
    const user = await prisma.user.findUnique({
      where: { Email: args.Email },
    });
    if (!user) {
      throw new Error('No such user found');
    }
    const valid = await bcrypt.compare(args.Password, user.Password);
    if (!valid) {
      throw new Error('Invalid password');
    }
    const token = jwt.sign({ userId: user.Id }, process.env.APP_SECRET);
    console.log({ user, token });
    return { user, token };
  } catch (e) {
    // return e.massage;
    console.log('error with login');
  }
};

const getUserInfo = async () => {
  const rows = await prisma.user.findMany();
  return rows;
};
// const getDefaultWork = async ({ ID }) => {
//   // const [rows] = await pool.query("select * from User ");
//   // const [rows] = await pool.query("select * from TB_CMN_WORK");
//   const [rows] = await prisma.userinfo.findMany();
//   // const rows = await prisma.work.findMany();
//   const filteredWorks = rows.filter((args) => args.ID === ID);
//   return filteredWorks;
// };
const resolvers = {
  Query: {
    hello: (_parent, _args, _context) => {
      return 'Hello!';
    },
    getDefaultWork: (_, { ID }, __) => getDefaultWork({ ID }),
    getUserInfo,
  },
  Mutation: {
    addWork(_, { ID, LV, VAL, UPPER_ID, USE_YN }, __) {
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
    signUp,
    logIn,
  },
};

const apolloServer = new ApolloServer({
  typeDefs,
  resolvers,
  uploads: false,
  context: ({ req }) => {
    return {
      ...req,
      prisma,
    };
  },
  // disable apollo built-in file upload support cuz node -versoin is > 14
  //see more detail in https://www.apollographql.com/docs/apollo-server/data/file-uploads/#uploads-in-node-14-and-later
});

const handler = apolloServer.createHandler({ path: '/api/graphql' });

export const config = {
  api: {
    bodyParser: false,
  },
};

export default handler;
