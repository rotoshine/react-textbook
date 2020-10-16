const END_POINT = 'https://idiots.roto.codes'

const PAGE_PER_COUNT = 6

const request = async url => {
  const res = await fetch(`${END_POINT}${url}`)

  if (res.ok) {
    return await res.json()
  } else {
    throw new Error('request fail')
  }
}

export const fetchLives = async page => {
  const lives = await request(`/lives?_limit=${PAGE_PER_COUNT}&_start=${(page - 1) * PAGE_PER_COUNT}`)
  return lives.map(live => ({
    bands: live.bands,
    title: live.title,
    club: live.club,
    date: live.date,
    link: `https://idiots.band/live/${live.slug}/`,
    posterUrl: `${END_POINT}${live.posters[0].url}`,
  }))
}
