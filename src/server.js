const express     = require('express')
const MongoClient = require('mongodb').MongoClient
const app         = express()

MongoClient.connect('mongodb://localhost:27017/LucidProductions', (err, db) => {
  if (err) throw err
  console.log('DB Connected')
})





app.listen(3001, () => {
  console.log('App listening on port 3001')
})
