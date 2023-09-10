const express = require('express');
const app = express();

// Middleware to parse JSON requests
app.use(express.json());

// Import and mount the route files
const bookRoutes = require('./routes/bookRoutes');
const userRoutes = require('./routes/userRoutes');
const cartRoutes = require('./routes/cartRoutes');

// Mount the routes
app.use('/api/books', bookRoutes);
app.use('/api/users', userRoutes);
app.use('/api/carts', cartRoutes);

// Start your Express app
const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
