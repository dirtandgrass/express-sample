const express = require('express');
const app = express();
const port = 9000;

app.get('/', (req, res) => res.send('Hello World!!'));
app.get('/:text', (req, res) => res.send(req.params.text));

app.listen(port, () => console.log(`Sample App ${port}!`));
