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

    new_explorer = {}
    new_explorer.id = explorers.at(explorers.length-1).id + 1
    new_explorer.name = requestBody.name

    explorers.push(new_explorer)
    // 201 is 'Created'
    res.status(201).json({message: "created", new_explorer: new_explorer})
})

app.put('/v1/explorers/:id', (req, res) => {
    console.log(`API Explorers PUT request ${new Date()}`)
    console.log(`Update exporer with id ${req.params.id}`)
    const requestBody = req.body // params of a client
    
    new_explorer = {}
    new_explorer.id = req.params.id
    new_explorer.name = requestBody.name

    old_explorer = explorers.find(e => e.id == req.params.id)
    explorers[explorers.indexOf(old_explorer)] = new_explorer

    res.status(200).json({message: "Updated!", explorers: explorers})
})

app.delete('/v1/explorers/:id', (req, res) => {
    console.log(`API Explorers DELETE request ${new Date()}`)
    console.log(`Delete exporer with id ${req.params.id}`)
    // const requestBody = req.body // params of a client

    old_explorer = explorers.find(e => e.id == req.params.id)
    explorers.splice(explorers.indexOf(old_explorer), 1)

    res.status(200).json({message: "Deleted!", explorers: explorers})
})

module.exports = app