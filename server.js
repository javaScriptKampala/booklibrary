// Import the 'http' and 'fs' modules
var http = require("http")
var fs = require("fs")

// Create an HTTP server
var server = http.createServer(function (req,res){
    console.log("hi boss", req.url) // Log the incoming request URL

    // Check the requested URL and handle accordingly
    if(req.url === "/me" || req.url === "/"){
        // If the URL is '/me' or '/' serve 'me.html'
        res.writeHead(200, {"content-Type":'text/html'});
        fs.createReadStream(__dirname + "/me.html").pipe(res)
    }else if(req.url === "/social" || req.url === "/"){
        // If the URL is '/social', serve 'social.html
        res.writeHead(200, {"contnt-Type":'text/html'});
        fs.createReadStream(__dirname + "/social.html").pipe(res);
    }else if(req.url === "/span" || req.url === "/"){
        // If the URL is '/span', serve 'span.html
        res.writeHead(200,{"content-Type": 'text/html'});
        fs.createReadStream(__dirname + '/span.html').pipe(res);
    }else {
        // If the URL doesn't match any of the above, serve '404.html'
        res.writeHead(404, {"content-Type": 'text/html'});
        fs.createReadStream(__dirname + '/404.html').pipe(res);
    }

});

// Set the server to listen on a specified port (default is 8080)
var PORT = process.env.PORT || 8080
server.listen(PORT, function(){
    return console.log(`Listening on PORT ${PORT}`);
});

// Log a message to the console
console.log("Creative developer");