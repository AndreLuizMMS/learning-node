import { setServers } from 'dns';
import http, { Server } from 'http';

const host = 'localhost';
const port = 6969;

const server = http.createServer((req, res) => {
  if (req.method === 'POST') {
    let body = '';

    req.on('data', chunk => {
      body = chunk;
    });
    req.on('close', s => {
      console.log('oq vem como arg', s);
      console.log(body);
    });

    res.writeHead(201); // 201 successful POST
    res.end('end');
  } else {
    res.writeHead(200); //successful GET
    res.end('hi from my API');
  }
});

server.listen(port, host, () => {
  console.log(`server running on ${host}:${port}`);
});
