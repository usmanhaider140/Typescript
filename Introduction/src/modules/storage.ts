// Topic: Default Export

interface Map<K, V> {
  get(key: K): V;
  set(key: K, value: V): void;
}

export default class Store {
  constructor(private readonly storage: Map<string, any>) {}
  get<T>(key: string): T {
    return this.storage.get(key);
  }
  set<T>(key: string, value: T): void {
    this.storage.set(key, value);
  }
}

// Topic: exports module
export class Compressor {
  constructor(private readonly store: Store) {
    console.log(this.store.get("key"));
  }

  compress(data: string): string {
    return data;
  }
}

export class Decompressor {
  constructor(private readonly store: Store) {
    console.log(this.store.get("key"));
  }
  decompress(data: string): string {
    return data;
  }
}
