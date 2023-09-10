class User {
    constructor(userId, emailId, password) {
      this.userId = userId;
      this.emailId = emailId;
      this.password = password;
    }
  
    // You can add additional methods or properties for user management here
  }
  
  class UserFactory {
    create({ emailId, password }) {
      const id = generateUniqueId();
      return new User(id, emailId, password);
    }
  }
  
  function generateUniqueId() {
    return Date.now().toString(36) + Math.random().toString(36).substring(2);
  }
  
  module.exports = {
    User,
    UserFactory,
  };
  