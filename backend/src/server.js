// const { routerUser } = require('./routers/routerUser');
const { routerLogin } = require('./routers/routerLogin');
const express = require('express');
const cors = require('cors');

const app = express();
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(express.json());
app.use(cors());

app.use('/', routerLogin);

app.listen(3001, () => console.log('Listen Port 3001'))