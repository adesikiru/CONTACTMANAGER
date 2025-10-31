import express from 'express'
import dotenv from 'dotenv'
import './config/db.js'

const app = express()
/* dotenv.config({ path: './config/.env' }) */
dotenv.config();
const PORT = process.env.PORT || 3000


app.listen(PORT, () => {
  console.log(`Serv
    er is running on http://localhost:${PORT} ademOla
    `)
})