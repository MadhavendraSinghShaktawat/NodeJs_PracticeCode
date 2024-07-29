const http = require("http");
const url = require("url");

//! Here we will create certain routes
    //? home: /
    //? about: /about


//* Step2. Define the handler
const requestHandler = (req, res) => {



    console.log(req.url);
    //? passing the url
    const passedURL = url.parse(req.url, true);
    // console.log(passedURL);

    //? Creating HOME Route
    if (passedURL.pathname==='/' && req.method === 'GET'){
        // console.log(req.method);
        //send response 
        res.writeHead(200, {'content-type': 'text/plain'});
        res.end("HOME Route");
    }
    //? Creating ABOUT Route
    else if (passedURL.pathname==='/about' && req.method === 'GET'){
        // console.log(req.method);
        //send response 
        res.writeHead(200, {'content-type': 'text/plain'});
        res.end("ABOUT Route");
    }
    else{
        res.writeHead(200, {"content-type": "text/plain"});
        res.end("Page not FOund")
    }
};

//* Step3. Create the server
const server = http.createServer(requestHandler);

//* Step4. Start our server
const PORT = 3000;
server.listen(PORT, ()=>{
    console.log(`The server is running on http://localhost:${PORT}`);
});