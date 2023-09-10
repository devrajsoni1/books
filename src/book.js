class Book {
    constructor(id, title, author, publishDate, price) {
      this.id = id;
      this.title = title;
      this.author = author;
      this.publishDate = publishDate;
      this.price = price;
      this.available = available;
    }
  
    update({ title, author, publishDate, price, available }) {
      if (title) this.title = title;
      if (author) this.author = author;
      if (publishDate) this.publishDate = publishDate;
      if (price) this.price = price;
      if (available) this.available = this.available;
    }
  }
  
  class BookFactory {
    create({ title, author, publishDate, price, available }) {
      const id = generateUniqueId();
      return new Book(id, title, author, publishDate, price, available);
    }
  }
  
  function generateUniqueId() {
    return Date.now().toString(36) + Math.random().toString(36).substring(2);
  }
  
  module.exports = {
    Book,
    BookFactory,
  };
  