export function User(name, age) {
  this.name = name;
  this.age = age;
}

User.prototype.sayHi = function () {
  console.log(`Hi, I am ${this.name}`);
};

User.prototype.requestNewPhoto = function () {
  console.log(`New photo request was sent for ${this.name}`);
};

User.prototype.setAge = function (newAge) {
  this.age = newAge;
  if (this.age < 0) {
    return false;
  }
  if (this.age >= 25) {
    console.log(`New photo request was sent for ${this.name}`);
  }
  return newAge;
};

// const user1 = new User("Tom", 17);
// const user2 = new User("Bob", 27);

// user1.sayHi();
// user2.requestNewPhoto();
// user2.setAge(-1);
// console.log(user2.setAge(24));
