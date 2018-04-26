var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.get('/', function (req, res) {
res.send('Hello World!');
});


// Tell express to use the body-parser middleware and to not parse extended bodies
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());
 
// // Route that receives a POST request to /sms
// app.post('/', function (req, res) {
//   res.send('POST request to the homepage');
//   console.log(res.send)
// })
app.post('/', function (req, res) {
var number = parseInt(req.body.number);
var m = parseInt(req.query.m);
var entry = parseInt(m * number);
console.log(req.body);
console.log(req.query);
console.log(entry);

res.json(entry);

});

// app.post('/?m=', { json: {key: 'number'} } , function(req, res,body){ 
  
//   // this.number = 4;
//   // console.log(this.number);

// });

app.listen(3000, function () {
console.log('Example app listening on port 3000!');
});