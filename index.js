const express = require('express')
const router = require('./routes/myRouter')

const app = express()
app.use(router)

app.listen(8080,()=>{
    console.log("start server in port 8080")
})