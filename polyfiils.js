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

/** 3.  Polyfill of Reduce **/

const arr3 = [1, 2, 3, 4, 5, 6]; // array

function reduceCallback(acc, cur) {
  // callback function for reduce polyfill
  return acc + cur;
}

Array.prototype.myReduce = function (reduceCallback, initialValue) {
  // Polyfill function of reduce

  if (typeof reduceCallback !== "function") {
    throw new Error("Callback is not a function");
  }

  let acc = initialValue ? initialValue : this[0];

  for (let i = initialValue ? 0 : 1; i < this.length; i++) {
    acc = reduceCallback.call(this, acc, this[i], i, this);
  }

  return acc;
};

const reducePolyfill = arr3.myReduce(reduceCallback, 8); // Driver code
console.log(reducePolyfill);

/** 4.  Polyfill of Flatten **/

// Flatten an array means an array without any sub arrays or nested arrays

const arr4 = [1, 2, 3, 4, [5, 6], [[7, 8]]];

Array.prototype.myFlat = function (depth = 1) {
  let tempArr = [];

  function getFlattenArray(array, depth) {
    for (element of array) {
      if (Array.isArray(element) && depth) {
        getFlattenArray(element, depth - 1);
      } else {
        tempArr.push(element);
      }
    }
  }

  getFlattenArray(this, depth);
  return tempArr;
};

const flattenArray = arr4.myFlat(2);
console.log("flattenArray is ", flattenArray);

/** 5.  Polyfill of Call and Apply  **/

let obj = {
  name: "Sourav",
  city: "Chandigarh",
};

function displayUserInfo(state) {
  console.log(`Hi I am ${this.name} from ${this.city}, ${state}`);
}

// Polyfill of Call
Function.prototype.myCall = function (context, ...args) {
  if (typeof context !== "object") {
    throw new Error("Context should be Object");
  } else if (typeof this !== "function") {
    throw new Error("this should be function");
  } else {
    context.showMessage = this;
    context.showMessage(...args);
    delete context.showMessage;
  }
};

// Polyfill Of Apply
Function.prototype.myApply = function (context, args) {
  context.showMessage = this;
  context.showMessage(args);
  delete context.showMessage;
};

displayUserInfo.myCall(obj, "Union Teritory"); // calling Polyfill of call
displayUserInfo.myApply(obj, ["Union Teritory"]); // calling Polyfill of apply
console.log(obj);

/** 6.  Polyfill of Bind  **/

let bindObj = {
  name: "Sourav",
  city: "Chandigarh",
};

function displayUserInfoBind(state) {
  console.log(`Hi I am ${this.name} from ${this.city}, ${state}`);
}

Function.prototype.myBind = function (context, ...args) {
  context.wrapperFunc = this;

  return function (...rest) {
    context.wrapperFunc(...args, ...rest);
    delete context.wrapperFunc;
  };
};

const bindFunc = displayUserInfoBind.myBind(obj);
bindFunc("Union Terittory");
