const assert = require("assert");

// Feel free to look things up online!

const tokenize = str => {
  // TODO - write a function which converts a multi-word string into an array of word
  const arr = str.split("") 
  return arr

};

const reverse = str => {
  // TODO - write a function which reverses the string
  const brokenString = str.split("")
  const flipped = brokenString.reverse()
  const flipString = flipped.join("")
  return flipString   
};

const uniqueOnes = arr => {
  // TODO - write a function which returns the inputted array without duplicate elements
  function filter(arr)
  {
    const uniqueset = new Set (arr);
    console.log(uniqueset);
    const uniquearr = Array.from(uniqueset);
    console.log(uniquearr);
    return uniquearr
  } 
};

const factorial = num => {
  // TODO - write a function which returns the factorial of a positive integer
  let output = 1
  for(let i = 1; i <= num; i++);
    {
      output *= i 
    }
  return output

};

const zip = (arr1, arr2) => {
  // TODO - write a function which combines two arrays into an array of 2-element arrays and returns -1
  // if the two arrays are of unequal length
  // Example: zip([1, 2, 3], [5, 3, 1]) === [[1, 5], [2, 3], [3, 1]]
  if ( arr1.length != arr2.length)
  {
    return -1;
  }
  const bigarr = [];
  for (i =  0; i <= arr1; i++ );
    {
      bigarr.push([arr1[i],arr2[i]]);
    }
  return bigarr  
};

const unzip = arr => {
  // TODO - Write a function which does the opposite of `zip()
  // Example unzip([[1, 5], [2, 3], [3, 1]]) === [1, 2, 3], [5, 3, 1]
  for (let i = 0; i <= arr.length; i++);
  {

  }
};

const shiftRight = (str, num) => {
  // TODO - write a function which shifts a string `num` characters to the right
  // Example = shiftThree("Hello") === "lloHe"
};

const announceDate = () => {
  // TODO - write a function which returns the current date in the following format:
  // "Today's date is January 7th, 2016. It is eleven thirty-seven in the morning."
};

// Write tests here:
assert(reverse("str") === "rts");
assert(1 < 2);
assert(1 + 2 === 3);
assert([2, 3][0] === 2);
// asssert (reverse("3df") === "fd3")
