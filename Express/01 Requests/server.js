import express from 'express'
const app = express()
const port = 3001

let posts = []

app.post("/post",(req,res)=>{
  let post = req.body?.text
  posts.push(post)
  console.log(posts)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})