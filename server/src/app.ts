import { ApolloServer } from 'apollo-server-express';
import express, { Application } from 'express';
import { GraphQLSchema } from 'graphql';

import { initializeSequelize } from './connections/db/db';
import { context } from './context/context';
import createSchema from './schema';

const app: Application = express();

initializeSequelize();

const schema: GraphQLSchema = createSchema();
const server: ApolloServer = new ApolloServer({ context, schema });

server.applyMiddleware({
  app,
  path: '/graphql'
});

const port = process.env.PORT || 3000;

app.listen({ port }, () => {
  console.log('Apollo Server listening, port', port);
});
