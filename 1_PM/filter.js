// Complete the implementation below such that all elements of the array
// that are not multiples of 7 are removed

const arr = [7, 8, 15, 14, 13, 70, 44, 35, 88, 77, false, "7", "hi", null];

const multOf7 = el => {
  // TODO
    if ( typeof el != 'number')
      return false
    else if (el % 7 != 0)
      return false 
    else 
      return true    
};

Array.prototype.filter = function(fun) {
  // TODO
  const filtered = []
  this.forEach(function(element) {
    if (fun(element))
    {
      filtered.push(element) 
    }  
  });
  return filtered
};

const newArr = arr.filter(multOf7);

console.log(newArr);
