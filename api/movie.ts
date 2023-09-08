import fetch from 'node-fetch' // MEMO: d.ts 필요함 ~
import { VercelRequest, VercelResponse } from '@vercel/node'
// MEMO: 타입스크립트를 지원하는 기능이면, d.ts 파일 없어도 됨 ~

const { APIKEY } = process.env

export default async function handler(request: VercelRequest, response: VercelResponse) {
  const { title, page, id } = JSON.parse(request.body)
  const url = id
    ? `https://omdbapi.com?apikey=${APIKEY}&i=${id}&plot=full`
    : `https://omdbapi.com?apikey=${APIKEY}&s=${title}&page=${page}`
  const res = await fetch(url)
  const json = await res.json()
  response
    .status(200)
    .json(json)
}
