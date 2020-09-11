const db = require('../data/dgConfig')

module.exports = {
    getProjects,
    getResources,
    getTasks,
    getTasksForProject,
    addProject,
    addResource,
    addTasks,
}

function getProjects() {
    return db('projects')
}

function getResources() {
    return db('resources')
}

function getTasks() {
    return db('tasks')
}

function getTasksForProject(id) {
    return db('tasks')
    .where({ project_id: id})
}

function addProject(project) {
    return db('projects')
    .insert(project)
}

function addResource(resource) {
    return db('resources')
    .insert(resource)
}

function addTasks(task) {
    return db('tasks')
    .insert(task)
}