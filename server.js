var http = require("http")
var fs = require("fs")


var server = http.createServer(function (req,res){
    console.log("hi boss", req.url)

    if(req.url === "/me" || req.url === "/"){
        res.writeHead(200, {"content-Type":'text/html'});
        fs.createReadStream(__dirname + "/me.html").pipe(res)
    }else if(req.url === "/social" || req.url === "/"){
        res.writeHead(200, {"contnt-Type":'text/html'});
        fs.createReadStream(__dirname + "/social.html").pipe(res);
    }else if(req.url === "/span" || req.url === "/"){
        res.writeHead(200,{"content-Type": 'text/html'});
        fs.createReadStream(__dirname + '/span.html').pipe(res);
    }else {
        res.writeHead(404, {"content-Type": 'text/html'});
        fs.createReadStream(__dirname + '/404.html').pipe(res);
    }

})
var PORT = process.env.PORT || 8080
server.listen(PORT, function(){
    return console.log(`Listening on PORT ${PORT}`);
});
console.log("Creative developer");