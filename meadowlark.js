const path = require('path');
const express = require('express');
const expressHandlebars = require('express-handlebars');
const handler = require('./lib/handlers');

const app = express();

app.use(express.static(path.join(__dirname, 'public')));
app.engine('handlebars', expressHandlebars({
  defaultLayout: 'main'
}));
app.set('view engine', 'handlebars');

const port = process.env.PORT || 3000;

app.get('/', handler.home);

app.get('/about', handler.about);

// custom 404 page
app.use(handler.notFound);

// custom 500 page
app.use(handler.serverError);

app.listen(port, () => console.log(
  `Express started on http://localhost:${port}\npress Ctrl-C to terminate.`
));
