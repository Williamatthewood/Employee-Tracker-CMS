require('dotenv').config()
const express = require('express');
const mysql = require('mysql2');

const PORT = process.env.PORT || 3001;
const app = express();

// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Connect to database
const db = mysql.createConnection(
  {
    host: '127.0.0.1',
    user: 'root',
    password: process.env.DB_PASSWORD,
    database: 'employee_tracker_db'
  },
  console.log(`Connected to the employee_tracker_db.`)
);

//routes and queries here

//get all departments
app.get('/api/departments', (req, res) => {
    const sql = `SELECT * FROM departments`;
    
    db.query(sql, (err, rows) => {
      if (err) {
        res.status(500).json({ error: err.message });
         return;
      }
      res.json({
        message: 'success',
        data: rows
      });
    });
});

//get all roles and show department name
app.get('/api/roles', (req, res) => {
    const sql = `SELECT roles.id, roles.title, roles.salary, departments.name AS department_name 
    FROM roles LEFT JOIN departments 
    ON roles.department_id=departments.id`;
    
    db.query(sql, (err, rows) => {
      if (err) {
        res.status(500).json({ error: err.message });
         return;
      }
      res.json({
        message: 'success',
        data: rows
      });
    });
});

//get all employees and show id, first name, last name, title from roles, manager from this table, salary from roles, and department name from departments
app.get('/api/employees', (req, res) => {
    const sql = `SELECT t1.id, t1.first_name, t1.last_name, 
t2.first_name AS manager_first_name, t2.last_name AS manager_last_name, 
roles.title, roles.salary,
departments.name AS department_name 
FROM employees t1 
INNER JOIN employees t2 ON t1.manager_id = t2.id
INNER JOIN roles ON roles.id = t1.role_id
INNER JOIN departments ON roles.department_id = departments.id`;
    
    db.query(sql, (err, rows) => {
      if (err) {
        res.status(500).json({ error: err.message });
         return;
      }
      res.json({
        message: 'success',
        data: rows
      });
    });
});

// add a new department 
app.post('/api/new-department')

// Default response for any other request (Not Found)
app.use((req, res) => {
  res.status(404).end();
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});