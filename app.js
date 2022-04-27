const express = require('express')
const explorers = require('./info')
const app = express()

app.use(express.json())

app.get('/v1/explorers', (req, res) => {
    console.log(`Api Explorers GET ALL requests ${new Date()}`)
    res.status(200).json(explorers)
})

app.get('/v1/explorers/:id', (req, res) => {
    console.log(`API Explorers GET request ${new Date()}`)
    console.log(`Getting explorer with id ${req.params.id}`)
    const explorer = explorers.find(e => e.id == req.params.id)
    res.status(200).json(explorer)
})

app.post('/v1/explorers', (req, res) => {
    console.log(`API Explorers POST request ${new Date()}`)
    const requestBody = req.body // params of a client
    requestBody.id = explorers.at(explorers.length-1).id + 1
    explorers.push(requestBody)
    // 201 is 'Created'
    res.status(201).json({message: "created", new_explorer:requestBody})
})

app.put('/v1/explorers/:id', (req, res) => {
    console.log(`API Explorers PUT request ${new Date()}`)
    console.log(`Update exporer with id ${req.params.id}`)
    const requestBody = req.body // params of a client
    
    new_explorer = requestBody
    new_explorer.id = req.params.id
    
    old_explorer = explorers.find(e => e.id == req.body.id)
    explorers[explorers.indexOf(old_explorer)] = new_explorer

    res.status(200).json({message: "Updated!", new_explorer: new_explorer})
})

app.delete('/v1/explorers/:id', (req, res) => {
    console.log(`API Explorers DELETE request ${new Date()}`)
    console.log(`Delete exporer with id ${req.params.id}`)
    const requestBody = req.body // params of a client
    res.status(200).json({message: "Deleted!", body: requestBody})
})

module.exports = app