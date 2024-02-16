/**  1. Polyfill of Map **/

//  Callback function
function callback(number) {
  return number ** 2;
}

// Prototype
Array.prototype.myMap = function (callback) {
  let tempArr = [];

  for (let i = 0; i < this.length; i++) {
    tempArr.push(callback(this[i]));
  }

  return tempArr;
};

// Driver code
const arr = [1, 2, 3, 4];
const squaredArr = arr.myMap(callback);
console.log(squaredArr);

/** 2.  Polyfill of filter **/

const arr2 = [1, 2, 3, 4, 5, 6];

// Prototype
Array.prototype.myFilter = function (callback) {
  let tempArr = [];

  for (let i = 0; i < this.length; i++) {
    if (callback(this[i])) {
      tempArr.push(this[i]);
    }
  }

  return tempArr;
};

// Driver Code
const result = arr2.myFilter((number) => {
  return number > 3;
});

console.log(result);
