const Park = function(name, ticketPrice) {
    this.name = name;
    this.ticketPrice = ticketPrice;
    this.dinosaurCollection = [];
};


Park.prototype.addDinosaur = function(dinosaur) {
    this.dinosaurCollection.push(dinosaur)
};

Park.prototype.removeDinosaur = function(dinosaur){
    let removedDinosaur = this.dinosaurCollection.indexOf(dinosaur);
    this.dinosaurCollection.splice(removedDinosaur, 1);
};


module.exports = Park;


//   "Velociraptor", "Stegosaurus", "Ankylosaurus", "Triceratops"