const mongoose = require('mongoose');

// ES6 Promises
mongoose.Promise = global.Promise;

// connect to the db before tests run
before(function() {
  mongoose.connect('mongodb://localhost/testaroo');
  mongoose.connection.once('open', function() {
    console.log('Connection has been made, now fireworks');
    done();
  }).on('error', function(error) {
    console.log('Connection error', error);
  });
});

// // connect to mongoDB

// mongoose.connect('mongodb://localhost/testaroo');

// mongoose.connection.once('open', function() {
//   console.log('Connection has been made, now fireworks');
// }).on('error', function(error) {
//   console.log('Connection error', error);
// });