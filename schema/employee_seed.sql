use employee_db;

insert into department (name) values 
("Human Resources"),
("IT"),
("Sales"),
("Accounting"),
("Logistics"),
("Customer Service"),
("Recruiting"),
("Upper Management"),
("Payroll");

insert into role (title, salary, department_id) values 
("Receptionist", 42000, 6),
("IT Manager", 75000,2),
("Database Admin", 88000,2),
("Recruitment Specialist", 61500,7),
("Sr Test Engineer", 80000,5),
("CSR", 52000,1),
("Payroll Administrator", 48000,9),
("Client Services Manager", 79000,1),
("Fulfillment Director", 70000, 3),
("President of Sales", 115000,3),
("AR Analyst", 60000,4),
("AP Analyst", 60000,4),
("Project Accountant", 80000,4),
("Senior Accountant", 90000,4),
("Dev Ops", 73000,2),
("QA Analyst", 68000,5),
("Full Stack Developer", 90000, 2),
("CEO", 200000, 8),
("COO", 190000,8),
("CTO", 185000,8); 

insert into employee (first_name, last_name, role_id, manager_id) values
("Don", "Draper",20,null),
("Peggy","Olsen",18,null),
("Joan", "Harris",19,null),
("Roger","Sterling",2,1),
("Bert","Cooper",1,2),
("Peter","Campbell",5,null),
("Harry","Crane",6,null),
("Megan","Draper",7,null),
("Lane","Pryce",8,null),
("Michael","Ginsberg",17,1),
("Paul","Kinsey",11,13),
("Betty","Francis",11,13),
("Sally","Draper",13,2),
("Bobby","Draper",15,4);