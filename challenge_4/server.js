// var mysql = require('mysql');
// var connection = mysql.createConnection({
// 	host: 'http://localhost',
// 	user: 'root',
// 	password: 'student',
// 	database: 'score'
// });

// connection.connect();

// connection.query(
// 	'INSERT INTO score (player1, player2) values (?, ?)',
// 	options,
// 	(error, result) => {
// 		if (error) {
// 			console.log('Message Failed to be Sent!');
//     }
//     console.log(results.insertId);
// 	}
// );

const express = require('express');
const app = express();
app.use(express.static('./public'));
// app.use(express.urlencoded({ extends: false }));
const PORT = 5000;

app.get('/', (req, res) => {
	res.writeHead(200);
	res.end();
});

app.listen(PORT, () => console.log(`Listening to port ${PORT}`));
