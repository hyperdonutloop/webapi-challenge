const express = require('express');

const router = express.Router();

const actionDB = require('../data/helpers/actionModel.js');

router.get('/', (req, res) => {
  const id = req.params.id;

  actionDB.get(id)
    .then(action => {
      res.status(200).json(action)
    })
    .catch(error => {
      res.status(500).json({ errorMessage: 'There was an error retrieving actions', error })
    })
})

router.post('/', (req, res) => {
  const newAction = req.body;

  actionDB.insert(newAction)
    .then(action => {
      res.status(201).json(action)
    })
    .catch(error => {
      res.status(404).json({ errorMessage: 'The new action could not be created', error })
    })
})

router.put('/', (req, res) => {
  
})

router.delete('/', (req, res) => {
  
})

module.exports = router;
