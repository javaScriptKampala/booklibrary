var http = require("http")
var fs = require("fs")


var server = http.createServer(function (req,res){
    console.log("hi boss", req.url)

    if(req.url === "/me" || "/"){
        res.writeHead(200,{"content-Type":'text/html'})
        fs.createReadStream(__dirname + "/me.html").pipe(res)
    }
    if(req.url === "/social" || "/"){
        res.writeHead(200,{"contnt-Type":'text/html'})
        fs.createReadStream(__dirname + "/social.html").pipe(res)
    }
    if(req.url === "/span" || "/"){
        res.writeHead(200,{"content-Type": 'text/html'})
        fs.createReadStream(__dirname + '/span.html').pipe(res)
    }

})
var PORT = process.env.PORT || 8080
server.listen(PORT, function(){
    return console.log(`listening on PORT ${PORT}`)
})
console.log("Creative developer")