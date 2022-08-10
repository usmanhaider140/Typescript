// Topic: Decorators
// Decorators are a way to modify the behavior of a class or method at runtime.
// Note: First Method:
// class MakeComponent {
//   insertIntoDOM() {
// console.log("Inserting into DOM");
//   }
// }
// class ProfileComponent extends MakeComponent {}

// Note: Second Method: is to use the @Component decorator to tell Programmatic Component Framework that this class is a component.

// function Component(constructor: Function) {
//   console.log("Component decorator called");
//   constructor.prototype.componentName = constructor.name;
//   constructor.prototype.uniqueId = Math.random();
//   constructor.prototype.insertIntoDOM = function () {
//     console.log("Inserting into DOM");
//   };
// }

// @Component
// class ProfileComponent {}

// Topic: Decorator Parameters
// Decorator Factory

type ComponentOptions = {
  selector: string;
};

function Component(options: ComponentOptions) {
  return function (constructor: Function) {
    console.log("Component decorator called with value: " + options.selector);
    constructor.prototype.componentName = constructor.name;
    constructor.prototype.uniqueId = Date.now();
    constructor.prototype.options = options.selector;
    constructor.prototype.insertIntoDOM = function () {
      console.log("Inserting into DOM");
    };
  };
}

// Topic: Decorator Composition

function Pipe(constructor: Function) {
  console.log("Decorator Pipe called");
  constructor.prototype.pipe = true;
}

// @Component({ selector: "#my-profile" })
// @Pipe
// class ProfileComponent {}

// Topic: Method Decorators

function Log(target: any, methodName: string, description: PropertyDescriptor) {
  const originalMethod = description.value;
  description.value = function (...args: any) {
    console.log(`Before calling ${methodName}`);
    originalMethod.call(this, ...args);
    console.log(`After calling ${methodName}`);
  };
}

class PersonComponent {
  @Log
  say(message: string) {
    console.log("Person Says: " + message);
  }
}

// let person = new PersonComponent();
// person.say("Hello");

// Topic: Accessor Decorators

function Capitalize(
  target: any,
  methodName: string,
  descriptor: PropertyDescriptor
) {
  const original = descriptor.get;
  descriptor.get = function () {
    const result = original?.call(this);
    return typeof result === "string" ? result.toUpperCase() : result;
  };
}

class Profile {
  constructor(public firstName: string, public lastName: string) {}

  @Capitalize
  get FullName(): string {
    return `${this.firstName} ${this.lastName}`;
  }
}

let myProfile = new Profile("Usman", "Haider");

console.log(myProfile.FullName);

// Topic: Property Decorators

function MinLength(length: number) {
  return (target: any, propertyName: string) => {
    let value: string;
    const description: PropertyDescriptor = {
      get() {
        return value;
      },
      set(newValue: string) {
        if (newValue.length < length) {
          throw new Error(`Minimum length is for ${propertyName} is ${length}`);
        }
        value = newValue;
      },
    };
    Object.defineProperty(target, propertyName, description);
  };
}

class User {
  @MinLength(4)
  password: string;

  constructor(password: string) {
    this.password = password;
  }
}

let newUser = new User("1234");
console.log(newUser.password);

// Topic: Parameter Decorators1
type ParameterDecoratorType = {
  parameterName: string;
  parameterIndex: number;
};

const parameters: ParameterDecoratorType[] = [];

function Watch(target: any, parameterName: string, parameterIndex: number) {
  parameters.push({
    parameterName,
    parameterIndex,
  });
}

class vehicle {
  constructor(public speed: string) {}
  watchSpeed(@Watch speed: string) {
    console.log(`${speed}`);
  }
}

let vehicle1 = new vehicle("100");
vehicle1.watchSpeed("100");
console.log(parameters);
