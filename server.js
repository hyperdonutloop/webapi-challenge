const express = require('express');
const projectsRouter = require('./projects/projectsRouter.js');
const actionsRouter = require('./actions/actionsRouter.js');

const server = express();

server.use(express.json());
server.use('/api/projects', projectsRouter);

module.exports = server;

// /projects to store all projects
// /actions to store all actions
// /projects/:id/actions to view a specific project's actions