const requestLogger = (req, res, next) => {
  console.log('Method: ', req.method)
  console.log('Path:   ', req.path)
  console.log('Body:   ', req.body)
  console.log('------')

  next()
}

const errorHandler = (err, req, res, next) => {
  next(err)
}

const unknownEndpoint = (req, res) => {
  res.status(404).json({ error: 'unknown endpoint' })
}

module.exports = {
  requestLogger,
  errorHandler,
  unknownEndpoint,
}
