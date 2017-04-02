let express = require('express');
let path = require('path');

let port = 3000;
let app = express();

app.get('/', (req, res) => {
	res.sendFile(path.join(__dirname, '../src/index.html'))
});

app.listen(port, (err) => {
	if (err) {
		console.error(err);
	} else {
		console.log(`Listening on localhost:${port}`)
	}
});
