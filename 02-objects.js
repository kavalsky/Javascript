// Defining a new object
var Person = function(living, age, gender) {
	this.living = living;
	this.age = age;
	this.gender = gender;
	this.getGender = function() { return this.gender };
}

// instantiate a Person object and store it in the cody variable
var cody = new Person(true, 33, 'male');
console.log(cody);



