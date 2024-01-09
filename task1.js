const express = require('express'); //импорт
const app = express();
const port = 8000;

app.get('/', (req, res) => {
    res.send('Task 1');
});

app.get('/:name', (req, res) => {
    res.send('Echo is , ( ' + req.params.name + ' )');
});

app.listen(port, () => {
    console.log('Server online on ' + port + ' port+');
});