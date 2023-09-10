class Order {
    constructor(userId, books, status) {
      this.userId = userId;
      this.books = books;
      this.status = status;
    }
  }

module.exports = {
    Order
};