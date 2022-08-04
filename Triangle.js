var x = 9;
var y = 8;
var z = 9;

if (x == y && y == z){
console.log("Equilateral Triangle");
}

// Check for isosceles triangle
else if (x == y || y == z || z == x){
console.log("Isosceles Triangle");
}
// Otherwise scalene triangle
else {
console.log("Scalene Triangle");
}