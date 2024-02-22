const student = {
  name: "John",
  age: 30,
  city: "New York",
};

Object.prototype = function getKeys () {
  return Object.keys(this);
};

const keys = student.getKeys();
console.log(keys);
