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

export const fetchLives = async page => request(`/lives?_limit=${PAGE_PER_COUNT}&_start=${(page - 1) * PAGE_PER_COUNT}`)
