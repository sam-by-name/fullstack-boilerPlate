exports.up = (knex, Promise) => {
  return knex.schema.createTable('poems', (table) => {
    table.increments().primary()
    table.string('title')
    table.string('poem')
    table.string('authur')
    table.date('date_created')
  })
}

exports.down = (knex, Promise) => {
  return knex.schema.dropTable('poems')
}
