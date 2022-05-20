const assert = require('assert');
const Park = require('../models/park.js');
const Dinosaur = require('../models/dinosaur.js');

describe("Park", function() {
  let park;
  let dinosaur;

  beforeEach(function() {
    park = new Park("Jurassic World", 20);
    dinosaur1 = new Dinosaur("Velociraptor", "carnivore", 150)
    dinosaur2 = new Dinosaur("Stegosaurus", "Stegosaurus", 100)
    dinosaur3 = new Dinosaur("Ankylosaurus", "herbivore", 120)
    dinosaur4 = new Dinosaur("Triceratops", "herbivore", 80)
    dinosaur4 = new Dinosaur("Oviraptor", "omnivore", 20)
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


// ADDED EXTRA TEST TO TEST GATHERING OF INFO
  it('should have a name', function() {
    assert.strictEqual(dinosaur1.species, "Velociraptor");
  });



  xit('should be able to find the dinosaur that attracts the most visitors');

  xit('should be able to find all dinosaurs of a particular species');

  xit('should be able to calculate the total number of visitors per day');

  xit('should be able to calculate the total number of visitors per year');

  xit('should be able to calculate total revenue for one year');

});
