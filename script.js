const student = {
  name: "Rahul",
};

Object.prototype.getKeys = function () {
  return Object.keys(this);
};

console.log(student.getKeys());
