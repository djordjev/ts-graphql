import express from 'express';
import expressGraphQL from 'express-graphql';
import rootValue from './queries';
import schema from './schema';

const app: express.Application = express();
const port: number = 3000;

app.use(
  '/graphql',
  expressGraphQL({
    graphiql: true,
    rootValue,
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
