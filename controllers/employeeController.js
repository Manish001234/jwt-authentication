// controllers/employeeController.js

const Employee = require('../models/Employee');
const User = require('../models/User');

// Get employee details (employee action)
exports.getEmployeeDetails = async (req, res) => {
  try {
    const { userId } = req.userData; // Assuming you have middleware to extract user data

    const employee = await Employee.findById(userId);

    if (!employee) {
      return res.status(404).json({ message: 'Employee not found' });
    }

    res.status(200).json(employee);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Fetching employee details failed' });
  }
};

// Update employee details (employee action)
exports.updateEmployeeDetails = async (req, res) => {
  try {
    const { userId } = req.userData; // Assuming you have middleware to extract user data
    const { firstName, lastName, email } = req.body;

    const updatedEmployee = await Employee.findByIdAndUpdate(
      userId,
      { firstName, lastName, email },
      { new: true }
    );

    if (!updatedEmployee) {
      return res.status(404).json({ message: 'Employee not found' });
    }

    res.status(200).json(updatedEmployee);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Updating employee details failed' });
  }
};

// Add more employee-related actions as needed
