export function defer(func, ms) {
  return function () {
    setTimeout(() => func.apply(this, arguments), ms);
  };
}

// const user = {
//   name: "Tom",
//   sayHi() {
//     console.log(`Hi, I'm ${this.name}!`);
//   },
// };

// const deferredSayHi = defer(user.sayHi.bind(user), 1000);

// deferredSayHi();
