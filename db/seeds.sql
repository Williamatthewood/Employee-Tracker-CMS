INSERT INTO departments (name)
VALUES ("Sales"), ("Accounting"), ("HR"), ("Warehouse"), ("Quality Assurance"), ("Customer Service");

INSERT INTO roles (title, salary, department_id) 
VALUES  ("Salesperson", 60000, 1),
        ("Accountant", 80000, 2),
        ("Senior Accountant", 90000, 2),
        ("HR Specialist", 60000, 3),
        ("Warehouse Foreman", 45000, 4),
        ("Warehouse Worker", 40000, 4),
        ("Receptionist", 35000, 1),
        ("Customer Service Rep", 40000, 6),
        ("Quality Assurance Rep", 40000, 5),
        ("Regional Manager", 50000, 1),
        ("Assistant To The Regional Manager", 49999, 1);

INSERT INTO employees (first_name, last_name, role_id, manager_id)
VALUES  ("Michael", "Scott", 10, null),
        ("Dwight", "Schrute", 11, 1),
        ("Jim", "Halpert", 1, 1),
        ("Oscar", "Martinez", 3, 1),
        ("Kevin", "Malone", 2, 1),
        ("Toby", "Flenderson", 4, 1),
        ("Darryl", "Philbin", 5, 1),
        ("Roy", "Anderson", 6, 7),
        ("Pam", "Beasley", 7, 1),
        ("Kelly", "Kapoor", 8, 1),
        ("Creed", "Bratton", 9, 1);