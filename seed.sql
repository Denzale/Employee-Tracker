INSERT INTO employee(first_name, last_name, role_id, manager_id)
VALUES ("Carl", "Johnson", 1, 1);

INSERT INTO roles(title, salary, department_id)
VALUES("Manager", 10000, 1);

INSERT INTO department(name)
VALUES("Walmart");
	
SELECT * FROM employee
LEFT OUTER JOIN roles ON employee.role_id = roles.id 
LEFT OUTER JOIN department ON employee.manager_id = department.id