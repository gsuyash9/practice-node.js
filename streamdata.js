var http=require('http');
var fs=require('fs');




var server = http.createServer((req,res)=>{
    res.writeHead(200,{'Content-Type':'text/plain'});

    var myStream = fs.createReadStream(__dirname + '/readData.txt','utf8');
    myStream.pipe(res);
});

server.listen(3001,'127.0.0.1');
console.log("yes we are live");