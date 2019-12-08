require('dotenv').config();

const server = require('./server.js');

// add env port. if there is no env port use 5000
const port = process.env.PORT || '5000';

server.listen(port, () => {
  console.log(`\n* Server Running on http://localhost:${port} *\n`);
})

// watching for connections on port 5000

// configured an npm script called *server* and *start* in package.json under scripts. 
// made nodemon a dev dependency by npm i -D nodemon