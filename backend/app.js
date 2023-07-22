const express = require('express')
const mongoose = require('mongoose')

const postmarksRouter = require('./controllers/postmarks')

const config = require('./utils/config')
const logger = require('./utils/logger')
const middleware = require('./utils/middleware')

const app = express()

mongoose.set('strictQuery', false)
mongoose
  .connect(config.MONGODB_URI)
  .then(result => {
    logger.info('Succesfully connected to the MongoDB database')
  })
  .catch(error => {
    logger.error('Failed to connect to the MongoDB database: ', error.message)
  })

app.use(express.json())
app.use(middleware.requestLogger)

app.use('/api/postmarks', postmarksRouter)

app.use(middleware.unknownEndpoint)
app.use(middleware.errorHandler)

module.exports = app
