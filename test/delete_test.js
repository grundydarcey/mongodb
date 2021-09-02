const assert = require('assert');
const MarioChar = require('../models/mario');

describe('Deleting records', function() {
  var char;
  
  beforeEach(function(done) {
    char = new MarioChar({
      name: 'Mario'
    });

    char.save().then(function() {
      asser(char.isNew === false);
      done();
    });
  });
  
  it('deletes a record to the database', function(done) {
 
    MarioChar.findOneAndRemove({name: 'Mario'}).then(function() {
      MarioChar.findOne({name: 'Mario'}).then(function(result) {
        assert(result === null);
        done();
      }); 
    });
  });
});