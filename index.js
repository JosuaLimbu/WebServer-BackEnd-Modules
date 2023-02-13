const http = require('http');
const members = require('./members');
const fs = require("fs");
const getUsers = require('./users');
//Jangan Lupa menginstall "npm install moment"

const server = http.createServer ( async (req, res) => {
    if (req.url === '/') {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('This is the home page');
    } 
    else if (req.url === '/about') {
        const date = new Date().toISOString();
        const data = {
          status: 'success',
          message: 'response success',
          description: 'Exercise #03',
          date: date,
          data: members
        };
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(data));
    } 
    else if (req.url === '/users') {
      const users = await getUsers();
      res.writeHead(200, { "Content-Type": "application/json" });
      res.end(JSON.stringify(users));
    } 
    else {
      res.writeHead(404, { 'Content-Type': 'text/plain' });
      res.end('404 Not Found');
    }
});
const hostname = '127.0.0.1'; //atau localhost
const port = 3000;
server.listen(port, hostname, () => {
    console.log(`Server runnning at http://${hostname}:${port}/`);
});