const student = {
  name: "Rahul",
};

Object.prototype.getKeys = function () {
  return Object.keys(this);
};

const keys = student.getKeys();

console.log(keys);
