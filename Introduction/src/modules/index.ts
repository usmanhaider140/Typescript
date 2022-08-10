import { Circle } from "./shapes";
import Storage, { Compressor, Decompressor } from "./storage";

const circle = new Circle(10);
console.log("====================================");
console.log(circle.area);
console.log("====================================");

interface Map<K, V> {
  get(key: K): V;
  set(key: K, value: V): void;
}

const map: Map<string, any> = {
  get(key: string) {
    return 0;
  },
  set(key: string, value: any) {
    return;
  },
};
const store = new Storage(map);
const compressor = new Compressor(store);
const decompressor = new Decompressor(store);
console.log(compressor.compress("Hello World"));
console.log(decompressor.decompress("Hello World"));
