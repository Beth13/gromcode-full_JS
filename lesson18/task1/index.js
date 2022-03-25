"use strict";

export const event = {
  message: "Welcome to the party!",
  guests: [
    { name: "John", age: 18, email: "j@gmail.com" },
    { name: "Tom", age: 19, email: "t@gmail.com" },
    { name: "Kate", age: 17, email: "k@gmail.com" },
    { name: "Liza", age: 21, email: "l@gmail.com" },
  ],
  getInvitations() {
    return this.guests
      .filter(({ age }) => age >= 18)
      .map(({ name, email }) => ({
        email,
        message: `Dear ${name}! ${this.message}`,
      }));
  },
};

console.log(event.getInvitations());
