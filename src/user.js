class User {
    constructor(id, loginId, password) {
      this.id = id;
      this.loginId = loginId;
      this.password = password;
    }
  
    // You can add additional methods or properties for user management here
  }
  
  class UserFactory {
    create({ loginId, password }) {
      const id = generateUniqueId();
      return new User(id, loginId, password);
    }
  }
  
  function generateUniqueId() {
    return Date.now().toString(36) + Math.random().toString(36).substring(2);
  }
  
  module.exports = {
    User,
    UserFactory,
  };
  