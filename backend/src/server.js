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


// sei que não é uma boa pratica colocar a string de conexão 'hard code', 
// fiz dessa forma por se tratar de um teste para que qualquer um tenha acesso a minha base de dados.  
mongoose.connect('mongodb+srv://sabino:mGxzIAAmO5D0zcB0@sharenergydb.fipeurz.mongodb.net/?retryWrites=true&w=majority')
.then(() => {
  app.listen(PORT, () => console.log(`Listen Port ${PORT}`));
}).catch((err) => console.log());

