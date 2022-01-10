"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User2 = exports.User = void 0;
class User {
    constructor(name) {
        this.name = name;
    }
}
exports.User = User;
let user = new User('Diva');
console.log(user);
console.log(user.name);
class User2 {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
exports.User2 = User2;
let user2 = new User2('Diva', 30);
console.log(user2);
