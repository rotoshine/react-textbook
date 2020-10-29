const liveData = require('./lives.json')

export default (req, res) => {
  res.statusCode = 200
  res.json(liveData)
}
