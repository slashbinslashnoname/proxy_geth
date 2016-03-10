
var express = require('express');
var request = require("request");
var bodyParser = require('body-parser')
var config= require("./config").Config

const gethRpcUrl= "http://localhost:8545";


var app = express();
app.use( bodyParser.json() );     


app.get('/', function(req, res) {
   res.send('etherlab :)');
});



function authorize(req){

  return  typeof req.body.method !== 'undefined' && req.body.method 
         && (config.authorized_calls.indexOf(req.body.method) >-1)  
}

app.post('/', function(req,res) {

     if (authorize(req) || !config.enforce){
       console.log(req.body.method)
       var data = JSON.stringify(req.body) 
       var fwd_req = {
          uri: 'http://'+config.geth_addr+':'+config.geth_port,
          method: "POST",
          headers: {
              'content-type': 'application/json',
               'content-length': data.length
          },
       }
       
      var r = request.post(fwd_req)
      r.write(JSON.stringify(req.body))
      r.pipe(res,  {end:true})
     }
      else {
        console.log('denied ' + req.body.method)
        res.json({ error : {message: "unauthorized"}})
      }

})

app.listen(3000, function () {
    console.log('listening on port 3000!');
});


