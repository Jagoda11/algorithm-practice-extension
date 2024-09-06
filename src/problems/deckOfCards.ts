export const deckOfCardsProblem = {
  id: 53,
  title: 'Deck of Cards',
  description:
    'Design the data structures for a generic deck of cards. Explain how you would subclass the data structures to implement blackjack.',
  solution: `
enum Suit {
  Clubs = 'Clubs',
  Diamonds = 'Diamonds',
  Hearts = 'Hearts',
  Spades = 'Spades'
}

enum Rank {
  Ace = 'Ace',
  Two = '2',
  Three = '3',
  Four = '4',
  Five = '5',
  Six = '6',
  Seven = '7',
  Eight = '8',
  Nine = '9',
  Ten = '10',
  Jack = 'Jack',
  Queen = 'Queen',
  King = 'King'
}

class Card {
  suit: Suit;
  rank: Rank;

  constructor(suit: Suit, rank: Rank) {
    this.suit = suit;
    this.rank = rank;
  }

  toString(): string {
    return \`\${this.rank} of \${this.suit}\`;
  }
}

class Deck {
  cards: Card[];

  constructor() {
    this.cards = [];
    this.initializeDeck();
  }

  initializeDeck() {
    for (const suit in Suit) {
      for (const rank in Rank) {
        this.cards.push(new Card(Suit[suit as keyof typeof Suit], Rank[rank as keyof typeof Rank]));
      }
    }
  }

  shuffle() {
    for (let i = this.cards.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [this.cards[i], this.cards[j]] = [this.cards[j], this.cards[i]];
    }
  }

  drawCard(): Card | undefined {
    return this.cards.pop();
  }

  toString(): string {
    return this.cards.map(card => card.toString()).join(', ');
  }
}

// Example usage:
const deck = new Deck();
deck.shuffle();
console.log("Shuffled Deck:", deck.toString());
`,
}

// Example implementation to test the solution
enum Suit {
  Clubs = 'Clubs',
  Diamonds = 'Diamonds',
  Hearts = 'Hearts',
  Spades = 'Spades',
}

enum Rank {
  Ace = 'Ace',
  Two = '2',
  Three = '3',
  Four = '4',
  Five = '5',
  Six = '6',
  Seven = '7',
  Eight = '8',
  Nine = '9',
  Ten = '10',
  Jack = 'Jack',
  Queen = 'Queen',
  King = 'King',
}

class Card {
  suit: Suit
  rank: Rank

  constructor(suit: Suit, rank: Rank) {
    this.suit = suit
    this.rank = rank
  }

  toString(): string {
    return `${this.rank} of ${this.suit}`
  }
}

class Deck {
  cards: Card[]

  constructor() {
    this.cards = []
    this.initializeDeck()
  }

  initializeDeck() {
    for (const suit in Suit) {
      for (const rank in Rank) {
        this.cards.push(
          new Card(
            Suit[suit as keyof typeof Suit],
            Rank[rank as keyof typeof Rank],
          ),
        )
      }
    }
  }

  shuffle() {
    for (let i = this.cards.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1))
      ;[this.cards[i], this.cards[j]] = [this.cards[j], this.cards[i]]
    }
  }

  drawCard(): Card | undefined {
    return this.cards.pop()
  }

  toString(): string {
    return this.cards.map((card) => card.toString()).join(', ')
  }
}

// Example usage:
const deck = new Deck()
deck.shuffle()
console.log('Shuffled Deck:', deck.toString())
