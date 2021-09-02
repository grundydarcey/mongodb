const assert = require('assert');
const mongoose = require('mongoose');
const Author = require('../models/author');

describe('Nesting records', function() {

  beforeEach(function(done) {
    mongoose.connection.collections.authors.drop(function() {
      done();    
    });
  });

  it('Creates an author with sub-documents', function(done) {
    var pat = new Author({
      name: 'Patrick Roth',
      books: [{title: 'Name of the book', pages: 400}]
    });

    pat.save().then(function() {
      Author.findOne({name: 'Patrick Roth'}).then(function(record) {
        assert(record.books.length === 1);
        done();
      });
    });
  });

  it('Adds a book to an author', function(done) {
    var pat = new Author({
      name: 'Patrick Roth',
      books: [{title: 'Name of the book', pages: 400}]
    });

    pat.save().then(function() {
      Author.findOne({name: 'Patrick Roth'}).then(function(record) {
        record.books.push({title: 'Wise Mans Fear', pages: 500});
        record.save().then(function() {
          Author.findOne({ name: 'Patrick Roth'}).then(function(result) {
            assert(result.books.length === 2);
            done();
          });
        });
      });
    });
  });
});