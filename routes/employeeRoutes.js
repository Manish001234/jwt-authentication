// routes/employeeRoutes.js

const express = require('express');
const router = express.Router();
const employeeController = require('../controllers/employeeController');
const authenticationMiddleware = require('../middleware/authentication');
const authenticateUser = require('../middleware/authentication');

// Get employee details (employee action)
router.get('/getEmployeeDetails', authenticationMiddleware, employeeController.getEmployeeDetails);

// Update employee details (employee action)
router.put('/updateEmployeeDetails', authenticationMiddleware, employeeController.updateEmployeeDetails);

router.get('/secureRoute', authenticateUser, (req, res) => {
    // You can access the authenticated user's data via req.userData
    res.json({ message: 'Authenticated route', user: req.userData });
  });


// Add more employee-related routes as needed

module.exports = router;
