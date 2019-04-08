const express = require('express');
const app = express();

const usersRouter = require('./routes/users');
const rootRouter = require('./routes/root');

const port = 9000;

app.set('view engine', 'hbs');
// app.set('view options', { layout: 'other' });
app.use('/inc', express.static('inc'));

app.use('/users', usersRouter);
app.use('/', rootRouter);

app.get('/hello', (req, res) => res.send('hey there'));

app.get('/numbers/:from-:to', (req, res) => {
  let a = parseInt(req.params.from);
  let b = parseInt(req.params.to);

  let html = '';

  if (a > b) {
    let t = a;
    a = b;
    b = t;
  }

  for (let x = a; x <= b; x++) {
    html += `<div>${x}</div>`;
  }

  res.send(html);
});

app.listen(port, function() {
  return console.log('Sample App ' + port + '!');
});
