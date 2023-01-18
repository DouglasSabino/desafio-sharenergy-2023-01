const { routerUser } = require('./routers/routerUser');
const { routerLogin } = require('./routers/routerLogin');
const { routerRememberMe } = require('./routers/routerRememberMe');
const { routerClients } = require('./routers/routerClients');
const { handleError } = require('./middlewares/handleError');
const mongoose = require('mongoose');
const express = require('express');
const cors = require('cors');
require('dotenv/config');

const app = express();
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(express.json());
app.use(cors());

const { PORT } = process.env;

app.use('/', routerLogin);
app.use('/rememberme', routerRememberMe);
app.use('/clients', routerClients);
app.use('/user', routerUser);
app.use(handleError);

mongoose.connect('mongodb+srv://sabino:mGxzIAAmO5D0zcB0@sharenergydb.fipeurz.mongodb.net/?retryWrites=true&w=majority')
.then(() => {
  app.listen(PORT, () => console.log(`Listen Port ${PORT}`));
}).catch((err) => console.log());

