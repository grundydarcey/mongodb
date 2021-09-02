const assert = require('assert');
const MarioChar = require('../models/mario');

// Describe tests
describe('Finding records', function() {
  // Create tests
  beforeEach(function(done) {
    var char = new MarioChar({
      name: 'Mario'
    });

    char.save().then(function() {
      assert(char.isNew === false);
      done;
    });
  });
  it('finds one record from the database', function(done) {
    MarioChar.findOne({ name: 'Mario' }).then(function(result) {
      assert(result.name === 'Mario');
      done();
    });
   
 

  });
});