require('dotenv').config()
const express = require('express')
const app = express()
const port = 5500;

app.get('./', (req, res) =>{
  res.send('Where There is solar, There is SafierTech Solar')
})

app.listen(process.env.PORT,()=>{
  console.log(`Example app listening on port ${port}`)
})