const open = require('open');
const express = require('express');
const webpack = require('webpack');
const config = require('../webpack.config');
import * as path from 'path';

const port = 3000;
const app = express();
const compiler = webpack(config);

app.use(require('webpack-dev-middleware')(compiler, {
	noInfo: true,
	publicPath: config.output.publicPath
}));

app.get('/', (req, res) => {
	res.sendFile(path.join(__dirname, '../src/index.html'));
});

app.listen(port, (err) => {
	if (err) {
		console.error(err);
	} else {
		console.log(`Listening on localhost:${port}`);
		open(`http://localhost:${port}`);
	}
});
