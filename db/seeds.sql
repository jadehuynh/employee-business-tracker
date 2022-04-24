INSERT INTO department(id, department_name) 
    VALUES (1,'World Domination'),
        (2,'Administration'),
        (3,'Emotional Support'),
        (3,'Family'),
        (4,'Fires Lasers'),
        (5,'Hero Status');


INSERT INTO employee_role_data(id, title, salary, department_id)
    VALUES (1, 'Master Ruler', '20000000', 01),
        (2, 'Number Two', '10000000', 2),
        (3, 'Pet', '200000', 01),
        (3, 'Son', '200000', 01),
        (4, 'Chief of Staff', '200000', 01),
        (5, 'Good Guy', '10.50', 05);

INSERT INTO employee_info_data(id, first_name, last_name, role_id, manager_id)
    VALUES (1, 'Doctor', 'Evil' '01', false),
        (2, 'Number', 'Two' '02', true),
        (3, 'Mini', 'Me' '01', true,
        (3, 'Scott', 'Evil' '01', true),
        (4, 'Frau', 'Farbissina' '04', true),
        (5, 'Austin', 'Powers' '05', false);