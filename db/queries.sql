-- show all departments
SELECT * FROM departments

-- show all roles with department names
SELECT roles.id, roles.title, roles.salary, departments.name AS department_name 
    FROM roles LEFT JOIN departments 
    ON roles.department_id=departments.id

-- show all employees info with joins for manager, role information, and 
SELECT t1.id, t1.first_name, t1.last_name, 
t2.first_name AS manager_first_name, t2.last_name AS manager_last_name, 
roles.title, roles.salary,
departments.name AS department_name 
FROM employees t1 
INNER JOIN employees t2 ON t1.manager_id = t2.id
INNER JOIN roles ON roles.id = t1.role_id
INNER JOIN departments ON roles.department_id = departments.id

-- add a new department
INSERT INTO departments(name)
VALUES (?)

-- add a new role - NEED TO PROVIDE USER A LIST OF DEPARTMENT CHOICES AND JUST TAKE ID NUMBER
INSERT INTO roles(title, salary, department_id)
VALUES ('?', ?, ?)

-- add a new employee - NEED TO CREATE A LIST OF EMPLOYEES AND LET THE USER PICK
-- THEN TAKE THAT EMPLOYEES ID TO STORE IT AS MANAGER ID
-- SAME THING WITH ROLE TITLE/ ROLE ID
INSERT INTO employees(first_name, last_name, role_id, manager_id)
VALUES ('?', '?', ?, ?)

-- updating an existing employee's role -USER SHOULD SELECT FROM A LIST OF EMPLOYEES - TAKE THAT
-- ID NUMBER TO USE IN THE WHERE CLAUSE 
-- NEED TO DISPLAY A LIST OF ROLES WITH TITLE AND ID - GET THE ID TO STORE
UPDATE employees
SET role_id = ?
WHERE id = ?



-- update an employee

