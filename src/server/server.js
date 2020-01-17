import express from 'express';
import dotenv from 'dotenv';

dotenv.config();

const ENV = process.env.NODE_ENV;
const PORT = process.env.PORT || 3001;

const app = express();

app.get('*', (request, response) => {
  response.send({ test: true });
});

app.listen(PORT, (error) => {
  if (error) console.log(error);
  console.log(`Server running on PORT: ${PORT}`);
});
