// my first server ...(learning/practice)
var http=require('http');

var server= http.createServer((req,res)=>{
  
    res.writeHead(200,{'Content-Type':'text/plain'});
    res.end('Hey Suyash congrats for your ist server ');
});

server.listen(3000,'127.0.0.1');
console.log("yoohoo, we are live but locally");