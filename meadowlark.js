const path = require('path');
const express = require('express');
const expressHandlebars = require('express-handlebars');

const app = express();

app.use(express.static(path.join(__dirname, 'public')));
app.engine('handlebars', expressHandlebars({
  defaultLayout: 'main'
}));
app.set('view engine', 'handlebars');

const port = process.env.PORT || 3000;

app.get('/', (req, res) => res.render('home'));

const fortunes = [
  'Conquer your fears or they will conquer you.',
  'Rivers need springs.',
  'Do not fear what you don\'t know.',
  'You will have a pleasant surprice.',
  'Whenever possible, keep it simple.'
];

app.get('/about', (req, res) => {
  const fortune = fortunes[Math.floor(Math.random() * fortunes.length)];
  res.render('about', { fortune });
});

// custom 404 page
app.use((req, res) => {
  res.status(400).render('404');
});

// custom 500 page
app.use((err, req, res, next) => {
  console.error(err.message);
  res.status(500).render('500');
});

app.listen(port, () => console.log(
  `Express started on http://localhost:${port}\npress Ctrl-C to terminate.`
));
