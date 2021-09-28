const milili = [10, 25, 4]; // DO NOT change this line

function myArray(mili) 
{
    'use strict';

    // Only change code below this line
    // Using mili = [4 , 10, 25] would be invalid
   let a = mili[0];
   let b = mili[1];
   let c = mili[2];
   mili[0] = c;
   mili[1] = a;
   mili[2] = b;

    //Only change code above this line

    return mili;
}
console.log(myArray(milili));
module.exports= myArray;
