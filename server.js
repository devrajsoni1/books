const express = require('express');
const app = express();

// Import and mount the route files
const bookRoutes = require('./bookRoutes');
const userRoutes = require('./userRoutes');
const cartRoutes = require('./cartRoutes');

// Middleware to parse JSON requests
app.use(express.json());

// Mount the routes
app.use('/api/books', bookRoutes);
app.use('/api/users', userRoutes);
app.use('/api/carts', cartRoutes);

// Start your Express app
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
