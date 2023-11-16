// routes/adminRoutes.js

const express = require('express');
const router = express.Router();
const adminController = require('../controllers/adminController');
const authenticationMiddleware = require('../middleware/authentication');

// Add a new employee (admin action)
router.post('/addEmployee', authenticationMiddleware, adminController.addEmployee);

// List all employees (admin action)
router.get('/listEmployees', authenticationMiddleware, adminController.listEmployees);

// Add more admin-related routes as needed

module.exports = router;
