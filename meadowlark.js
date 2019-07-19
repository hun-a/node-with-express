const express = require('express');

const app = express();

const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.type('text/plain');
  res.send('Meadowlark Travel');
});

app.get('/about', (req, res) => {
  res.type('text/plain');
  res.send('About Meadowlark Travel');
});

// custom 404 page
app.use((req, res) => {
  res.type('text/plain');
  res.status(400).send('404 - Not found');
});

// custom 500 page
app.use((err, req, res, next) => {
  console.error(err.message);
  res.type('text/plain');
  res.status(500).send('500 - Server Error');
});

app.listen(port, () => console.log(
  `Express started on http://localhost:${port}\npress Ctrl-C to terminate.`
));
