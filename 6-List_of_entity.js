
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

var EmplyeeInfo=function(req, res){
  console.log("Invoking  rest api for Customer detals ");
  var Employee = [
    {Empid:1, Name:"Ram",country:"Australia",age:26 , County:"India"},
	  {Empid:2, Name:"Sam",country:"Australia",age:24 , County:"Japan"},
	    {Empid:3, Name:"Ali",country:"Australia",age:86 , County:"china"},
		  {Empid:4, Name:"ahmed",country:"Australia",age:65 , County:"Uk"},
		    {Empid:5, Name:"Babu",country:"Australia",age:78 , County:"india"},
			  {Empid:6, Name:"John",country:"Australia",age:50 , County:"Uk"},
	
  ];
  res.send(Employee);
};



// setting router to map requests  with controllers
app.get ('/employees',EmplyeeInfo);
app.get ('/customers',CustomerInfo);
var server = app.listen(8088, function () {
  var host = server.address().address
  var port = server.address().port
  console.log("Example app listening at http://localhost:8088", host, port)
}) 