// Exercise 2 


// Multiplier
//     Create an Multiplier class.

//     It should define the following properties:
//         - currentValue:number (initialized to 1)

//     It should implement the following methods:
//         - multiply(num): should return the number supplied * whatever the current value is. and update the current value
//         - getCurrentValue(): returns the current value
//         - clear(): clears the current value
var currentValue=1
function Multiplier(){
  this.currentValue=1;
 }
 console.log(currentValue);

Multiplier.prototype.getCurrentValue = function(multiply){
  return this.currentValue * 3;
};
console.log(currentValue*5);


var Clear = 1;
function Clear(){
  this.Clear=1;
}
console.log(Clear);
