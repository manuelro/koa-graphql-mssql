USE Library;

INSERT INTO Authors
VALUES  ('robert@gmail.com', 'Robert C. Martin'),
        ('martin@outlook.com', 'Martin Flowler');

INSERT INTO Books
VALUES  ('robert@gmail.com', 'Clean Code'),
        ('robert@gmail.com', 'The Clean Coder'),
        ('martin@outlook.com', 'Refactoring'),
        ('martin@outlook.com', 'Domain Specific Languages');

INSERT INTO Topics 
VALUES  ('Software'),
        ('Quality'),
        ('Architecture');

INSERT INTO BooksTopics 
VALUES  (1, 1),
        (2, 2),
        (2, 3),
        (3, 1),
        (4, 1),
        (4, 2),
        (4, 3);