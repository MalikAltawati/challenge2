// Use the following helper functions in your solution
function each(coll, f) {
  if (Array.isArray(coll)) {
    for (var i = 0; i < coll.length; i++) {
      f(coll[i], i);
    }
  } else {
    for (var key in coll) {
      f(coll[key], key);
    }
  }
}

function filter(array, predicate) {
  var acc = [];
  each(array, function(element, i) {
    if (predicate(element, i)) {
      acc.push(element);
    }
  });
  return acc;
}

function map(array, func) {
  var acc = [];
  each(array, function(element, i) {
    acc.push(func(element, i));
  });
  return acc;
}

// Remember to relax :)

//=======================================================================
/*                                  Q1                                 */
//=======================================================================

/*
Depending on data modeling concept that you have learned:

Create a factory function called makeComputer that represents computers, 
What different attributes computers may have? 

// RAM / CPU / HDD / SDD

Create two computers object from your factory function and save them in one array called computers!

Note: please write one or two lines here describing your solution.
*/// to write a factory function I started with using return and I passed all the possible attributes within
// the curly brackets , then declared 2 computers and assigned them using the factory function
// and values passed to it 

function makeComputer(type, color, weight, RAM , Storage) {
  // TODO: Your code here
  return{
    type: type,
    color: color,
    weight: weight,
    RAM: RAM,
    Storage: Storage 

  }
}

var computer1 = makeComputer("HP", "RED", "5 KILO", "16RAM","HDD");
var computer2 = makeComputer("DELL", "WHITE", "4.5 KILO", "8RAM","SDD");

var array = [computer1,computer2];

// Write a function displayComputer that can be used to display one computer.

function displayComputer(computer) {
  // TODO: Your code here
  return computer;
}

//=============================================================================
/*                                  Q2                                       */
//=============================================================================

/*
Write a function that takes an array of strings as a input
and returns an array of all of those strings, but transformed to upper case.

You can use toUpperCase method to convert a string to upper case. 
Solve it using the most appropriate helper functions(each,map,filter).



Note: please write one or two lines here describing your solution.

var strArr = ['hello', 'world', 'whirled', 'peas'];
uppercaseAll(strArr); ==> [ 'HELLO', 'WORLD', 'WHIRLED', 'PEAS' ]
*/

//  used map because i see it was the appropriate one for this function


function uppercaseAll(arrayOfStrings) {
  // TODO: your code here
  return map(arrayOfStrings,function(string){
    return string.toUpperCase();
  });

  }


//=============================================================================
/*                                  Q3                                       */
//=============================================================================

/*
Write a function that takes array of objects as an input and returns an array
with only the countries that have a population higher than 500 million.

Solve it using one of the most appropriate helperthe helpers functions(each,map,filter).

highestPopulation(data); ==> [{country: "China", population: 1409517397},{country: "India", population: 1339180127}]
Note: please write one or two lines here describing your solution.

Here’s the data you’ll work with:
*/
//  used filter because i see it was the appropriate one for this function and because it has a condition 

var data = [
  {
    country: 'China',
    population: 1409517397
  },
  {
    country: 'India',
    population: 1339180127
  },
  {
    country: 'USA',
    population: 324459463
  },
  {
    country: 'Indonesia',
    population: 263991379
  }
];

function highestPopulation(arrayOfObjects) {
  // TODO: your code here
  return filter(arrayOfObjects,function(element , key){
    return element.population > 500000000;
  });
}

//=============================================================================
/*                              Q4                                           */
//=============================================================================

/*
Write a function halveAll that takes an array of numbers as a input 
and returns an array of all of those numbers halved (divided by two).

Note: solve it using the most appropriate helper functions(each,map,filter)

var numsArray = [2, 6, 20, 8, 14];
halveAll(numsArray); ==> [ 1, 3, 10, 4, 7 ]

Note: please write one or two lines here describing your solution.
*/
//  used filter because i see it was the appropriate one for this function

function halveAll(numbers) {
  // your code is here
  return map(numbers,function(number){
    return number / 2
  });
}
//=============================================================================
/*                                  Q5                                       */
//=============================================================================

/*
Write a function called values that accepts an object as a parameter, and outputs an array of the object's values. 
Solve it using one of the most appropriate helpers functions(each,map,filter).

values({first : 5, second: 'something' , third : 129}) ==> [5, 'something', 129];

Note: please write one or two lines here describing your solution.
*/
// used map because i see it was the appropriate one for this function
function values(obj) {
  return map(obj,function(element){
    return element;
  });


}

//Good Luck :))
// thanks 
