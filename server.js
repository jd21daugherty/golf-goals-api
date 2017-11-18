// include basic node modules
const express = require('express');
const app = express();
const bodyparser = require('body-parser');
const fbAdmin = require('./global-utils/firebase/admin');

// include global router
const routes = require('./router');

fbAdmin.initFB();

// for POST request parsing
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }));

app.use('/', routes);

app.listen(3000, () => console.log('Example app listening on port 3000!'));