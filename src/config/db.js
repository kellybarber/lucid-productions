const MongoClient = require('mongodb').MongoClient
const url         = 'mongodb://localhost:27017/LucidProductions'

let state = {
  db: null
}

MongoClient.connect(url, (err, database) => {
  if (err) throw (err)

  state.db = database
  console.log('DB Ready');
})

module.exports = state.db
