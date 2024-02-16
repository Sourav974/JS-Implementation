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

/** 2.  Polyfill of Reduce **/

const arr3 = [1, 2, 3, 4, 5, 6]; // array

function reduceCallback(acc, cur) {
  // callback function for reduce polyfill
  return acc + cur;
}

Array.prototype.myReduce = function (reduceCallback, initialValue) {
  // Polyfill function of reduce
  let acc = initialValue ? initialValue : this[0];

  for (let i = initialValue ? 0 : 1; i < this.length; i++) {
    acc = reduceCallback.call(this, acc, this[i], i, this);
  }

  return acc;
};

const reducePolyfill = arr3.myReduce(reduceCallback); // Driver code
console.log(reducePolyfill);
