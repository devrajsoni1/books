const mongoose = require('mongoose');

const databaseURI = 'your-database-uri'; // Replace with your MongoDB database URI

mongoose.connect(databaseURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
  });

module.exports = mongoose.connection;
