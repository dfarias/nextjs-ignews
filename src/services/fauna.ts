import { Client } from 'faunadb'

export const fauna = new Client({
  secret: process.env.FAUNADB_KEY,
  domain: 'db.us.fauna.com'
})
//secret: 'fnAEe3opaVAAQ9_Q2FYYf0hz1Am7mGXJDUghYKte',