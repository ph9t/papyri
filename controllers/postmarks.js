const postmarksRouter = require('express').Router()

const Postmark = require('../models/postmark')

postmarksRouter.get('/', async (req, res) => {
  const postmarks = await Postmark.find({})
  res.json(postmarks)
})

postmarksRouter.post('/', async (req, res) => {
  const body = req.body

  if (!(body.title && body.url)) {
    return res.status(400).json({ error: 'missing required fields' })
  }

  const postmark = new Postmark({ title: body.title, url: body.url })
  const savedPostmark = await postmark.save()

  res.json(savedPostmark)
})

module.exports = postmarksRouter
