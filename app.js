const express = require('express')
const app = express()

app.use(express.json())

app.get('/v1/explorers', (req, res) => {
    console.log(`Api Explorers GET ALL requests ${new Date()}`)
    const explorer1 = {id: 1, name: "mauri"}
    const explorer2 = {id: 2, name: "omar"}
    const explorer3 = {id: 3, name: "gaby"}
    const explorer4 = {id: 4, name: "ivan"}
    const explorers = [explorer1, explorer2, explorer3, explorer4]
    res.status(200).json(explorers)
})

module.exports = app