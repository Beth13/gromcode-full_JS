/* eslint-disable max-classes-per-file */

export class User {
  constructor(id, name, sessionId) {
    this._id = id;
    this._name = name;
    this._sessionId = sessionId;
  }

  get id() {
    return this._id;
  }

  get name() {
    return this._name;
  }

  get sessionId() {
    return this._sessionId;
  }
}

export class UserRepository {
  constructor(users) {
    this._users = Object.freeze(users);
  }

  get users() {
    return this._users;
  }

  getUserNames() {
    return this._users.map(({ name }) => name);
  }

  getUserIds() {
    return this._users.map(({ id }) => id);
  }

  getUserNameById(id) {
    return this._users.map(({ name }) => name)[
      this._users.map(({ id }) => id).indexOf(id)
    ];
  }
}

// examples
const user = new User("1", "Tom", "session-id");
const user1 = new User("2", "Bob", "session-id1");
const user2 = new User("3", "Liz", "session-id2");

// получить свойства можем
console.log(user.id); // ===> '1'
console.log(user.name); // ===> 'Tom'
console.log(user.sessionId); // ===> 'session-id'

// но изменить эти свойства нельзя
// user.name = "Bob"; // пытаемся изменить старое значение
// console.log(user.name); // ===> 'Tom' - но изменение проигнорировано, так как setter отсутствует

const arr = new UserRepository([user, user1, user2]);
console.log(arr.getUserNames());
console.log(arr.getUserIds());
console.log(arr.getUserNameById("3"));
