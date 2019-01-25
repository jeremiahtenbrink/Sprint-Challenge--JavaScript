// 1. Copy and paste your prototype in here and refactor into class syntax.

// Test your volume and surfaceArea methods by uncommenting the logs below:
// console.log(cuboid.volume()); // 100
// console.log(cuboid.surfaceArea()); // 130

/* ===== Prototype Practice ===== */

// Task: You are to build a cuboid maker that can return values for a cuboid's volume or surface area. Cuboids are
// similar to cubes but do not have even sides. Follow the steps in order to accomplish this challenge.

/* == Step 1: Base Constructor ==
  Create a constructor function named CuboidMaker that accepts properties for length, width, and height
*/
class CuboidMakerClass {
	constructor(length, width, height) {
		this.length = length;
		this.width = width;
		this.height = height;
	}
	
	volume  () {
		return this.length * this.height * this.width;
	};
	surfaceArea  () {
		return 2 * (this.length * this.width + this.length * this.height + this.width * this.height);
	};
	
	
}

/* == Step 2: Volume Method ==
  Create a method using CuboidMaker's prototype that returns the volume of a given cuboid's length, width, and height
  */
const cuboidClass = new CuboidMakerClass(4, 5, 5);

// Test your volume and surfaceArea methods by uncommenting the logs below:
console.log(cuboidClass.volume()); // 100
console.log(cuboidClass.surfaceArea()); // 130


// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for
// volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.
// Test your work by logging out your volume and surface area.

class CubeMaker extends CuboidMakerClass {
	// cube has even length width and height.
	constructor(length){
		super(length, length, length);
	}
	
	//surfaceArea of cube = 6 * length ^2
	//This is polymorphism
	surfaceArea  () {
		console.log("I am inside of the cubeMaker");
		return (this.length * this.length)*6;
	};
	
	//volume of a cube is length ^ 3
	// this is polymorphism again.
	volume () {
		console.log("I am inside of the cube maker.");
		return (this.length * this.length * this.length);
	}
}

const cube = new CubeMaker(3);
console.log(cube.surfaceArea()); // 3 * 3 * 6 = 54
console.log(cube.volume()); //3 * 3 * 3 = 27