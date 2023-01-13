// const { routerUser } = require('./routers/routerUser');
const { routerLogin } = require('./routers/routerLogin');
const { handleError } = require('./middlewares/handleError');
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
app.use(handleError);

app.listen(PORT, () => console.log(`Listen Port ${PORT}`));
