/*==============MySql===============*/
const mysql = require('mysql');
var connection = mysql.createConnection({
  host: 'localhost',
  database: 'Amazon',
  user: 'root',
  password: 'student',
});

connection.connect(function(err){
  if (err){
    console.error('Error Connecting: ' + err.stack);
    return;
  }
  console.log('Connected as id ' + connection.threadId);
})



// connection.query('SELECT * FROM signup', function(err, results, fields){
//   if (err){
//     console.log('HAHA error');
//   }
//   results.forEach(result => {
//     console.log(result);
//   });
// });

const query = (options) => {
  connection.query('INSERT INTO signup (username, password, email) values (?, ?, ?)', options, (err, data)=>{
    console.log(options)
    if (err){
      console.log(err);
    } 
    console.log('message sent!')
  })
}


/*==============Node Server===============*/
const express = require('express');
const app = express();
app.use(express.static('public'));
app.use(express.urlencoded({ extended: false }));
var port = 5000;

app.get('/', (req, res) => {
  res.writeHead(200);
  res.end();
})

app.post('/', (req, res) => {
  var signup = signupParser(req.body);
  // var payment = paymentParser(req.body);
  // var shipping = shippingParser(req.body);
  query(Object.values(signup))
  res.writeHead(200);
  res.end();
})

const signupParser = (data) => {
  var obj = {};
  obj['username'] = data['username'];
  obj['password'] = data['password'];
  obj['email'] = data['email'];
  return obj;
}

const paymentParser = (data) => {
  var obj = {};
  obj['cardName'] = data['cardName'];
  obj['cvv'] = data['cvv'];
  obj['expired_month'] = data['expired_month'];
  obj['expired_year'] = data['expired_year'];
  obj['card_number'] = data['card_number'];
  return obj;
}

const shippingParser = (data) => {
  var obj = {};
  obj['Address_Line1'] = data['Address_Line1'];
  obj['cvv'] = data['cvv'];
  obj['Address_Line2'] = data['Address_Line2'];
  obj['State'] = data['State'];
  obj['Zip_Code'] = data['Zip_Code'];
  obj['Phone'] = data['Phone'];
  return obj;
}


app.listen(port);
console.log('Server started! At http://localhost:' + port);

// connection.end();


