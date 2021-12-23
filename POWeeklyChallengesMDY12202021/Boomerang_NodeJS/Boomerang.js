
// To Run You Must 1 : Have NodeJS Installed
// Downloaded Node JS 16.13.1 LTS
// To RUn You Must 2 : Use The Command node <Path To File>
// To Run You Must 3 : Be In The Same Directory As Boomerang.js

//*** NOTE Node JS Is Not Within My Tech Stack ***

//** NOTE THIS SOLUTION ONLY WORKS FOR INTEGERS LESS THAN 10
//** AKA SINGLE DIGIT INTEGERS

// Prompt : 
// A boomerang is a V-shaped sequence that is either 
// upright or upside down. Specifically, a boomerang 
// can be defined as: sub-array of length 3, with the 
// first and last digits being the same and the middle 
// digit being different.
// Create a function that returns the total number of boomerangs in an array.
// Some boomerang examples:
// [3, 7, 3], [1, -1, 1], [5, 6, 5]
// [3, 7, 3, 2, 1, 5, 1, 2, 2, -2, 2]
// 3 boomerangs in this sequence: 
// [3, 7, 3], [1, 5, 1], [2, -2, 2]
// Be aware that boomerangs can overlap, like so:
// [1, 7, 1, 7, 1, 7, 1]
// 5 boomerangs (from left to right): 
// [1, 7, 1], [7, 1, 7], [1, 7, 1], [7, 1, 7], and [1, 7, 1]



var fs = require('fs');
// VV Included Custom Debug Module
var pABC = require('./Boomerang_m1.js');


fs.readFile('BoomerangInput.txt', (err, data) => {

  let input = data.toString('utf-8');

  // VV If we still have parts of the given array to consider
  let arrayOn = 0;

  // VV Store The integer index values
  let numA;
  let numB;
  let numC;

  let length = input.length;

  let tally = 0;

  let negativeA = false;
  let negativeB = false;
  let negativeC = false;

  let activeInput = "";
  let grabbingChars = 1;

  for (let i = 0, j = 0; i < length - 6; ++ i) {
    
    while (input[j] != '\n' && j < length) {
      if (input[j - 1] == ']') grabbingChars = 0;
      if (grabbingChars == 1) activeInput += input[j];
      ++j;
    } 

    if (input[i] != '-') numA = input[i];
    else { ++i; negativeA = true; numA = input[i]; }

    if (input[i + 3] != '-') numB = input[i + 3];
    else { ++i; negativeB = true; numB = input[i + 3]; }

    if (input[i + 6] != '-') numC = input[i + 6];
    else { ++i; negativeC = true; numC[i + 6]; }

    // pABC.printABC(numA, numB, numC);

    if (numA == '[') { 
      console.log(activeInput);
      activeInput = "";
      ++j;
  
      negativeA = false;
      negativeB = false;
      negativeC = false;

      arrayOn = 1;
      continue; 
    }
    else if (numC == ']') { 
      arrayOn = 0;
      console.log("Boomerang Tally : " + tally);
      console.log();
      tally = 0;

      grabbingChars = 1;

    }

    if (arrayOn == 1 && numA != ' ') {
      // pABC.printABC(numA, numB, numC);
      
      if (negativeA == true) numA = numA * -1;
      if (negativeB == true) numB = numB * -1;
      if (negativeC == true) numC = numC * -1

      // pABC.printABC(numA, numB, numC);

      if (numA == numC && numA != numB) {
        ++tally;
        pABC.printBoom(numA, numB, numC);
      }

      negativeA = false;
      negativeB = false;
      negativeC = false;

    }

  }

});

