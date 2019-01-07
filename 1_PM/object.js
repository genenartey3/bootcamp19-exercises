// complete the function such that it returns true if an object or any of its
// subobjects have any falsy values and false otherwise
// HINT: recursion may help here

const hasFalsyValue = obj => {
  for( key in obj)
  {
   if (!!(obj[key]) == "false") 
  }
  return false;
};

