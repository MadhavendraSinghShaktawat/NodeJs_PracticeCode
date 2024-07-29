//* Step1. Import Required modules
const { create } = require("domain");
const http = require("http");
// console.log(http);

//* Step2. Define the handler
const requestHandler = (req, res) => {
    //send response 
    res.writeHead(200, {'content-type': 'text/plain'});
    res.end("Hello World");
};

//* Step3. Create the server
const server = http.createServer(requestHandler);

//* Step4. Start our server
const PORT = 3000;
server.listen(PORT, ()=>{
    console.log(`The server is running on http://localhost:${PORT}`);
});