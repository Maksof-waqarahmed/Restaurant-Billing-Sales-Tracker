import express from 'express'
import { Request, Response } from 'express';
const app = express()
const port = process.env.PORT;

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`App listening on port ${port}`)
})

// https://github.com/tuanlc/express-prisma-postgresql-boilerplate
// https://github.com/antonio-lazaro/prisma-express-typescript-boilerplate