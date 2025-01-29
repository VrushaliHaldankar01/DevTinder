const mongoose = require('mongoose');

const connectDB = async () => {
  await mongoose.connect(
    'mongodb+srv://vrushalihaldankar01:298nEzTe8TaXmOrG@nodeserver.qzbmm.mongodb.net/devTinder'
  );
};

module.exports = connectDB;
