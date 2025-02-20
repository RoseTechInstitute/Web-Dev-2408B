import express from 'express'
const app = express()
const port = 3001

app.get('/hello', (req, res) => {
  res.send('Hello World!')
})
app.get('/', (req, res) => {
  res.send('Hello This is / Req')
})
app.get('/developer', (req, res) => {
  res.send({
    "name":"Rafay",
    "GithubAccount":"",
  })
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})