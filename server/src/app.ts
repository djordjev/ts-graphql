import { ApolloServer } from 'apollo-server-express';
import connectRedis from 'connect-redis';
import express, { Application } from 'express';
import expressSession from 'express-session';
import { GraphQLSchema } from 'graphql';
import redis, { RedisClient } from 'redis';

import { initializeSequelize } from './connections/db/db';
import { context } from './context/context';
import createSchema from './schema';

const app: Application = express();

initializeSequelize();

const redisClient: RedisClient = redis.createClient({
  host: 'redis',
  port: 6379
});
redisClient.on('error', err => {
  console.error('could not establish a connection with redis. ' + err);
});
redisClient.on('connect', () => {
  console.log('connected to redis successfully');
});

const RedisStore = connectRedis(expressSession);

app.use(
  expressSession({
    cookie: {
      maxAge: 7 * 24 * 60 * 60 * 1000
    },
    name: 'cid',
    resave: true,
    saveUninitialized: true,
    secret: process.env.SECRET,
    store: new RedisStore({ client: redisClient })
  })
);

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
