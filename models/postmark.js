const mongoose = require('mongoose')

const postmarkSchema = new mongoose.Schema({
  title: String,
  url: String,
})

postmarkSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString()

    delete returnedObject._id
    delete returnedObject.__v
  },
})

module.exports = mongoose.model('Postmark', postmarkSchema)
