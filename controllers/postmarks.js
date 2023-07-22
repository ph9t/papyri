const postmarksRouter = require('express').Router()

const Postmark = require('../models/postmark')

postmarksRouter.get('/', async (req, res) => {
  const postmarks = await Postmark.find({})
  res.json(postmarks)
})

module.exports = postmarksRouter
