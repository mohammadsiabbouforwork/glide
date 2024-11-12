import http from 'http'
import fs from 'fs'
import path from 'path'
import express from 'express'

const app = express()
const __dirname = path.resolve()

// Serve static files from the 'public' directory
console.log(path.join(__dirname, '/../dist'))
app.use(express.static(path.join(__dirname, '/../dist')))

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, '/test.html'))
})
// Start the server
const port = 3000 // Specify the port you want to use
app.listen(port, () => {
    console.log(`Server is running and listening on port ${port}`)
})
