const express = require('express')
const explorers = require('info')
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

app.get('/v1/explorers/:id', (req, res) => {
    console.log(`API Explorers GET request ${new Date()}`)
    console.log(`Getting explorer with id ${req.params.id}`)
    const explorer = {id: req.params.id, name: "mauri"}
    res.status(200).json(explorer)
})

app.post('/v1/explorers', (req, res) => {
    console.log(`API Explorers POST request ${new Date()}`)
    const requestBody = req.body // params of a client
    res.status(201).json({message: "created", body:requestBody})
})

app.put('/v1/explorers/:id', (req, res) => {
    console.log(`API Explorers PUT request ${new Date()}`)
    console.log(`Update exporer with id ${req.params.id}`)
    const requestBody = req.body // params of a client
    res.status(200).json({message: "Updated!", body: requestBody})
})

app.delete('/v1/explorers/:id', (req, res) => {
    console.log(`API Explorers DELETE request ${new Date()}`)
    console.log(`Delete exporer with id ${req.params.id}`)
    const requestBody = req.body // params of a client
    res.status(200).json({message: "Deleted!", body: requestBody})
})

module.exports = app