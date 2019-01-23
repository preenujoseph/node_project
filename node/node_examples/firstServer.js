var httpVariable = require('http')

var server = httpVariable.createServer(doItNow)

function doItNow(myrequest, myresponse){
    myresponse.writeHead(200, {'Content-Type':'text/html'})
    myresponse.write("<h1><u>Hello from node server</u></h1>")
    myresponse.end()
}

server.listen(8888)