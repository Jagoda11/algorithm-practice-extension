// src/problems/animalShelter.ts

export const animalShelterProblem = {
  id: 22,
  title: 'Animal Shelter',
  description:
    'An animal shelter, which holds only dogs and cats, operates on a strictly "first in, first out" basis. People must adopt either the "oldest" (based on arrival time) of all animals at the shelter, or they can select whether they would prefer a dog or a cat (and will receive the oldest animal of that type). They cannot select which specific animal they would like. Create the data structures to maintain this system and implement operations such as enqueue, dequeueAny, dequeueDog, and dequeueCat.',
  solution: `
type AnimalType = 'dog' | 'cat';

class Animal {
  constructor(public type: AnimalType, public name: string, public order: number) {}
}

class AnimalShelter {
  private dogs: Animal[] = [];
  private cats: Animal[] = [];
  private order: number = 0;

  enqueue(type: AnimalType, name: string): void {
    const animal = new Animal(type, name, this.order++);
    if (type === 'dog') {
      this.dogs.push(animal);
    } else if (type === 'cat') {
      this.cats.push(animal);
    }
  }

  dequeueAny(): Animal | null {
    if (this.dogs.length === 0 && this.cats.length === 0) return null;
    if (this.dogs.length === 0) return this.dequeueCat();
    if (this.cats.length === 0) return this.dequeueDog();

    const dog = this.dogs[0];
    const cat = this.cats[0];
    if (dog.order < cat.order) {
      return this.dogs.shift()!;
    } else {
      return this.cats.shift()!;
    }
  }

  dequeueDog(): Animal | null {
    return this.dogs.shift() || null;
  }

  dequeueCat(): Animal | null {
    return this.cats.shift() || null;
  }
}

// Example usage:
const shelter = new AnimalShelter();
shelter.enqueue('dog', 'Rex');
shelter.enqueue('cat', 'Whiskers');
shelter.enqueue('dog', 'Buddy');
shelter.enqueue('cat', 'Mittens');

console.log(shelter.dequeueAny()); // Output: { type: 'dog', name: 'Rex', order: 0 }
console.log(shelter.dequeueDog()); // Output: { type: 'dog', name: 'Buddy', order: 2 }
console.log(shelter.dequeueCat()); // Output: { type: 'cat', name: 'Whiskers', order: 1 }
console.log(shelter.dequeueAny()); // Output: { type: 'cat', name: 'Mittens', order: 3 }
`,
}

type AnimalType = 'dog' | 'cat'

class Animal {
  constructor(
    public type: AnimalType,
    public name: string,
    public order: number,
  ) {}
}

class AnimalShelter {
  private dogs: Animal[] = []
  private cats: Animal[] = []
  private order: number = 0

  enqueue(type: AnimalType, name: string): void {
    const animal = new Animal(type, name, this.order++)
    if (type === 'dog') {
      this.dogs.push(animal)
    } else if (type === 'cat') {
      this.cats.push(animal)
    }
  }

  dequeueAny(): Animal | null {
    if (this.dogs.length === 0 && this.cats.length === 0) return null
    if (this.dogs.length === 0) return this.dequeueCat()
    if (this.cats.length === 0) return this.dequeueDog()

    const dog = this.dogs[0]
    const cat = this.cats[0]
    if (dog.order < cat.order) {
      return this.dogs.shift()!
    } else {
      return this.cats.shift()!
    }
  }

  dequeueDog(): Animal | null {
    return this.dogs.shift() || null
  }

  dequeueCat(): Animal | null {
    return this.cats.shift() || null
  }
}

// Example usage:
const shelter = new AnimalShelter()
shelter.enqueue('dog', 'Rex')
shelter.enqueue('cat', 'Whiskers')
shelter.enqueue('dog', 'Buddy')
shelter.enqueue('cat', 'Mittens')

console.log(shelter.dequeueAny()) // Output: { type: 'dog', name: 'Rex', order: 0 }
console.log(shelter.dequeueDog()) // Output: { type: 'dog', name: 'Buddy', order: 2 }
console.log(shelter.dequeueCat()) // Output: { type: 'cat', name: 'Whiskers', order: 1 }
console.log(shelter.dequeueAny()) // Output: { type: 'cat', name: 'Mittens', order: 3 }
