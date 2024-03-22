const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello, world!');
});

app.listen(3005, () => {
    console.log('Server is running on port 3005');
  });
  