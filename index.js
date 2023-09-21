import express from 'express';
console.log('hejhej');

const app = express();

app.use(express.static('public'));

const port = 8888;
app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
