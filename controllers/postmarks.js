const postmarksRouter = require('express').Router()

const Postmark = require('../models/postmark')

postmarksRouter.get('/', (req, res) => {
  Postmark.find({}).then(postmarks => {
    res.json(postmarks)
  })
})

module.exports = postmarksRouter
