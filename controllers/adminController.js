// controllers/adminController.js

const Employee = require('../models/Employee');

// Add a new employee (admin action)
exports.addEmployee = async (req, res) => {
  try {
    const { firstName, lastName, email } = req.body;

    const newEmployee = new Employee({
      firstName,
      lastName,
      email,
      // Add more employee-related fields here
    });

    await newEmployee.save();
    res.status(201).json({ message: 'Employee added successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Adding employee failed' });
  }
};

// List all employees (admin action)
exports.listEmployees = async (req, res) => {
  try {
    const employees = await Employee.find();
    res.status(200).json(employees);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Fetching employees failed' });
  }
};

// Add more admin-related actions as needed
