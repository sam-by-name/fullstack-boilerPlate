exports.seed = (knex, Promise) => {
  return knex('poems').del()
    .then(() => {
      return knex('poems').insert([
        {id: 99001, title: 'The eye doth never lie', poem: 'You can hide your thoughts from you words, but you cannot hide the truth from you eyes. The eyes tell a thousand tales and none of them are a lie.', authur: 'SamSanders', date_created: '02/08/1988'}
      ])
    })
}
