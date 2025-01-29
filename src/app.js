const express = require('express');
const connectDB = require('./config/database');
const app = express();

const User = require('./models/user');

app.post('/signup', async (req, res) => {
  const user = new User({
    firstName: 'Vishal',
    lastName: 'Haldankar',
    emailId: 'vrushali@gmail.com',
    password: 'vrushali',
  });
  try {
    await user.save();
    res.send('User added succesfully');
  } catch (err) {
    res.status(400).send('Error saving errr' + err.message);
  }
});
connectDB()
  .then(() => {
    console.log('Database connected successfully');
    app.listen(3000, () => {
      console.log('Connected to server 3000');
    });
  })
  .catch((err) => {
    console.log('Database connection err');
  });
