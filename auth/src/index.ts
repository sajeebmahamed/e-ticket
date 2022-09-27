import express from 'express'
import {json} from "body-parser"

const app = express()
app.use(json())

app.get('/api/users/currentuser', (req, res) => {
    res.send('Hi there!')
})

app.get('/api/users/user', (req, res) => {
    res.send('Hi there Sajeeb!')
})


app.get('/api/users/ok', (req, res) => {
    res.send('Hi there ok!')
})

const port = 3000
app.listen(port, () => {
    console.log(`Listening on port ${port}.`)
})