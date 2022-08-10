// Topic: Problem
class KeyValuePair {
  constructor(public key: number, public value: string) {}
}

class StringKeyValuePair {
  constructor(public key: string, public value: string) {}
}

// Topic: Generic Classes

class KeyValuePairGeneric<KType, VType> {
  constructor(public key: KType, public value: VType) {}
}

const keyValue = new KeyValuePairGeneric<number, string>(1, "Hello");

// Topic: Generic Functions

function wrapInArray<T>(value: T): [T] {
  return [value];
}

const numbersArray = wrapInArray<number>(1);

class ArrayUtils {
  static wrapInArray<T>(value: T): [T] {
    return [value];
  }
}

const stringsArray = ArrayUtils.wrapInArray("Hello");

// Topic: Generics with Interfaces

// let we want get users
// or products
// we need an interface for the response

interface Result<T> {
  data: T | null;
  error: string | null;
}

function fetch<T>(url: string): Result<T> {
  return {
    data: null,
    error: null,
  };
}

interface User {
  id: number;
  username: string;
}

interface product {
  id: number;
  title: string;
}

const userResult = fetch<User>("/users/1");

const productResult = fetch<product>("/products/1");

userResult.data?.username;

// Topic: Generic Constraints
interface GenericUser {
  name: string;
}

class Car {
  constructor(public name: string) {}
}

class Honda extends Car {
  constructor(name: string) {
    super(name);
  }
}

function echo<T extends number | string>(value: T): T {
  return value;
}

function echoInterface<T extends GenericUser>(value: T): T {
  return value;
}

function echoClass<T extends Car>(value: T): T {
  return value;
}

echo(1);
echoInterface({ name: "John" });
echoClass(new Honda("Honda"));
echoClass(new Car("Car"));

// Extending Generic Classes

interface Product {
  name: string;
  price: number;
}

// Topic: Type Mapping

type ReadonlyObject<T> = {
  readonly [property in keyof T]: T[property];
};

type OptionalObject<T> = {
  [property in keyof T]?: T[property];
};

type PartialObject<T> = {
  [property in keyof T]: T[property] | null;
};

let Product: Readonly<Product> = {
  name: "Book",
  price: 20,
};

class Store<T> {
  protected _objects: T[] = [];
  add(object: T) {
    this._objects.push(object);
  }
  findObject(property: keyof T, value: unknown): T | undefined {
    return this._objects.find((object) => object[property] === value);
  }
}

let store = new Store<Product>();
store.add({ name: "Product 1", price: 100 });
store.add({ name: "Product 2", price: 200 });
store.findObject("name", "Product 1");

// Pass on the generic type parameter

class CompressibleStore<T> extends Store<T> {
  compress() {}
}

const compressibleStore = new CompressibleStore<Product>();

// Restrict the generic type parameter
class searchableStore<T extends { name: string }> extends Store<T> {
  search(name: string) {
    this._objects.find((obj) => obj.name === name);
  }
}

// Fix the generic type parameter
class searchableStoreFixed extends Store<Product> {}
