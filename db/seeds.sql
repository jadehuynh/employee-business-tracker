INSERT INTO department(id, department_name) 
    VALUES (1,'Floral Shop'),
        (2,'Soil'),
        (3,'Flower Pots'),
        (3,'Flower Vases'),
        (4,'Flowers'),
        (5,'Shrubs')
        PRIMARY KEY id;


INSERT INTO employee_role_data(id, title, salary, department_id)
    VALUES (15, 'Manager', '60000', 1),
        (25, 'Gardener', '40000', 2),
        (35, 'Ceramicist', '20000', 3),
        (35, 'Designer', '20000', 3),
        (45, 'Florist', '25000', 4),
        (55, 'Landscaper', '40000', 5)
        FOREIGN KEY () REFERENCES ();

INSERT INTO employee_info_data(id, first_name, last_name, role_id, manager_id)
    VALUES (1, 'Rose', 'Biggins' '15', NULL),
        (2, 'Willow', 'Colbert' '25', 'Rose Biggins'),
        (3, 'Piper', 'Pots' '35', 'Rose Biggins',
        (3, 'Iris', 'Oakley' '35', 'Rose Biggins'),
        (4, 'Lily', 'Waters' '45', NULL),
        (5, 'Forest', 'Greene' '05', ''),
         FOREIGN KEY () REFERENCES ();