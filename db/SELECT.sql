USE Library;

SELECT * FROM Authors LEFT JOIN Books on Books.Author = Authors.Email;

SELECT * FROM Topics 
    LEFT JOIN BooksTopics on BooksTopics.Topic = Topics.ID
    LEFT JOIN Books on Books.ID = BooksTopics.Book;

SELECT * FROM Topics 
    LEFT JOIN BooksTopics ON BooksTopics.Topic = Topics.ID
    LEFT JOIN Books ON Books.ID = BooksTopics.Book;

SELECT * FROM Topics 
    LEFT JOIN BooksTopics on BooksTopics.Topic = Topics.ID
    LEFT JOIN Books on Books.ID = BooksTopics.Book;

SELECT * FROM Books;
SELECT * FROM Topics;
SELECT * FROM BooksTopics;