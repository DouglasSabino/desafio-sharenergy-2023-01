const { routerUser } = require('./routers/routerUser');
const express = require('express');


const app = express();
app.use(express.json());

app.use('/', routerUser);

app.listen(3000, () => console.log('Listen Port 3000'))