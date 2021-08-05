const express = require('express')
const app = express()

const port = process.env.PORT || 5000

app.all('*', (req, res) => {
    res.send('Error 404')
})

app.listen(port, () => {
    console.log(`Server Running on Port ${port}`)
})