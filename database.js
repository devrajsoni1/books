//DEPRECATED
const mongoose = require('mongoose');

// const databaseURI = 'mongodb+srv://pranshukoshta7:60kWfYDBs09UmMre@proj-dev.8uhcfft.mongodb.net/?retryWrites=true&w=majority';

const databaseURI = "mongodb://localhost:27017/booksapp";

mongoose.connect(databaseURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .then(() => {
    
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
  });

module.exports = mongoose.connection;

// const connectDB = async () => {
//   try {
//     await mongoose.connect(databaseURI, {
//       useNewUrlParser: true,
//       useUnifiedTopology: true,
//     });

//     console.log("Connected to MongoDB");
//   } catch (err) {
//     console.log(err.message);
//     // Exit process with failure
//     process.exit(1);
//   }
// };

// module.exports = connectDB;