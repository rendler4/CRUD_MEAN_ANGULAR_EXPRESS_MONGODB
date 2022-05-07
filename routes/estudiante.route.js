const express = require('express');
const app = express();
const estudianteRoute = express.Router();

// Estudiante model
let Estudiante = require('../models/Estudiante');

// Add Employee
estudianteRoute.route('/create').post((req, res, next) => {
    Estudiante.create(req.body, (error, data) => {
        if (error) {
            return next(error)
        } else {
            res.json(data)
        }
    })
});

// Get All Employees
estudianteRoute.route('/').get((req, res) => {
    Estudiante.find((error, data) => {
        if (error) {
            return next(error)
        } else {
            res.json(data)
        }
    })
})

// Get single employee
estudianteRoute.route('/read/:id').get((req, res) => {
    Estudiante.findById(req.params.id, (error, data) => {
        if (error) {
            return next(error)
        } else {
            res.json(data)
        }
    })
})


// Update employee
estudianteRoute.route('/update/:id').put((req, res, next) => {
    Estudiante.findByIdAndUpdate(req.params.id, {
        $set: req.body
    }, (error, data) => {
        if (error) {
            return next(error);
            console.log(error)
        } else {
            res.json(data)
            console.log('Data updated successfully')
        }
    })
})

// Delete employee
estudianteRoute.route('/delete/:id').delete((req, res, next) => {
    Estudiante.findOneAndRemove(req.params.id, (error, data) => {
        if (error) {
            return next(error);
        } else {
            res.status(200).json({
                msg: data
            })
        }
    })
})

module.exports = estudianteRoute;
