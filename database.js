const mongoose = require('mongoose');

const databaseURI = 'mongodb+srv://pranshukoshta7:60kWfYDBs09UmMre@proj-dev.8uhcfft.mongodb.net/?retryWrites=true&w=majority'; // Replace with your MongoDB database URI

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
