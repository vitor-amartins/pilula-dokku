const express = require('express');

require('dotenv').config();

const app = express();

app.get('/', (req, res) => res.send({ message: 'Hello World!'}));

const port = process.env.PORT || 3456;
console.log('Olha, uma alteração!');
app.listen(port, () => console.log(`Listening on port ${port}`));
