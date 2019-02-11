const express = require('express');
const app = express();
const _ = require('lodash');

const port = 8080;

app.get('/', (request, respond) => {
	respond.send('Hello, World! YESSS');
});

app.listen(port, () => {
	console.log(`Started on port ${port}`);
});