var express = require('express');
var app = express();
const path = require('path');

const port = process.env.PORT || 3000 ;

// const port = 3000;

// const cors = require('cors');
// app.use(cors()) ;
// app.use(function(req,res,next){
// 	res.setHeader('Access-Control-Allow-Origin','*'); //http://localhost:3000,
// 	res.setHeader('Access-Control-Allow-Methods','GET, POST, OPTIONS, PUT,PATCH, DELETE');
// 	res.setHeader('Access-Control-Allow-Headers','*');
// 	res.setHeader('Access-Control-Allow-Credentials','true');
// 	next();
// });

const bodyparser = require('body-parser');

var distDir = __dirname + "/dist/";
app.use(express.static(distDir));


const cors = require('cors');
app.use(cors()) ;
app.use(function(req,res,next){
	res.setHeader('Access-Control-Allow-Origin','*'); //http://localhost:3000,
	res.setHeader('Access-Control-Allow-Methods','GET, POST, OPTIONS, PUT,PATCH, DELETE');
	res.setHeader('Access-Control-Allow-Headers','*');
	res.setHeader('Access-Control-Allow-Credentials','true');
	next();
});

app.use(bodyparser.urlencoded({extended:true}));
app.use(bodyparser.json());

const api = require('./server/routes/api');


app.use('/api',api);

app.listen(port,function(){
    console.log("Server running on localhost:" + port);
});



// "start": "concurrently \"npm run server-api\" \"npm run server\" ",
// "server": "ng serve --proxy-config proxy.config.json",
// "server-api": "nodemon server.js --watch server",
