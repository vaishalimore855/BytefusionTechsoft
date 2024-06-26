/***********************************Create the Server *********************** */
// const http = require('http');

// const hostname = '127.0.0.1';
// const port = 3000;

// const server = http.createServer((req, res) => {
//   res.statusCode = 200;
//   res.setHeader('Content-Type', 'text/plain');
//   res.end('Hello, World!\n');
// });

// server.listen(port, hostname, () => {
//   console.log(`Server running at http://${hostname}:${port}/`);
// });

/***********************************Routing using http module************************/
// const http = require('http');

// const hostname = '127.0.0.1';
// const port = 3000;

// const server = http.createServer((req, res) => {
//   res.statusCode = 200;
//   res.setHeader('Content-Type', 'text/plain');

//   if (req.url === '/' && req.method === 'GET') {
//     res.end('Hello, World!\n');
//   } else if (req.url === '/about' && req.method === 'GET') {
//     res.end('About us page\n');
//   } else if (req.url === '/contact' && req.method === 'GET') {
//     res.end('Contact us page\n');
//   } else {
//     res.statusCode = 404;
//     res.end('Not Found\n');
//   }
// });

// server.listen(port, hostname, () => {
//   console.log(`Server running at http://${hostname}:${port}/`);
// });



/*********************************** * Building a very simple API:*******************/

// 1.using http module
// const http = require('http');

// const hostname = '127.0.0.1';
// const port = 3000;

// const server = http.createServer((req, res) => {
//   res.setHeader('Content-Type', 'application/json');
//   if (req.url === '/api' && req.method === 'GET') {
//     res.statusCode = 200;
//     res.end(JSON.stringify({ message: 'Hello, this is your API!' }));
//   } else {
//     res.statusCode = 404;
//     res.end(JSON.stringify({ message: 'Not Found' }));
//   }
// });

// server.listen(port, hostname, () => {
//   console.log(`Server running at http://${hostname}:${port}/`);
// });

/********************************using express**************************************/
// const express = require('express');
// const app = express();
// const port = 3000;

// app.get('/api', (req, res) => {
//   res.json({ message: 'Hello, this is your API!' });
// });

// app.use((req, res) => {
//   res.status(404).json({ message: 'Not Found' });
// });

// app.listen(port, () => {
//   console.log(`Server running at http://localhost:${port}/`);
// });



/********************************Parsing the variable from URLs************************ */
const http = require('http');
const url = require('url');

const server = http.createServer((req, res) => {
  const parsedUrl = url.parse(req.url, true);
  const productId = parsedUrl.pathname.split('/')[2];
  const queryParameters = parsedUrl.query;

  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end(`Product ID: ${productId}, Query Parameters: ${JSON.stringify(queryParameters)}`);
});

const port = 3000;
server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
/********************************************************************** */