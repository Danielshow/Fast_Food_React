import express from 'express';
import path from 'path';

const app = express();

app.use(express.static('dist'));

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'index.html'));
});

app.listen(process.env.PORT || 7000, () => {
  // eslint-disable-next-line no-console
  console.log(`App listened on port ${process.env.PORT || 7000}`);
});
