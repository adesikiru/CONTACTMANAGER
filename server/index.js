import express from 'express'
import dotenv from 'dotenv'

const app = express()
dotenv.config({ path: './config/.env' })

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT} ademol`)
})

 


















/*  

 app.get('/', (req, res) => {
   res.send('Hello World!')
 })

 app.listen(PORT, () => {
   console.log(`Server is running on http://localhost:${PORT}`)
 }) */