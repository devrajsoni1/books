class Order {
    constructor(userId, orderId, books, status) {
      this.userId = userId;
      this.orderId = orderId;
      this.books = books;
      this.status = status;
      this.totalValue = 0;
    }
  }

module.exports = {
    Order
};