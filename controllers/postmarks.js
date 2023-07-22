const postmarksRouter = require('express').Router()

const Postmark = require('../models/postmark')

postmarksRouter.get('/', async (req, res) => {
  const postmarks = await Postmark.find({})
  res.json(postmarks)
})

postmarksRouter.get('/:id', async (req, res) => {
  const postmark = await Postmark.findById(req.params.id)

  if (postmark) {
    res.json(postmark)
  } else {
    res.status(404).end()
  }
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

postmarksRouter.put('/:id', async (req, res) => {
  const body = req.body

  if (!(body.title && body.url)) {
    return res.status(400).json({ error: 'missing required fields' })
  }

  const postmark = {
    title: body.title,
    url: body.url,
  }

  const updatedPostmark = await Postmark.findByIdAndUpdate(
    req.params.id,
    postmark,
    {
      new: true,
    }
  )

  res.json(updatedPostmark)
})

module.exports = postmarksRouter
