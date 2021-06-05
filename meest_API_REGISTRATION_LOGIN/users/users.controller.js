const express = require('express');
const router = express.Router();
const Joi = require('joi');
//const validateRequest = require('_middleware/validate-request');
//const authorize = require('_middleware/authorize')
const userService = require('./user.service');

// routes
router.post('/employee',employee)
router.get('/all', getAll)
// router.get('/current', authorize(), getCurrent);
router.get('/:id', getById);
//router.put('/:id', updateSchema, update);
router.delete('/:id', _delete);

module.exports = router;



function employee(req, res, next) {
    userService.create(req.body)
        .then(() => res.json({ message: 'data updated  successful' }))
        .catch(next);
}

function getAll(req, res, next) {
    userService.getAll()
        .then(users => res.json(users))
        .catch(next);
}

function getCurrent(req, res, next) {
    res.json(req.user);
}

function getById(req, res, next) {
    userService.getById(req.params.id)
        .then(user => res.json(user))
        .catch(next);
}

// function updateSchema(req, res, next) {
//     const schema = Joi.object({
//         firstName: Joi.string().empty(''),
//         lastName: Joi.string().empty(''),
//         username: Joi.string().empty(''),
        
//     });
//     validateRequest(req, next, schema);
// }

function update(req, res, next) {
    userService.update(req.params.id, req.body)
        .then(user => res.json(user))
        .catch(next);
}

function _delete(req, res, next) {
    userService.delete(req.params.id)
        .then(() => res.json({ message: 'User deleted successfully' }))
        .catch(next);
}