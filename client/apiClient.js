import request from 'superagent'

export function getAllShoes () {
  return request
    .get('/api/vi/poems')
    .then(res => {
      return res.body
    })
    .catch(err => {
    // eslint-disable-next-line no-console
      console.error(err)
    })
}
