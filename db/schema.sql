DROP DATABASE IF EXISTS green_thumbs;
CREATE DATABASE green_thumbs;

USE green_thumbs;

CREATE TABLE department(
    id INTEGER AUTO_INCREMENT PRIMARY KEY,
    department_name VARCHAR(30) NOT NULL
);

CREATE TABLE employee_role_data(
id INTEGER AUTO_INCREMENT PRIMARY KEY,
title VARCHAR(30),
salary DECIMAL(7,2),
department_id INTEGER,
CONSTRAINT department_fk FOREIGN KEY (department_id) REFERENCES department(id)
);

CREATE TABLE employee_info_data(
id INTEGER AUTO_INCREMENT PRIMARY KEY,
first_name VARCHAR(30),
last_name VARCHAR(30),
role_id INTEGER,
CONSTRAINT role_fk FOREIGN KEY (role_id) REFERENCES employee_role_data(id),
manager_id INTEGER,
CONSTRAINT manager_fk FOREIGN KEY (manager_id) REFERENCES employee_info_data(id)
);