INSERT INTO department(department_name) 
    VALUES ('Floral Shop'),
        ('Soil'),
        ('Flower Pots'),
        ('Flower Vases'),
        ('Flowers'),
        ('Shrubs');


INSERT INTO employee_role_data(title, salary, department_id)
    VALUES ('Manager', '60000', 1),
        ('Gardener', '40000', 2),
        ('Ceramicist', '20000', 3),
        ('Designer', '20000', 3),
        ('Florist', '25000', 4),
        ('Landscaper', '40000', 5);

INSERT INTO employee_info_data(first_name, last_name, role_id, manager_id)
    VALUES ('Rose', 'Biggins', 1, NULL),
        ('Willow', 'Colbert', 2, 1),
        ('Piper', 'Pots', 3, 2),
        ('Iris', 'Oakley', 4, 1),
        ('Lily', 'Waters', 5, 1),
        ('Forest', 'Greene', 6, 3);