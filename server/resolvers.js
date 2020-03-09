const DB = require('./modules/db')

module.exports = { 
  Mutation: {
    async addTopic(_, args){
      const topics = await DB.exec(
        `INSERT INTO Topics OUTPUT INSERTED.* VALUES('${args.label}')`
      )

      return topics[0]
    },
    async addBook(_, args){
      const { book } = args
      const books = await DB.exec(
        `INSERT INTO Books OUTPUT INSERTED.* VALUES('${book.author}', '${book.title}')`
      )

      return books[0]
    },
    async deleteBook(_, args){
      const books = await DB.exec(
        `DELETE FROM Books OUTPUT DELETED.* WHERE Books.ID = ${args.bookId}`
      )

      return books[0]
    },
    async detachTopicFromBook(_, args){
      const topics = await DB.exec(
        `DELETE FROM BooksTopics OUTPUT DELETED.* WHERE BooksTopics.Topic=${args.topicId} AND BooksTopics.Book=${args.bookId}`
      )
      
      return topics[0]
    }
  },
  Query: {
    async authors(){
      return await DB.exec(
        `SELECT * FROM Authors`
      )
    },
    async books(){
      return await DB.exec(
        `SELECT * FROM Books`
      )
    },
    async topics(){
      return await DB.exec(
        `SELECT * FROM Topics`
      )
    }
  },
  Author: {
    async books(author){
      const books = await DB.exec(
        `SELECT * FROM Books WHERE Books.Author = '${author.email}'`
      )

      return books
    }
  },
  Book: {
    async topics(book){
      const topics = await DB.exec(
        `SELECT * FROM Topics 
        LEFT JOIN BooksTopics ON BooksTopics.Topic = Topics.ID
        WHERE BooksTopics.Book = ${book.id}`
      )

      return topics
    },
    async author(book){
      const author = await DB.exec(
        `SELECT * FROM Authors WHERE Authors.Email = '${book.author}'`
      )

      return author[0]
    }
  },
  Topic: {
    async books(topic){
      const books = await DB.exec(
        `SELECT * FROM Books 
        LEFT JOIN BooksTopics on BooksTopics.Book = Books.ID
        WHERE BooksTopics.Topic = ${topic.id}`
      )

      return books
    }
  }
}