class Book {
    constructor(bookId, title, author, publishDate, genre, price, available) {
      this.bookId = bookId;
      this.title = title;
      this.author = author;
      this.publishDate = publishDate;
      this.genre = genre;
      this.price = price;
      this.available = available;
    }
  
    update({bookId, title, author, publishDate, genre, price, available }) {
      if (bookId) this.bookId = bookId;
      if (title) this.title = title;
      if (author) this.author = author;
      if (publishDate) this.publishDate = publishDate;
      if (genre) this.genre = genre;
      if (price) this.price = price;
      if (available) this.available = this.available;
    }
  }
  
  class BookFactory {
    create({ title, author, publishDate, genre, price, available }) {
      const bookId = generateUniqueId();
      return new Book(bookId, title, author, publishDate, genre, price, available);
    }
  }
  
  function generateUniqueId() {
    return Date.now().toString(36) + Math.random().toString(36).substring(2);
  }
  
  module.exports = {
    Book,
    BookFactory,
  };
  