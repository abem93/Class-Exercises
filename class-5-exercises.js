// Exercise #1
    // Objective: Use JavaScript Scope Properly.
    // Instructions:
        // Given the code snippet. Explain what scopes are in this current context of the code.

function outerFunction() {
	let outerVar = "I'm outside!";

	function innerFunction() {
		let innerVar = "I'm inside!";
		console.log(outerVar); // Can we access outerVar? YES 
		console.log(innerVar); // Can we access innerVar? YES
	}

	innerFunction();
}
outerFunction();

//we have outerVar that is a block scope but can be used by both functions and we have innerVar that can only be used by innerFunction.

// Exercise #2
//   Objective: Apply Hoisting Correctly in a JS Project.
//   Instructions:
//       Draft a JavaScript function where you call a function before its declaration.
//       Analyze the behavior and understand how hoisting impacts the outcome.

function mainFunction() {
	// Call the hoistedFunction here
  secondaryFunction();
	// Now, declare the hoistedFunction below
  function secondaryFunction(){
    console.log('second function');
  }
}
mainFunction();

// Exercise #3
//     Objective: Implement Closures in JavaScript.
//     Instructions:
//         Develop a JavaScript function that returns another function.
//         The inner function should have access to variables from the outer function's scope.

function outsideFunction(){
  let count = 0;
  return () =>{
    count ++;
    return count
  }
}

const count = outsideFunction();
console.log(count());
console.log(count());
console.log(count());

// Exercise #4
//     Objective: Understand the differences between Local and Global Scope.

//     Instructions:
//       Declare a global variable outside of any function.
//       Create a function that tries to modify that global variable.
//       Create another function that declares a local variable with the same name.
//       Observe the behavior when calling both functions.

let global = 'global';

function modGlobal(){
  global = 'modified global'
  return global
}
function localFunc(){
  let global = 'local global';
  return global;
}
console.log(global);
console.log(modGlobal());
console.log(global);
console.log(localFunc());
console.log(global);

// Exercise #5
//     Objective: Implement a Function Factory using Closures.

//     Instructions:
//       Design a function that accepts a parameter.
//       The function should return another function that uses the parameter in some way.

function functionFactory(param) {
  // Return a function that makes use of 'param'
  return function innerFunc(){
    return param;
  }
}
// Create an instance of the inner function by invoking functionFactory with a parameter
const factoryHello = functionFactory('Hello');

console.log(factoryHello())


// Exercise #6
//     Objective: Examine how Hoisting impacts variable declarations and the different types of variables used.

//     Instructions:
//       Declare a variable after a console.log statement that tries to print that variable. Observe the behavior, and deduce how JavaScript hoists variable declarations.

function hoistingTest() {
  // // Try printing a variable here.
  // console.log(hoist)

  // // Declare the variable after the console.log
  // let hoist = 'hoist'
}
//reference error
hoistingTest();



// Exercise 7
//   Objective: Dive deeper into Closures.
//   Instructions:
//     Create a function that sets up a counter using closures.
//     The outer function should define a count variable.
//     The inner function should increment and print the count each time it's invoked.

function counter(){
  let counter = 0;
  return () => {
    counter++ ;
    return counter
  }
}
 const counting = counter();
 console.log(counting());
 console.log(counting());
 console.log(counting());
console.log('Exercise 8')


//  Exercise #8
//   Objective: Grasp the intricacies of Scope, Hoisting, and Closures combined.
//   Instructions:
//     Create a function that initializes a counter variable. This function should return another function.
//     The returned function, when invoked, should increment the counter and print its value. However, if the counter reaches a certain value (e.g., 10), it should reset itself.
//     Notice how hoisting affects the behavior when you try to declare and initialize the counter after referencing it.
//     Comment on the role of closure in maintaining the counter's state across multiple invocations of the returned function.

function countingTilThree(){
  let counter = 0;
    return function count(){
      if(counter < 3){
      counter++ ;
      return counter
      }else{
        counter = 0;
        return counter
      }
    }
}

const three = countingTilThree();
console.log(three());
console.log(three());
console.log(three());
console.log(three());
console.log(three());

// Exercise #9
//   Objective: Deepen the understanding of Scope interplay with Closures and Hoisting.
//   Instructions:
//     Define two functions: one that modifies a global variable and another that tries to modify a local variable (which is not yet declared).
//     Inside the second function, declare and initialize the local variable after attempting to modify it. Observe how hoisting comes into play.
//     Now, make use of closures: Modify the first function so that it becomes a factory function returning another function. This inner function should use the outer function's variables.
//     Reflect on how the local scope of the outer function is preserved for the inner function through closures, even after the outer function has finished execution.

let globalVar = 'Globalization';
console.log(globalVar);
function changeGlobal(){
    return () => {
      globalVar = 'Changed Globalization'
      return globalVar
    }
}
const changed = changeGlobal();
console.log(changed());
console.log(globalVar);
// function changeLocal(){
//   localVar = 'changed local';
//   let localVar = 'Localized';
//   return localVar
// }
// console.log(changeLocal())