const knex = require('knex')
const config = require('../../knexfile').development
const dbTest = knex(config)

module.exports = {
  getPoems,
  getPoem
}

function getPoems (db = dbTest) {
  return db('poems')
    .select()
}

function getPoem (id, db = dbTest) {
  return db('poems')
    .where('id', id)
    .select()
}
// function getAuthor (id, db = dbTest) {
// }
