# CareerTrack




OBJECTS
Object Initializer
Objects are initialized using new object() or Object.create() or using literal notation.
It is an expression that describes the initialization of an Object..
Object literal notation is not the same as JSON although they look similar.  However, the advantage of notation is that you are able to quickly create objects with properties inside the curly braces. Key: value, ..
Once you creat the object you might want to change them. Object properties can ben accesses by using dot notation ex. Object.foo or object[‘age’]
When using the same name for your properties the second will overwrite the first.
The property can also refer to a function get or set method.
Only a single prototype mutation is permitted in an object literal, multiple will result in a syntax error.
CLASSES
  Inheritance 
Inheritance only has one contruct, each object has a private property which holds a link to another object called a prototype, that prototype object has a property of its own, and so on until an object is reached with a null.
Javascript object are dynamic bags of properties.When trying to access a property of an object the prototype of the prototype and so on until either  property with a matching name is found or the end of the chain is reached. Setting a property
To an object creates an own property the only exception to getting and setting behavior rules is when there is an inherited property with get or set.
	Classes
Classes are a template for creating object, then encapsulate data with code to work on the data.  Classes are in fact
 Special function. One way to define a class is using a class declaration, to declare a class you use the class keyword with the name class. The most important difference between function declarations and class declarations is that function declaration are hoisted and class declarations are not.
Class expression is another was to define class. The can be named or unnamed. The body is defined by {} and what is in the body is executed in strict mode code written here is subject to stricter syntax.
The constructor method is a special method for creating and initializing an object created with a class. There can only be one special method with the name constructor in a class.
The static keyword defines a static method for a class. Static members are called without instantiating their class and cannot be called through a class instance. They are often used to create utility functions for a application.
The super keyword is used to call corresponding methods of super class this is one advantage. Classes can’t be redefined.

DESTRUCTURING
This syntax makes it possible to unpack values from array or property from objects into distinct variables. Without this swapping two values requires a temporary variable.  When destructuring an array, you can unpack and assign the remaining part of it to a variable using the rest pattern.

REST
The rest parameter syntax allows us to represent an indefinite number of arguments as an array. Rest parameters have been introduced to reduce the boilerplate code that was induced by the arguments

SPREAD
Spread syntax (...) allows an iterable such as an array expression or string to be expanded in places where zero or more arguments (for function calls) or elements (for array literals) are expected, or an object expression to be expanded in places where zero or more key-value pairs (for object literals) are expected.
Rest syntax looks exactly like spread syntax. In a way, rest syntax is the opposite of spread syntax. Spread syntax "expands" an array into its elements, while rest syntax collects multiple elements and "condenses" them into a single element. Without spread syntax, to create a new array using an existing array as one part of it, the array literal syntax is no longer sufficient and imperative code must be used instead using a combination of push(), splice(), concat(), etc. With spread syntax this becomes much more succinct.

FUNCTION DEFAULTS
Default function parameters allow named parameters to be initialized with default values if no value or undefined is passed.
The default argument is evaluated at call time..  functions and variables declared in the function body cannot be referred to from default value parameter initializers; attempting to do so throws a run-time. Parameters are still set left-to-right, overwriting default parameters even if there are later parameters without defaults.