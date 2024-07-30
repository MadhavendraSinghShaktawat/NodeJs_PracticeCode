//! Syntax
//? `https://example.com/products/:productId`:

const http = require('http');
const url = require('url');

const requestHandler = (req, res)=>{
    const passedURL = url.parse(req.url, true);
    const pathname = passedURL.pathname;
    //* Split the path name
    const pathComponent = pathname.split('/').filter(Boolean);  
    console.log(pathname, pathComponent);

    //* logic
    if (pathComponent[0]==='prroducts' && pathComponent[1]) {
        const productId = pathComponent[1];
        res.writeHead(200, {'content-type': 'text/plain'});
        res.end(`Product ID: ${productId}`)
    }else{
        res.writeHead(200, {'content-type': 'text/plain'});
        res.end("Product not found");
    }

};

//? Creating the server
const server  = http.createServer(requestHandler);

//? Starting our server
const PORT = 3000;
server.listen(PORT, ()=>{
    console.log(`Server is running on http://localhost:${PORT}.`);
})