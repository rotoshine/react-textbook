const express = require('express')
const exphbs = require('express-handlebars')
const axios = require('axios')

const app = express()

const CMS_URL = 'https://idiots.roto.codes'
const PAGE_PER_COUNT = 6

app.engine('handlebars', exphbs())
app.set('view engine', 'handlebars')
app.use('/public', express.static('public'))

app.get('/', async (req, res) => {
  const { data: lives } = await axios.get(`${CMS_URL}/lives?_limit=${PAGE_PER_COUNT}`)
  return res.render('live', {
    layout: false,
    lives: lives.map(live => ({
      bands: live.bands,
      title: live.title,
      club: live.club,
      date: live.date,
      link: `https://idiots.roto.codes/live/${live.slug}/`,
      posterUrl: `${CMS_URL}${live.posters[0].url}`,
    })),
  })
})

app.listen(3000)
