const express = require('express')
const Projects = require('./projectsModel')

const router = express.Router()

router.get('/projects', (req, res) => {
    Projects.getProjects()
        .then(thenRes => {
            res.status(200).json(thenRes)
        })
        .catch(err => {
            res.status(500).json({ errorMessage: "Internal server error!" })
        })
})

router.get('/resources', (req, res) => {
    Projects.getResources()
        .then(thenRes => {
            res.status(200).json(thenRes)
        })
        .catch(err => {
            res.status(500).json({ errorMessage: "Internal server error!" })
        })
})

router.get('/tasks', (req, res) => {
    Projects.getTasks()
        .then(thenRes => {
            res.status(200).json(thenRes)
        })
        .catch(err => {
            res.status(500).json({ errorMessage: "Internal server error!" })
        })
})

module.exports = router