"use strict";
class Account {
    constructor(id, owner, _balance) {
        this.id = id;
        this.owner = owner;
        this._balance = _balance;
    }
    deposit(amount) {
        if (amount <= 0) {
            throw new Error("Invalid amount");
        }
        this._balance += amount;
    }
    get balance() {
        return this._balance;
    }
    set balance(value) {
        if (value < 0) {
            throw new Error("Invalid balance");
        }
        this._balance = value;
    }
}
let account = new Account(1, "John", 100);
account.deposit(50);
console.log(account instanceof Account);
console.log(account.balance);
class SeatAssignment {
}
let seats = new SeatAssignment();
seats["A1"] = "John";
seats["A2"] = "Mary";
console.log(seats);
class Ride {
    start() {
        Ride._activeRides++;
    }
    stop() {
        Ride._activeRides--;
    }
    static get activeRides() {
        return Ride._activeRides;
    }
}
Ride._activeRides = 0;
let ride1 = new Ride();
ride1.start();
let ride2 = new Ride();
ride2.start();
console.log(Ride.activeRides);
class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    walking() {
        console.log("Walking ...");
    }
    get FullName() {
        return this.firstName + " " + this.lastName;
    }
}
class Student extends Person {
    constructor(studentId, firstName, lastName) {
        super(firstName, lastName);
        this.studentId = studentId;
    }
    takingTest() {
        console.log("Taking test ...");
    }
}
class Teacher extends Person {
    get FullName() {
        return "Mr. " + super.FullName;
    }
}
printNames([new Student(1, "Student", "Doe"), new Teacher("Jane", "Doe")]);
function printNames(people) {
    for (let person of people) {
        console.log(person.FullName);
    }
}
let teacher = new Teacher("John", "Doe");
console.log(teacher.FullName);
let student = new Student(1, "Usman", "Ali");
class Shape {
    constructor(color) {
        this.color = color;
    }
    render() {
        return this.color;
    }
}
class Calender {
    constructor(year, month) {
        this.year = year;
        this.month = month;
    }
    addEvent() { }
    removeEvent() { }
}
//# sourceMappingURL=classes.js.map