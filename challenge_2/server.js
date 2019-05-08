const express = require('express');
const app = express();
app.use(express.static('client'));
app.use(express.urlencoded({ extended: false }))

var port = 3005;

app.set('view engine', 'ejs');

app.get('/index', function(req, res) {
  res.render('index');
})

app.get('/uploadJson', function(req, res){
  res.render('uploadJson');
})

app.get('/', (req, res) => {
  res.writeHead(200);
  res.redirect('index')
})

app.post('/', (req, res) => {
  var data = JSON.parse(req.body.json);
  var result = Object.keys(data);
  result.splice(result.length-1, 1);
  result = result.join(', ')
  const jsonParser = data => {
    var row = Object.values(data);
    row.splice(row.length - 1, 1);
    result += '\n' + row.join(', ') ;
    if (data['children'].length != 0) {
      for (let i = 0; i < data['children'].length; i++){
       jsonParser(data['children'][i]);
      }    
    }		      
  };
  jsonParser(data);
  var split = result.split('\n');
  res.render('uploadJson', {
    split : split
  });
  res.redirect('/uploadJson');
})



app.listen(port);
console.log('Server started! At http://localhost:' + port);


