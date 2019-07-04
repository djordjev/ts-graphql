import express from 'express';

const app: express.Application = express();
const port: number = 3000;

app.get('/', (req: express.Request, res: express.Response) => {
  res.send('zdravo svete');
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
