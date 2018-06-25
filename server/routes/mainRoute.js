const express = require('express')
const bodyParser = require('body-parser')

const db = require('./db/db')

const router = express.Router()

router.use(bodyParser.json())

router.get('/', (req, res) => {
  db.getPoems()
    .then(poems => {
      res.json(poems)
    })
    .catch(err => {
      res.status(500).send('Database error: ' + err.message)
    })
})

module.exports = router
