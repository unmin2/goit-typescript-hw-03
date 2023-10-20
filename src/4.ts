class Key {
  private signature: number;

  constructor() {
    this.signature = Math.random();
  }

  getSignature(): number {
    return this.signature;
  }
}

class Person {
  private key: Key;

  constructor(key: Key) {
    this.key = key;
  }

  getKey(): Key {
    return this.key;
  }
}

abstract class House {
  private door: boolean = false;
  protected houseKey: Key; // Змінено ім'я для уникнення конфлікту імен
  private tenants: Person[] = [];

  constructor(key: Key) {
    this.houseKey = key; // Змінено ім'я для уникнення конфлікту імен
  }

  abstract openDoor(key: Key): void;

  comeIn(person: Person): void {
    if (this.door) {
      this.tenants.push(person);
      console.log(`${person.getKey().getSignature()} entered the house.`);
    } else {
      console.log('The door is closed. You cannot enter.');
    }
  }
}

class MyHouse extends House {
  openDoor(key: Key): void {
    if (key.getSignature() === this.houseKey.getSignature()) {
      this.door = true;
      console.log('The door is open.');
    } else {
      console.log('Invalid key. The door remains closed.');
    }
  }
}

const key1 = new Key(); // Змінено ім'я для уникнення конфлікту імен
const house1 = new MyHouse(key1); // Змінено ім'я для уникнення конфлікту імен
const person1 = new Person(key1); // Змінено ім'я для уникнення конфлікту імен

house1.openDoor(key1);
house1.comeIn(person1);
