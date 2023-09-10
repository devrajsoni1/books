const express = require('express');
const mongoose = require('mongoose');
const app = express();

const port = process.env.PORT || 8080;

// Middleware to parse JSON requests
app.use(express.json());

// const databaseURI = "mongodb://localhost:27017/booksapp";
const databaseURI = "mongodb+srv://pranshukoshta7:60kWfYDBs09UmMre@proj-dev.8uhcfft.mongodb.net/?retryWrites=true&w=majority";

// Import and mount the route files
const bookRoutes = require('./routes/bookRoutes');
const userRoutes = require('./routes/userRoutes');
const cartRoutes = require('./routes/cartRoutes');

// Mount the routes
app.use('/bookRoutes', bookRoutes);
app.use('/userRoutes', userRoutes);
app.use('/cartRoutes', cartRoutes);

mongoose.connect(databaseURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .then(() => {
    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
  });
