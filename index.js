const server = require('./server.js');

server.listen(5000, () => {
  console.log('\n* Server Running on http://localhost:5000 *\n');
})

// watching for connections on port 5000

// configured an npm script called *server* and *start* in package.json under scripts. 
// made nodemon a dev dependency by npm i -D nodemon