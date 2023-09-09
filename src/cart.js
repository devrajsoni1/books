class Cart {
    constructor(userId) {
      this.userId = userId;
      this.books = [];
    }
  
    // Add a book to the cart
    addToCart(bookId) {
      if (!this.books.includes(bookId)) {
        this.books.push(bookId);
      }
    }
  
    // Remove a book from the cart
    removeFromCart(bookId) {
      const index = this.books.indexOf(bookId);
      if (index !== -1) {
        this.books.splice(index, 1);
      }
    }
  
    // Get the cart contents
    getCart() {
      return this.books;
    }
  }
  
  module.exports = {
    Cart
  };
  