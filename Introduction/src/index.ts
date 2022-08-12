let sales = 123_456_789;
let course = "Typescript";
let is_published = true;
let level;
level = 1;
level = "Beginner";

function render(document: any) {
  console.log(document);
}

// Topic: Arrays

let numbers: number[] = [1, 2, 3];
let numbers2: Array<number> = [1, 2, 3];
let numbers3: (number | string)[] = [1, 2, 3, "a", "b", "c"];
let numbers4: Array<number | string> = [1, 2, 3, "a", "b", "c"];
let anyTypeArray = [];

// Topic: Tuples
let user: [number, string] = [1, "John"];
user.push(2);

// Topic: Enums

let green = 0;
let red = 1;
let blue = 2;

enum Color {
  Red = 0,
  Green = 1,
  Blue = 2,
}

let myColor: Color = Color.Green;

console.log(myColor);

// Topic: Function

function incomeTax(income: number, taxYear = 2022): number {
  if ((taxYear || 2022) < 2022) return income * 1.2;
  return income * 1.3;
}

incomeTax(10000, 2023);

// Topic: Objects

let employee: Employee = {
  id: 1,
  retire: (date: Date) => {
    console.log(date);
  },
};
employee.name = "John";

// Topic: Type Aliases

type Employee = {
  readonly id: number;
  name?: string;
  retire?: (date: Date) => void;
};

// Topic: Union Types

function kgToLbs(weight: number | string): number {
  // Narrowing
  if (typeof weight === "number") return weight * 2.2;
  return parseInt(weight) * 2.2;
}

// Topic: Intersection Types

type Draggable = {
  drag: () => void;
};

type Resizable = {
  resize: () => void;
};

type UIWidget = Draggable & Resizable;

let textBox: UIWidget = {
  drag: () => {
    console.log("dragging ...");
  },
  resize: () => {
    "Resizing ...";
  },
};

// Topic: Literal (exact or specific) Types
type Quantity = {};
let quantity: 500 | 1000 | 2000 = 500;
let metric: "cm" | "inch" = "cm";

function greet(name: string | null) {
  if (name) console.log(name.toUpperCase());
  console.log("Salam!");
}

greet(null);

// Topic: Optional Chaining

type Customer = {
  birthdate: Date;
};

function getCustomer(id: number): Customer | null {
  return id === 0
    ? null
    : {
        birthdate: new Date(),
      };
}

let customer = getCustomer(0);

// Topic: Optional Property accessor
console.log(customer?.birthdate?.getFullYear());

// Topic: Optional Element accessor
//  let customers = [{ birthdate: new Date() }, { birthdate: new Date() }];
//  console.log(customers?.[0]);

// Topic: Optional Call

// let log: any = null
// log?.("Hello World");

// Topic: Nullish Coalescing Operator

let speed: number | null = null;

let ride = {
  speed: speed ?? 30,
};

// Topic: Type Assertion

// let phone = document.getElementById("phone") as HTMLInputElement;
let phone = <HTMLInputElement>document.getElementById("phone");
phone.value = "12345";

// Topic: Type Unknown

function rendering(document: unknown) {
  if (typeof document === "string") {
    console.log(document);
  }
}

// Topic: Never Type

function processEvent(event: Event): never {
  while (true) {
    console.log(event);
  }
}
function reject(error: Error): never {
  throw error;
}

// processEvent(new Event("click"));
// console.log("first");

// reject(new Error("Error"));
