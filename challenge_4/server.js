const express = require('express');
const app = express();
app.use(express.static('./public'));
// app.use(express.urlencoded({ extends: false }));
const PORT = 5000;


app.get('/', (req, res) => {
  res.writeHead(200);
  res.end();
});

app.listen(PORT, ()=>(
  console.log(`Listening to port ${PORT}`)
))