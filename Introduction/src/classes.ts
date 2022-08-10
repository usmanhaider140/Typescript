class Account {
  //   readonly id: number;
  //   owner: string;
  nickname?: string;
  //   private _balance: number;

  constructor(
    public readonly id: number,
    public owner: string,
    private _balance: number
  ) {
    // this.id = id;
    // this.owner = owner;
    // this._balance = balance;
  }
  deposit(amount: number) {
    if (amount <= 0) {
      throw new Error("Invalid amount");
    }
    this._balance += amount;
  }

  get balance(): number {
    return this._balance;
  }
  set balance(value: number) {
    if (value < 0) {
      throw new Error("Invalid balance");
    }
    this._balance = value;
  }
}

let account = new Account(1, "John", 100);
account.deposit(50);
console.log(account instanceof Account);
// account.balance = -100;
console.log(account.balance);

// Index Signature Property

class SeatAssignment {
  [seatNumber: string]: string;
}

let seats = new SeatAssignment();

seats["A1"] = "John";
seats["A2"] = "Mary";
console.log(seats);

// Static Properties and Methods
class Ride {
  private static _activeRides: number = 0;
  start() {
    Ride._activeRides++;
  }
  stop() {
    Ride._activeRides--;
  }

  static get activeRides(): number {
    return Ride._activeRides;
  }
}

let ride1 = new Ride();
ride1.start();

let ride2 = new Ride();
ride2.start();

console.log(Ride.activeRides);

// Topic: Inheritance
// Parent | Base | Super Class
// Child | Derived | Sub Class
// Private methods are not inherited and can be accessed within the class
// Protected methods are inherited and can be accessed within the class and in the derived class
class Person {
  constructor(public firstName: string, public lastName: string) {}
  protected walking(): void {
    console.log("Walking ...");
  }
  get FullName(): string {
    return this.firstName + " " + this.lastName;
  }
}

class Student extends Person {
  constructor(public studentId: number, firstName: string, lastName: string) {
    super(firstName, lastName);
  }
  takingTest(): void {
    console.log("Taking test ...");
  }
}

// Topic: Overriding
class Teacher extends Person {
  override get FullName(): string {
    return "Mr. " + super.FullName;
  }
}

class Principal extends Person {
  override get FullName(): string {
    return "Principal " + super.FullName;
  }
}

printNames([new Student(1, "Student", "Doe"), new Teacher("Jane", "Doe")]);

// Topic: Polymorphism
function printNames(people: Person[]) {
  for (let person of people) {
    console.log(person.FullName);
  }
}

let teacher = new Teacher("John", "Doe");
console.log(teacher.FullName);

let student = new Student(1, "Usman", "Ali");

// Topic: Abstract Classes
// Abstract classes cannot be instantiated directly but can be extended to create concrete classes that can be instantiated directly or extended
// Abstract classes can have abstract methods and abstract properties that must be implemented in the derived classes or in the derived abstract classes

abstract class Shape {
  constructor(public color: string) {}
  render() {
    return this.color;
  }
}

class Circle extends Shape {
  constructor(public radius: number, color: string) {
    super(color);
  }
  override render(): string {
    return super.render() + " " + this.radius;
  }
}

// Topic: Interfaces

// abstract class Calender {
// constructor(public year: number, public month: number) {}
// abstract addEvent(): void;
// abstract removeEvent(): void;
// }

interface Calender {
  year: number;
  month: number;
  addEvent(): void;
  removeEvent(): void;
}

interface CloudCalendar extends Calender {
  sync(): void;
}

class GoogleCalendar implements Calender {
  year: number;
  month: number;
  constructor(year: number, month: number) {
    this.year = year;
    this.month = month;
  }
  addEvent(): void {
    throw new Error("Method not implemented.");
  }
  removeEvent(): void {
    throw new Error("Method not implemented.");
  }
}
