import express from 'express';
import expressGraphQL from 'express-graphql';
import resolvers from './resolvers';
import schema from './schema';

const app: express.Application = express();
const port: number = 3000;

app.use(
  '/graphql',
  expressGraphQL({
    graphiql: true,
    rootValue: resolvers,
    schema
  })
);

app.get('/', (req: express.Request, res: express.Response) => {
  let response: string;
  response = 'home';
  response += ' ';
  response += 'page';
  res.send(response);
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
