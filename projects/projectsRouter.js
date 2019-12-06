const express = require('express');

const router = express.Router();

const projectDB = require('../data/helpers/projectModel.js');
const actionDB = require('../data/helpers/actionModel.js');

// CRUD operations here

router.get('/', (req, res) => {
  const id = req.params.id;

  projectDB.get(id)
    .then(project => {
      res.status(200).json(project)
    })
    .catch(error => {
      res.status(500).json({ errorMessage: 'There was an error retrieving projects', error })
    })

})

router.post('/', (req, res) => {
  const id = req.params.id;
  const newProject = req.body;

  projectDB.insert(newProject)
    .then(project => {
      res.status(201).json(project)
    })
    .catch(error => {
      res.status(404).json({ errorMessage: 'The new post project could not be created', error })
    })
})

router.put('/:id', (req, res) => {
  
})

router.delete('/:id', (req, res) => {
  
})

module.exports = router;

