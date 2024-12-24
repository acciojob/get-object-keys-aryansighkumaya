//your JS code here. If required.
// Creating the student object with a name property
let student = {
  name: 'Aryan'
};

// Adding the getKeys method to Object prototype
Object.prototype.getKeys = function() {
  return Object.keys(this);
};

// Getting the keys of the student object
console.log(student.getKeys());  // Output: ['name']

