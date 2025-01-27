const express = require('express');
const app = express();

app.use('/test', (req, res) => {
  res.send('Hello Server');
});
app.listen(3000, () => {
  console.log('Connected to server 3000');
});
