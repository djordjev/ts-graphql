import express from 'express';
import expressGraphQL from 'express-graphql';
import schema from '../schema/index';

const app: express.Application = express();
const port: number = 3000;

app.use(
  '/graphql',
  expressGraphQL({
    graphiql: true,
    schema
  })
);

app.get('/', (req: express.Request, res: express.Response) => {
  res.send('homepage');
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
