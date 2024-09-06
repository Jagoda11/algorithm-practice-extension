export const onlineBookReaderProblem = {
  id: 57,
  title: 'Online Book Reader',
  description:
    'Design the data structures for an online book reader system. The system should support adding and removing books, adding and removing users, and allowing users to read books. It should also track which book a user is currently reading.',
  solution: `
// Class to represent a Book
class Book {
  id: number;
  title: string;
  author: string;
  content: string;

  constructor(id: number, title: string, author: string, content: string) {
    this.id = id;
    this.title = title;
    this.author = author;
    this.content = content;
  }

  displayTitle(): string {
    return this.title + ' by ' + this.author;
  }

  read(): string {
    return 'Reading: ' + this.title;
  }
}

// Class to represent a User
class User {
  id: number;
  name: string;
  currentBook: Book | null;

  constructor(id: number, name: string) {
    this.id = id;
    this.name = name;
    this.currentBook = null;
  }

  startReading(book: Book) {
    this.currentBook = book;
    console.log(this.name + ' started reading ' + book.title);
  }

  stopReading() {
    if (this.currentBook) {
      console.log(this.name + ' stopped reading ' + this.currentBook.title);
      this.currentBook = null;
    } else {
      console.log(this.name + ' is not reading any book');
    }
  }

  getCurrentBook(): string {
    return this.currentBook ? 'Currently reading: ' + this.currentBook.displayTitle() : 'No book being read';
  }
}

// Class to represent the Online Book Reader system
class OnlineBookReader {
  books: Map<number, Book>;
  users: Map<number, User>;

  constructor() {
    this.books = new Map<number, Book>();
    this.users = new Map<number, User>();
  }

  addBook(book: Book) {
    this.books.set(book.id, book);
    console.log('Added book: ' + book.displayTitle());
  }

  removeBook(bookId: number) {
    if (this.books.has(bookId)) {
      const book = this.books.get(bookId);
      this.books.delete(bookId);
      console.log('Removed book: ' + (book ? book.displayTitle() : 'Unknown'));
    } else {
      console.log('Book not found');
    }
  }

  addUser(user: User) {
    this.users.set(user.id, user);
    console.log('Added user: ' + user.name);
  }

  removeUser(userId: number) {
    if (this.users.has(userId)) {
      const user = this.users.get(userId);
      this.users.delete(userId);
      console.log('Removed user: ' + (user ? user.name : 'Unknown'));
    } else {
      console.log('User not found');
    }
  }

  startReading(userId: number, bookId: number) {
    const user = this.users.get(userId);
    const book = this.books.get(bookId);
    if (user && book) {
      user.startReading(book);
    } else {
      console.log('User or Book not found');
    }
  }

  stopReading(userId: number) {
    const user = this.users.get(userId);
    if (user) {
      user.stopReading();
    } else {
      console.log('User not found');
    }
  }

  getCurrentBook(userId: number) {
    const user = this.users.get(userId);
    if (user) {
      console.log(user.getCurrentBook());
    } else {
      console.log('User not found');
    }
  }
}

// Example usage:
const readerSystem = new OnlineBookReader();
const book1 = new Book(1, '1984', 'George Orwell', 'Content of 1984...');
const book2 = new Book(2, 'Brave New World', 'Aldous Huxley', 'Content of Brave New World...');
const user1 = new User(1, 'Alice');
const user2 = new User(2, 'Bob');

readerSystem.addBook(book1);
readerSystem.addBook(book2);
readerSystem.addUser(user1);
readerSystem.addUser(user2);

readerSystem.startReading(1, 1);
readerSystem.getCurrentBook(1);
readerSystem.stopReading(1);

readerSystem.startReading(2, 2);
readerSystem.getCurrentBook(2);
readerSystem.stopReading(2);

readerSystem.removeBook(1);
readerSystem.removeUser(1);
`,
}

// Example implementation to test the solution
class Book {
  id: number
  title: string
  author: string
  content: string

  constructor(id: number, title: string, author: string, content: string) {
    this.id = id
    this.title = title
    this.author = author
    this.content = content
  }

  displayTitle(): string {
    return this.title + ' by ' + this.author
  }

  read(): string {
    return 'Reading: ' + this.title
  }
}

class User {
  id: number
  name: string
  currentBook: Book | null

  constructor(id: number, name: string) {
    this.id = id
    this.name = name
    this.currentBook = null
  }

  startReading(book: Book) {
    this.currentBook = book
    console.log(this.name + ' started reading ' + book.title)
  }

  stopReading() {
    if (this.currentBook) {
      console.log(this.name + ' stopped reading ' + this.currentBook.title)
      this.currentBook = null
    } else {
      console.log(this.name + ' is not reading any book')
    }
  }

  getCurrentBook(): string {
    return this.currentBook
      ? 'Currently reading: ' + this.currentBook.displayTitle()
      : 'No book being read'
  }
}

class OnlineBookReader {
  books: Map<number, Book>
  users: Map<number, User>

  constructor() {
    this.books = new Map<number, Book>()
    this.users = new Map<number, User>()
  }

  addBook(book: Book) {
    this.books.set(book.id, book)
    console.log('Added book: ' + book.displayTitle())
  }

  removeBook(bookId: number) {
    if (this.books.has(bookId)) {
      const book = this.books.get(bookId)
      this.books.delete(bookId)
      console.log('Removed book: ' + (book ? book.displayTitle() : 'Unknown'))
    } else {
      console.log('Book not found')
    }
  }

  addUser(user: User) {
    this.users.set(user.id, user)
    console.log('Added user: ' + user.name)
  }

  removeUser(userId: number) {
    if (this.users.has(userId)) {
      const user = this.users.get(userId)
      this.users.delete(userId)
      console.log('Removed user: ' + (user ? user.name : 'Unknown'))
    } else {
      console.log('User not found')
    }
  }

  startReading(userId: number, bookId: number) {
    const user = this.users.get(userId)
    const book = this.books.get(bookId)
    if (user && book) {
      user.startReading(book)
    } else {
      console.log('User or Book not found')
    }
  }

  stopReading(userId: number) {
    const user = this.users.get(userId)
    if (user) {
      user.stopReading()
    } else {
      console.log('User not found')
    }
  }

  getCurrentBook(userId: number) {
    const user = this.users.get(userId)
    if (user) {
      console.log(user.getCurrentBook())
    } else {
      console.log('User not found')
    }
  }
}

// Example usage:
const readerSystem = new OnlineBookReader()
const book1 = new Book(1, '1984', 'George Orwell', 'Content of 1984...')
const book2 = new Book(
  2,
  'Brave New World',
  'Aldous Huxley',
  'Content of Brave New World...',
)
const user1 = new User(1, 'Alice')
const user2 = new User(2, 'Bob')

readerSystem.addBook(book1)
readerSystem.addBook(book2)
readerSystem.addUser(user1)
readerSystem.addUser(user2)

readerSystem.startReading(1, 1)
readerSystem.getCurrentBook(1)
readerSystem.stopReading(1)

readerSystem.startReading(2, 2)
readerSystem.getCurrentBook(2)
readerSystem.stopReading(2)

readerSystem.removeBook(1)
readerSystem.removeUser(1)
