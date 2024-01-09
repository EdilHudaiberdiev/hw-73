const express = require('express');
const app = express();
const port = 8000;
const password = 'elephant';

app.get('/', (req, res) => {
    res.send('Task 2');
});

app.get('/', (req, res) => {
    res.send('Task 2');
});


app.listen(port, () => {
    console.log('Server online on ' + port + ' port+');
});