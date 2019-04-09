const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const app = express();
const hbs = require('hbs');

const db = require('./config/db');

const rootRouter = require('./routes/root');
const usersRouter = require('./routes/users');
const numbersRouter = require('./routes/numbers');

const port = 9000;

app.use(cookieParser());
app.use('/inc', express.static(path.join(__dirname, 'inc')));
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials');
app.use((req, res, next) => {
  if (req.cookies.vcount == undefined) {
    req.vcount = 1;
    res.cookie('vcount', 1);
  } else {
    req.vcount = parseInt(req.cookies.vcount) + 1;
    res.cookie('vcount', req.vcount);
  }
  next();
});

app.use('/', rootRouter);
app.use('/users', usersRouter);
app.use('/numbers', numbersRouter);

app.listen(port, function() {
  db.init();
  return console.log('Sample App ' + port + '!');
});
