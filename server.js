const express = require('express');
const app = express();

app.use('/',
    express.static('src')
);

app.listen(80, () => console.log('App started on http://localhost:80'));