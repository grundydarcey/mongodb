const mongoose = require('mongoose');

//connect to mongoDB

mongoose.connect('mongodb://localhost/testaroo');

mongoose.connection.once('open', function() {
  console.log('Connection has been made, now fireworks');
}).on('error', function(error) {
  console.log('Connection error', error);
});