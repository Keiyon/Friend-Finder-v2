var express = require ("express");
var bodyParser = require ("body-parser");
var path = require ("path");
var http = require("http");
var PORT = 8080;



function handleRequest(request, response) {
    response.end("It works: " + request.url);

}

var server = http.createServer(handleRequest);

server.listen(PORT, function () {
    console.log("Server listening on: http//localhost:%s", PORT);
});

// $("btn").click(function() {
//     alert ("The");
// });

// document.getElementById()

var app = express();
var PORT = process.env.PORT || 8080;

app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());

require(".app/routing/apiRoutes")(app);
require("./routing/htmlRoutes")(app);

app.listen(PORT, function () {
    console.log("App listening on PORT: " + PORT);
});