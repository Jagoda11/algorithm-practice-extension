export const inMemoryFileSystemProblem = {
  id: 31,
  title: 'In-Memory File System',
  description:
    'Explain the data structures and algorithms that you would use to design an in-memory file system. Illustrate with an example in code where possible.',
  solution: `
interface FileSystemEntity {
  name: string;
  getPath(): string;
}

class File implements FileSystemEntity {
  name: string;
  content: string;

  constructor(name: string, content: string = '') {
    this.name = name;
    this.content = content;
  }

  getPath(): string {
    return this.name;
  }
}

class Directory implements FileSystemEntity {
  name: string;
  children: Map<string, FileSystemEntity>;

  constructor(name: string) {
    this.name = name;
    this.children = new Map();
  }

  add(entity: FileSystemEntity): void {
    this.children.set(entity.name, entity);
  }

  get(name: string): FileSystemEntity | undefined {
    return this.children.get(name);
  }

  remove(name: string): void {
    this.children.delete(name);
  }

  list(): string[] {
    return Array.from(this.children.keys());
  }

  getPath(): string {
    return this.name;
  }
}

class FileSystem {
  root: Directory;

  constructor() {
    this.root = new Directory('/');
  }

  private traverse(path: string): { parent: Directory; entityName: string } | null {
    const parts = path.split('/').filter(part => part.length > 0);
    let current: Directory = this.root;

    for (let i = 0; i < parts.length - 1; i++) {
      const entity = current.get(parts[i]);
      if (entity instanceof Directory) {
        current = entity;
      } else {
        return null;
      }
    }

    const entityName = parts[parts.length - 1];
    return { parent: current, entityName };
  }

  mkdir(path: string): void {
    const result = this.traverse(path);
    if (result) {
      const { parent, entityName } = result;
      if (!parent.get(entityName)) {
        parent.add(new Directory(entityName));
      }
    }
  }

  addFile(path: string, content: string): void {
    const result = this.traverse(path);
    if (result) {
      const { parent, entityName } = result;
      parent.add(new File(entityName, content));
    }
  }

  readFile(path: string): string | undefined {
    const parts = path.split('/').filter(part => part.length > 0);
    let current: Directory = this.root;

    for (let i = 0; i < parts.length - 1; i++) {
      const entity = current.get(parts[i]);
      if (entity instanceof Directory) {
        current = entity;
      } else {
        return undefined;
      }
    }

    const entity = current.get(parts[parts.length - 1]);
    if (entity instanceof File) {
      return entity.content;
    }

    return undefined;
  }

  list(path: string): string[] | undefined {
    const parts = path.split('/').filter(part => part.length > 0);
    let current: Directory = this.root;

    for (const part of parts) {
      const entity = current.get(part);
      if (entity instanceof Directory) {
        current = entity;
      } else {
        return undefined;
      }
    }

    return current.list();
  }

  remove(path: string): void {
    const result = this.traverse(path);
    if (result) {
      const { parent, entityName } = result;
      parent.remove(entityName);
    }
  }
}

// Example usage:
const fs = new FileSystem();

fs.mkdir('/documents');
fs.addFile('/documents/file1.txt', 'Hello, world!');
fs.addFile('/documents/file2.txt', 'This is a test.');

console.log(fs.readFile('/documents/file1.txt')); // Output: Hello, world!
console.log(fs.list('/documents')); // Output: ['file1.txt', 'file2.txt']

fs.remove('/documents/file1.txt');
console.log(fs.list('/documents')); // Output: ['file2.txt']
`,
}

// Actual implementation

interface FileSystemEntity {
  name: string
  getPath(): string
}

class File implements FileSystemEntity {
  name: string
  content: string

  constructor(name: string, content: string = '') {
    this.name = name
    this.content = content
  }

  getPath(): string {
    return this.name
  }
}

class Directory implements FileSystemEntity {
  name: string
  children: Map<string, FileSystemEntity>

  constructor(name: string) {
    this.name = name
    this.children = new Map()
  }

  add(entity: FileSystemEntity): void {
    this.children.set(entity.name, entity)
  }

  get(name: string): FileSystemEntity | undefined {
    return this.children.get(name)
  }

  remove(name: string): void {
    this.children.delete(name)
  }

  list(): string[] {
    return Array.from(this.children.keys())
  }

  getPath(): string {
    return this.name
  }
}

class FileSystem {
  root: Directory

  constructor() {
    this.root = new Directory('/')
  }

  private traverse(
    path: string,
  ): { parent: Directory; entityName: string } | null {
    const parts = path.split('/').filter((part) => part.length > 0)
    let current: Directory = this.root

    for (let i = 0; i < parts.length - 1; i++) {
      const entity = current.get(parts[i])
      if (entity instanceof Directory) {
        current = entity
      } else {
        return null
      }
    }

    const entityName = parts[parts.length - 1]
    return { parent: current, entityName }
  }

  mkdir(path: string): void {
    const result = this.traverse(path)
    if (result) {
      const { parent, entityName } = result
      if (!parent.get(entityName)) {
        parent.add(new Directory(entityName))
      }
    }
  }

  addFile(path: string, content: string): void {
    const result = this.traverse(path)
    if (result) {
      const { parent, entityName } = result
      parent.add(new File(entityName, content))
    }
  }

  readFile(path: string): string | undefined {
    const parts = path.split('/').filter((part) => part.length > 0)
    let current: Directory = this.root

    for (let i = 0; i < parts.length - 1; i++) {
      const entity = current.get(parts[i])
      if (entity instanceof Directory) {
        current = entity
      } else {
        return undefined
      }
    }

    const entity = current.get(parts[parts.length - 1])
    if (entity instanceof File) {
      return entity.content
    }

    return undefined
  }

  list(path: string): string[] | undefined {
    const parts = path.split('/').filter((part) => part.length > 0)
    let current: Directory = this.root

    for (const part of parts) {
      const entity = current.get(part)
      if (entity instanceof Directory) {
        current = entity
      } else {
        return undefined
      }
    }

    return current.list()
  }

  remove(path: string): void {
    const result = this.traverse(path)
    if (result) {
      const { parent, entityName } = result
      parent.remove(entityName)
    }
  }
}

// Example usage:
const fs = new FileSystem()

fs.mkdir('/documents')
fs.addFile('/documents/file1.txt', 'Hello, world!')
fs.addFile('/documents/file2.txt', 'This is a test.')

console.log(fs.readFile('/documents/file1.txt')) // Output: Hello, world!
console.log(fs.list('/documents')) // Output: ['file1.txt', 'file2.txt']

fs.remove('/documents/file1.txt')
console.log(fs.list('/documents')) // Output: ['file2.txt']
