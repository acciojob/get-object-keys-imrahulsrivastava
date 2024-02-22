const myObj = {
  name: "John",
  age: 30,
  city: "New York",
};

Object.prototype.getKeys = function () {
  return Object.keys(this);
};

const keys = myObj.getKeys();
console.log(keys);
