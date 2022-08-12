"use strict";
var _a;
let sales = 123456789;
let course = "Typescript";
let is_published = true;
let level;
level = 1;
level = "Beginner";
function render(document) {
    console.log(document);
}
let numbers = [1, 2, 3];
let numbers2 = [1, 2, 3];
let numbers3 = [1, 2, 3, "a", "b", "c"];
let numbers4 = [1, 2, 3, "a", "b", "c"];
let anyTypeArray = [];
let user = [1, "John"];
user.push(2);
let green = 0;
let red = 1;
let blue = 2;
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
let myColor = Color.Green;
console.log(myColor);
function incomeTax(income, taxYear = 2022) {
    if ((taxYear || 2022) < 2022)
        return income * 1.2;
    return income * 1.3;
}
incomeTax(10000, 2023);
let employee = {
    id: 1,
    retire: (date) => {
        console.log(date);
    },
};
employee.name = "John";
function kgToLbs(weight) {
    if (typeof weight === "number")
        return weight * 2.2;
    return parseInt(weight) * 2.2;
}
let textBox = {
    drag: () => {
        console.log("dragging ...");
    },
    resize: () => {
        "Resizing ...";
    },
};
let quantity = 500;
let metric = "cm";
function greet(name) {
    if (name)
        console.log(name.toUpperCase());
    console.log("Salam!");
}
greet(null);
function getCustomer(id) {
    return id === 0
        ? null
        : {
            birthdate: new Date(),
        };
}
let customer = getCustomer(0);
console.log((_a = customer === null || customer === void 0 ? void 0 : customer.birthdate) === null || _a === void 0 ? void 0 : _a.getFullYear());
let speed = null;
let ride = {
    speed: speed !== null && speed !== void 0 ? speed : 30,
};
let phone = document.getElementById("phone");
phone.value = "12345";
function rendering(document) {
    if (typeof document === "string") {
        console.log(document);
    }
}
function processEvent(event) {
    while (true) {
        console.log(event);
    }
}
function reject(error) {
    throw error;
}
//# sourceMappingURL=index.js.map