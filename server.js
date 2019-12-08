const express = require('express'); // importing the express package (has to be installed: npm i express)

const projectsRouter = require('./projects/projectsRouter.js');
const actionsRouter = require('./actions/actionsRouter.js');

const server = express(); // creates the server

server.use(express.json()); // you NEED express.json for POST and PUT requests because you are *sending data* (in the form of a data object) to the server and asking the server to accept or store that data(object), which is enclosed in the body (req.body) of that POST or PUT request.
// This is built within express to recognize an incoming request as a JSON object.
server.use('/api/projects', projectsRouter); // telling the server to use a specific endpoint, passing in "component" and in that component all routes have this address (base URL)
server.use('/api/actions', actionsRouter);

module.exports = server; 

// /projects to store all projects
// /actions to store all actions
// /projects/:id/actions to view a specific project's actions