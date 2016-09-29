const express = require('express');

const app = express();

app.use(express.static('./public'));

app.listen(8083, () => {
  console.log('Listening on Port: ', 8083);
});
