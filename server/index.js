var express = require('express');
var app = express();
app.use(express.static(__dirname + '/../public'));

// app.get('/', (req, res)=>res.send('Hello World!'))

app.listen(3000, ()=>console.log('App listening to port 3000!'));