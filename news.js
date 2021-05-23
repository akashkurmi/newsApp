const request= require('request');
var country="country="+"in"
var language="category="+"sports"

const url="http://newsapi.org/v2/top-headlines?"+country+"&"+language+"&apiKey=d01ba2fb17c343d9bccab848b38f1b1d"

request({url:url},(error,res)=>{
    // console.log(res)
    const data=JSON.parse(res.body)
    console.log(data)

})

// const http=require("http");

// http.createServer(function(request,response){

    // response.writeHead(200, {'Content-Type': 'text/plain'});
    //  response.end('Hello World\n');
// }).listen(3000);