
var express = require('express');
var app = express();

//Reusable controllers
var CustomerInfo=function(req, res){
  console.log("Invoking  rest api for Customer detals ");
  var customer = [
    {id:1, Name:"John",country:"Australia",age:50 , company:"oracle"},
	  {id:2, Name:"Jack",country:"USA",age:34 , company:"ubisoft"},
	    {id:1, Name:"Thomas",country:"canada",age:29 , company:"Seed Info tech"},
		  {id:1, Name:"Elly",country:"Norway",age:41 , company:"MindTree"},
		    {id:1, Name:"Tom ",country:"Japan",age:50 , company:"Tencent"},
    
  ];
  res.send(customer);
};



// setting router to map requests  with controllers
app.get ('/customers',CustomerInfo);
var server = app.listen(8086, function () {
  var host = server.address().address
  var port = server.address().port
  console.log("Example app listening at http://localhost:8086", host, port)
}) 