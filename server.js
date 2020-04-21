const express = require('express');
const pino = require('express-pino-logger')()

const app = express();
const port = process.env.PORT || 5000;

app.use(pino);

app.get('/my-food', (req, res) => {
    res.send({ express: 'YOUR EXPRESS BACKEND IS CONNECTED TO REACT' })
});

app.listen(port, () => console.log(`Dis server is listening on port ${port}`))
