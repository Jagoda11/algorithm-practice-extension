export const chatServerProblem = {
  id: 59,
  title: 'Chat Server',
  description:
    'Design a chat server that allows multiple users to communicate in real-time. The server should manage user connections, chat rooms, message broadcasting, and ensure secure and reliable communication. Outline the main components, classes, methods, and describe the hardest challenges in implementing this system.',
  solution: `
// Basic outline of a Chat Server system using TypeScript

// User class to represent a user in the chat server
class User {
  id: string;
  username: string;
  status: 'online' | 'offline';
  currentRoom: Room | null;

  constructor(id: string, username: string) {
    this.id = id;
    this.username = username;
    this.status = 'offline';
    this.currentRoom = null;
  }

  login(): void {
    this.status = 'online';
    console.log(this.username + ' logged in');
  }

  logout(): void {
    this.status = 'offline';
    console.log(this.username + ' logged out');
  }

  joinRoom(room: Room): void {
    if (this.currentRoom) {
      this.currentRoom.removeMember(this);
    }
    this.currentRoom = room;
    room.addMember(this);
    console.log(this.username + ' joined room ' + room.name);
  }

  leaveRoom(): void {
    if (this.currentRoom) {
      console.log(this.username + ' left room ' + this.currentRoom.name);
      this.currentRoom.removeMember(this);
      this.currentRoom = null;
    }
  }

  sendMessage(content: string): void {
    if (this.currentRoom) {
      const message = new Message(this, content, new Date(), this.currentRoom.id);
      this.currentRoom.broadcast(message);
    } else {
      console.log('User is not in a room');
    }
  }
}

// Room class to represent a chat room
class Room {
  id: string;
  name: string;
  members: Map<string, User>;

  constructor(id: string, name: string) {
    this.id = id;
    this.name = name;
    this.members = new Map();
  }

  addMember(user: User): void {
    this.members.set(user.id, user);
  }

  removeMember(user: User): void {
    this.members.delete(user.id);
  }

  broadcast(message: Message): void {
    console.log('Broadcasting message in room ' + this.name + ': ' + message.content);
    for (const user of this.members.values()) {
      user.receiveMessage(message);
    }
  }
}

// Message class to represent a message
class Message {
  sender: User;
  content: string;
  timestamp: Date;
  roomId: string;

  constructor(sender: User, content: string, timestamp: Date, roomId: string) {
    this.sender = sender;
    this.content = content;
    this.timestamp = timestamp;
    this.roomId = roomId;
  }

  format(): string {
    return '[' + this.timestamp.toISOString() + '] ' + this.sender.username + ': ' + this.content;
  }
}

// ChatServer class to manage the overall chat server functionality
class ChatServer {
  users: Map<string, User>;
  rooms: Map<string, Room>;

  constructor() {
    this.users = new Map();
    this.rooms = new Map();
  }

  addUser(user: User): void {
    this.users.set(user.id, user);
    console.log('Added user ' + user.username);
  }

  removeUser(userId: string): void {
    const user = this.users.get(userId);
    if (user) {
      user.logout();
      this.users.delete(userId);
      console.log('Removed user ' + user.username);
    }
  }

  createRoom(room: Room): void {
    this.rooms.set(room.id, room);
    console.log('Created room ' + room.name);
  }

  deleteRoom(roomId: string): void {
    const room = this.rooms.get(roomId);
    if (room) {
      this.rooms.delete(roomId);
      console.log('Deleted room ' + room.name);
    }
  }
}

// Example usage:
const server = new ChatServer();
const user1 = new User('1', 'Alice');
const user2 = new User('2', 'Bob');
const room1 = new Room('1', 'General');

server.addUser(user1);
server.addUser(user2);
server.createRoom(room1);

user1.login();
user1.joinRoom(room1);
user2.login();
user2.joinRoom(room1);

user1.sendMessage('Hello, everyone!');
user2.sendMessage('Hi, Alice!');
user1.leaveRoom();
user1.logout();
`,
}

// Example implementation to test the solution
class User {
  id: string
  username: string
  status: 'online' | 'offline'
  currentRoom: Room | null

  constructor(id: string, username: string) {
    this.id = id
    this.username = username
    this.status = 'offline'
    this.currentRoom = null
  }

  login(): void {
    this.status = 'online'
    console.log(this.username + ' logged in')
  }

  logout(): void {
    this.status = 'offline'
    console.log(this.username + ' logged out')
  }

  joinRoom(room: Room): void {
    if (this.currentRoom) {
      this.currentRoom.removeMember(this)
    }
    this.currentRoom = room
    room.addMember(this)
    console.log(this.username + ' joined room ' + room.name)
  }

  leaveRoom(): void {
    if (this.currentRoom) {
      console.log(this.username + ' left room ' + this.currentRoom.name)
      this.currentRoom.removeMember(this)
      this.currentRoom = null
    }
  }

  sendMessage(content: string): void {
    if (this.currentRoom) {
      const message = new Message(
        this,
        content,
        new Date(),
        this.currentRoom.id,
      )
      this.currentRoom.broadcast(message)
    } else {
      console.log('User is not in a room')
    }
  }

  receiveMessage(message: Message): void {
    console.log(this.username + ' received message: ' + message.format())
  }
}

class Room {
  id: string
  name: string
  members: Map<string, User>

  constructor(id: string, name: string) {
    this.id = id
    this.name = name
    this.members = new Map()
  }

  addMember(user: User): void {
    this.members.set(user.id, user)
  }

  removeMember(user: User): void {
    this.members.delete(user.id)
  }

  broadcast(message: Message): void {
    console.log(
      'Broadcasting message in room ' + this.name + ': ' + message.content,
    )
    for (const user of this.members.values()) {
      user.receiveMessage(message)
    }
  }
}

class Message {
  sender: User
  content: string
  timestamp: Date
  roomId: string

  constructor(sender: User, content: string, timestamp: Date, roomId: string) {
    this.sender = sender
    this.content = content
    this.timestamp = timestamp
    this.roomId = roomId
  }

  format(): string {
    return (
      '[' +
      this.timestamp.toISOString() +
      '] ' +
      this.sender.username +
      ': ' +
      this.content
    )
  }
}

class ChatServer {
  users: Map<string, User>
  rooms: Map<string, Room>

  constructor() {
    this.users = new Map()
    this.rooms = new Map()
  }

  addUser(user: User): void {
    this.users.set(user.id, user)
    console.log('Added user ' + user.username)
  }

  removeUser(userId: string): void {
    const user = this.users.get(userId)
    if (user) {
      user.logout()
      this.users.delete(userId)
      console.log('Removed user ' + user.username)
    }
  }

  createRoom(room: Room): void {
    this.rooms.set(room.id, room)
    console.log('Created room ' + room.name)
  }

  deleteRoom(roomId: string): void {
    const room = this.rooms.get(roomId)
    if (room) {
      this.rooms.delete(roomId)
      console.log('Deleted room ' + room.name)
    }
  }
}

// Example usage:
const server = new ChatServer()
const user1 = new User('1', 'Alice')
const user2 = new User('2', 'Bob')
const room1 = new Room('1', 'General')

server.addUser(user1)
server.addUser(user2)
server.createRoom(room1)

user1.login()
user1.joinRoom(room1)
user2.login()
user2.joinRoom(room1)

user1.sendMessage('Hello, everyone!')
user2.sendMessage('Hi, Alice!')
user1.leaveRoom()
user1.logout()

/* Key Components and Methods:
User Class: Handles user actions like login, logout, joining/leaving rooms, and sending messages.
Room Class: Manages room membership, broadcasting messages to all members, and room lifecycle.
Message Class: Represents a message with details like sender, content, timestamp, and room ID.
ChatServer Class: Manages the overall system, including users, rooms, and the creation/deletion of these entities.
Hardest Challenges:
Scalability: Managing a large number of concurrent connections and distributing load effectively.  */
