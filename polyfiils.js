// Polyfill of Map

// Callback function

function callback(number) {
  return number ** 2;
}

Array.prototype.myMap = function (callback) {
  let tempArr = [];

  for (let i = 0; i < this.length; i++) {
    tempArr.push(callback(this[i]));
  }

  return tempArr;
};

const arr = [1, 2, 3, 4];
const squaredArr = arr.myMap(callback);
console.log(squaredArr);
