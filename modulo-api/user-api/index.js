const express = require('express');
const bodyParser = require('body-parser');
const users = require('./routes/users');

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use('/api/users', users);

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});