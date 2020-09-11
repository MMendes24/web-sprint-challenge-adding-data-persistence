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

router.get('/project/tasks/:id', (req, res) => {
    const id = req.params.id

    Projects.getTasksForProject(id)
        .then(thenRes => {
            res.status(200).json(thenRes)
        })
        .catch(err => {
            res.status(500).json({ errorMessage: "Internal server error!" })
        })
})

router.post('/projects', (req, res) => {
    Projects.addProject(req.body)
        .then(thenRes => {
            res.status(201).json(thenRes)
        })
        .catch(err => {
            res.status(400).json({ errorMessage: "Could not add item due to bad data!" })
        })
})

router.post('/resources', (req, res) => {
    Projects.addResource(req.body)
        .then(thenRes => {
            res.status(201).json(thenRes)
        })
        .catch(err => {
            res.status(400).json({ errorMessage: "Could not add item due to bad data!" })
        })
})

router.post('/tasks', (req, res) => {
    Projects.addTasks(req.body)
        .then(thenRes => {
            res.status(201).json(thenRes)
        })
        .catch(err => {
            res.status(400).json({ errorMessage: "Could not add item due to bad data!" })
        })
})

module.exports = router