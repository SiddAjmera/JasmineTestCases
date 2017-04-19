// var http = require("http");
// var server = http.createServer(function(request, response) {
//     // response.writeHead(200);
// response.writeHead(200, {"Content-Type": "application/json"});
// response.write("data", {"foo": "bar"});
// //   response.write("<!DOCTYPE "html">");
// //   response.write("<html>");
// //   response.write("<head>");
// //   response.write("<title>Hello World Page</title>");
// //   response.write("</head>");
// //   response.write("<body>");
// //   response.write("Hello World!");
// //   response.write("</body>");
// //   response.write("</html>");
//   response.end();
// });

// server.listen(80);
// console.log("Server is listening");

(function() {

    function a(callback) {
        console.log("");
        // Mocked data that would be fetched from a service.
        var data = {
            foo: "bar"
        };
        callback(data);
    }

    function callback(data) {
        console.log("this is depending on some data that a will give it.");
        console.log("The data that was returned by a is : ", JSON.stringify(data));
    }

    a(callback);

}());