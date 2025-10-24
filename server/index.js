 import express from 'express'

 const app = express()

 app.listen(3000, () => {
   console.log('Server is running on http://localhost:3000 ade')
 })




















/*  const PORT = process.env.PORT || 5000

 app.get('/', (req, res) => {
   res.send('Hello World!')
 })

 app.listen(PORT, () => {
   console.log(`Server is running on http://localhost:${PORT}`)
 }) */