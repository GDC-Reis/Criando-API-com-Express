const express = require('express');

const app = express();

// tipo do método -> get
// '/' -> endpoint
// callback function -> request, response
app.get('/', (request, response) => {
  response.send('Hello');
})

app.listen(3000, () => console.log('🚀 Server started  at http://localhost:3000'));