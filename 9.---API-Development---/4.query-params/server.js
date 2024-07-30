//! Query Parameter example
//? `www.zomato.com/menu?pickle=extra&onion=none=bacon`

const http = require('http');
const url = require('url');

const responseHandler = (req, res)=>{
    const passedUrl = url.parse(req.url, true);
    const pathName = passedUrl.pathname;

    //? Extracting the query
    const queryParams = passedUrl.query;
    console.log(queryParams);



    res.writeHead(200, {'content-type': 'text/plain'});
    res.end('Welcome');
};

const server = http.createServer(responseHandler);

const PORT = 3000;
server.listen(PORT, ()=>{
    console.log(`Server is running on http://localhost:${PORT}.`);
})