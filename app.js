const express = require('express');
const authPath = require('./routes/api/server');
const app = express();

app.use('/', authPath);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log('Your server is ready'));
