const assert = require('assert');
const Park = require('../models/park.js');
const Dinosaur = require('../models/dinosaur.js');

describe("Park", function() {
  let park;

  beforeEach(function() {
    park = new Park("Jurassic World", 20);
  });

  it('should have a name', function() {
    assert.strictEqual(park.name, "Jurassic World");
  });

  it('should have a ticket price', function(){
    assert.deepStrictEqual(park.ticketPrice, 20);
  });

  it('should have a collection of dinosaurs', function(){
    assert.deepStrictEqual(park.dinosaurCollection, []);
  });

  it('should be able to add a dinosaur to its collection', function(){
    park.addDinosaur("Velociraptor");
    park.addDinosaur("Ankylosaurus");
    assert.deepStrictEqual(park.dinosaurCollection, ["Velociraptor", "Ankylosaurus"]);
  });

  it('should be able to remove a dinosaur from its collection', function(){
    park.addDinosaur("Velociraptor");
    park.addDinosaur("Ankylosaurus");
    park.removeDinosaur("Velociraptor");
    assert.deepStrictEqual(park.dinosaurCollection, ["Ankylosaurus"]);
  });

  xit('should be able to find the dinosaur that attracts the most visitors');

  xit('should be able to find all dinosaurs of a particular species');

  xit('should be able to calculate the total number of visitors per day');

  xit('should be able to calculate the total number of visitors per year');

  xit('should be able to calculate total revenue for one year');

});
