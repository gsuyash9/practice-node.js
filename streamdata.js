var http=require('http');
var fs=require('fs');

var myStream = fs.createReadStream(__dirname + '/readData.txt','utf8');
var mywriteStream = fs.createWriteStream(__dirname + '/writeData.txt');

myStream.on('data',(chunk)=>{
    console.log('new buffer added');
    console.log(chunk);
    mywriteStream.write(chunk);
})