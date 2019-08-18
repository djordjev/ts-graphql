import { ApolloServer } from 'apollo-server-express';
import express, { Application } from 'express';
import { GraphQLSchema } from 'graphql';

import createSchema from './schema';

const app: Application = express();

const schema: GraphQLSchema = createSchema();
const server: ApolloServer = new ApolloServer({ schema });

server.applyMiddleware({
  app,
  path: '/graphql'
});

const port = process.env.PORT || 3000;

app.listen({ port }, () => {
  console.log('Apollo Server listening, port', port);
});
