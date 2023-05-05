import express from "express"
import cors from "cors"

const app= express()
app.use(cors())

appp.get ("/", (req, res)=> {
  res.send("Hello Docker!🐕")
})

app.listen(3000, () => {
  console.log ('Listen to http://localhost:3000')
})