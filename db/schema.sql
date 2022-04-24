CREATE DATABASE employee_data_tracker;

USE employee_data_tracker;

CREATE TABLE department(
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    department_name VARCHAR(30) NOT NULL
);

CREATE TABLE employee_role_data(
id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
title VARCHAR(30),
salary DECIMAL(7,2),
department_id INT NOT NULL,
FOREIGN KEY (department_id) REFERENCES department(id)
);

CREATE TABLE employee_info_data(
id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
first_name VARCHAR(30),
last_name DECIMAL(7,2),
role_id INT NOT NULL,
manager_id INT BOOLEAN NOT NULL,
FOREIGN KEY (manager_id) REFERENCES manager(id)
);