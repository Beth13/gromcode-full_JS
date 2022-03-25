"use strict";

export const getOwnProps = (obj) => {
  let result = [];

  Object.keys(obj).filter((elem) => {
    if (typeof obj[elem] !== "function") {
      result.push(elem);
    }
  });

  return result;
};

const vehicle = {
  move() {
    console.log(`${this.name} is moving`);
  },
  stop() {
    console.log(`${this.name} stopped`);
  },
};
const ship = {
  name: "Argo",
  hasWheels: false,
  startMachine() {
    console.log(`${this.name} lifting anchor up`);
    this.move();
  },
  stopMachine() {
    console.log(`${this.name} lifting anchor down`);
    this.stop();
  },
  __proto__: vehicle,
};

console.log(getOwnProps(ship));
