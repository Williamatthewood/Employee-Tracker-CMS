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