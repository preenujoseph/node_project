var d1=require('./library/datelib')
var httpVariable = require('http')

var server = httpVariable.createServer(bringItNow)

function bringItNow(myrequest, myresponse){
    myresponse.writeHead(200, {'Content-Type':'text/html'})
    myresponse.write(d1.dateLibrary() + "<br>")
    myresponse.write(d1.stringLibrary())
    myresponse.end()
}

server.listen(8888)