const express = require('express');
const app = express();
app.use(express.static('public'));
app.use(express.urlencoded({ extended: false }));
var port = 5000;

// app.set('view engine', 'ejs');

app.get('/', (req, res)=>{
  res.writeHead(200);
  res.end();
})
// app.get('/signup', (req, res) => {
//   res.render('signup')
// })

// const usernameHandler = (e) => {
//   e.preventDefault();
//   console.log(e);
// }
// // app.get('/signup', (req, res) => {
// //   res.render('signup')
// // })






app.listen(port);
console.log('Server started! At http://localhost:' + port);


