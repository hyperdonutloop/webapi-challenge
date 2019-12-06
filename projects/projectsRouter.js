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

router.post('/projects', (req, res) => {
  
})

router.put('/:id/projects', (req, res) => {
  
})

router.delete('/:id', (req, res) => {
  
})

module.exports = router;

