const express = require('express');
const app = express();
const bodyparser = require('body-parser');

const routes = require('./router');

// for POST request parsing
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }));

app.use('/', routes);

app.listen(3000, () => console.log('Example app listening on port 3000!'));