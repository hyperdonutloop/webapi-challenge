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

router.put('/:id', (req, res) => {
  const { project_id, description, notes } = req.body;
  const id = req.params.id;

  if(!project_id || !description || !notes) {
    res.status(400).json({ errorMessage: 'Please provide project ID, name, and description for action' })
  } else {
    actionDB.update(id, req.body)
      .then(updatedAction => {
        if (updatedAction) {
          res.status(200).json(updatedAction)
        } else {
          res.status(404).json({ errorMessage: 'The action with that ID could not be found' })
        }
      })
      .catch(error => {
        res.status(500).json({ errorMessage: 'The action information could not be modified', error })
      })
  }
})

router.delete('/:id', (req, res) => {
  actionDB.remove(req.params.id)
    .then(action => {
      if (action) {
        res.status(200).json({ message: 'The action has been destroyed 🎉' })
      } else {
        res.status(404).json({ errorMessage: 'The action with that ID does not exist' })
      }
    })
    .catch(error => {
      res.status(500).json({ errorMessage: 'The action could not be deleted', error })
    })
})

module.exports = router;
