import * as express from 'express';
const app = express();

app.use('/index.html',
    express.static('src')
);

app.listen(8080, () => console.log('App started on http://localhost:8080'));