import express from 'express';

const app = express();

app.use(express.static('dist'));

app.listen(process.env.PORT || 7000, () => {
  // eslint-disable-next-line no-console
  console.log(`App listened on port ${process.env.PORT || 7000}`);
});

