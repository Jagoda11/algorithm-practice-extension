// src/problems/debugger.ts

export const debuggerProblem = {
  id: 39,
  title: 'Debugger',
  description:
    'Implement a simple debugger for a program represented as a list of instructions. The debugger should allow setting breakpoints, running the program, and stepping through the instructions one at a time.',
  solution: `
type Instruction = () => void;

class Debugger {
  private instructions: Instruction[];
  private breakpoints: Set<number>;
  private currentInstruction: number;

  constructor(instructions: Instruction[]) {
    this.instructions = instructions;
    this.breakpoints = new Set();
    this.currentInstruction = 0;
  }

  setBreakpoint(instructionIndex: number): void {
    this.breakpoints.add(instructionIndex);
  }

  removeBreakpoint(instructionIndex: number): void {
    this.breakpoints.delete(instructionIndex);
  }

  run(): void {
    while (this.currentInstruction < this.instructions.length) {
      if (this.breakpoints.has(this.currentInstruction)) {
        console.log(\`Hit breakpoint at instruction \${this.currentInstruction}\`);
        return;
      }
      this.instructions[this.currentInstruction]();
      this.currentInstruction++;
    }
    console.log('Program finished');
  }

  step(): void {
    if (this.currentInstruction < this.instructions.length) {
      this.instructions[this.currentInstruction]();
      this.currentInstruction++;
    } else {
      console.log('Program finished');
    }
  }

  reset(): void {
    this.currentInstruction = 0;
  }
}

// Example usage:
const instructions: Instruction[] = [
  () => console.log('Instruction 0'),
  () => console.log('Instruction 1'),
  () => console.log('Instruction 2'),
  () => console.log('Instruction 3'),
];

const debuggerInstance = new Debugger(instructions);
debuggerInstance.setBreakpoint(2);

debuggerInstance.run(); // Output: "Instruction 0", "Instruction 1", "Hit breakpoint at instruction 2"
debuggerInstance.step(); // Output: "Instruction 2"
debuggerInstance.step(); // Output: "Instruction 3"
debuggerInstance.step(); // Output: "Program finished"
`,
}

type Instruction = () => void

class Debugger {
  private instructions: Instruction[]
  private breakpoints: Set<number>
  private currentInstruction: number

  constructor(instructions: Instruction[]) {
    this.instructions = instructions
    this.breakpoints = new Set()
    this.currentInstruction = 0
  }

  setBreakpoint(instructionIndex: number): void {
    this.breakpoints.add(instructionIndex)
  }

  removeBreakpoint(instructionIndex: number): void {
    this.breakpoints.delete(instructionIndex)
  }

  run(): void {
    while (this.currentInstruction < this.instructions.length) {
      if (this.breakpoints.has(this.currentInstruction)) {
        console.log(`Hit breakpoint at instruction ${this.currentInstruction}`)
        return
      }
      this.instructions[this.currentInstruction]()
      this.currentInstruction++
    }
    console.log('Program finished')
  }

  step(): void {
    if (this.currentInstruction < this.instructions.length) {
      this.instructions[this.currentInstruction]()
      this.currentInstruction++
    } else {
      console.log('Program finished')
    }
  }

  reset(): void {
    this.currentInstruction = 0
  }
}

// Example usage:
const instructions: Instruction[] = [
  () => console.log('Instruction 0'),
  () => console.log('Instruction 1'),
  () => console.log('Instruction 2'),
  () => console.log('Instruction 3'),
]

const debuggerInstance = new Debugger(instructions)
debuggerInstance.setBreakpoint(2)

debuggerInstance.run() // Output: "Instruction 0", "Instruction 1", "Hit breakpoint at instruction 2"
debuggerInstance.step() // Output: "Instruction 2"
debuggerInstance.step() // Output: "Instruction 3"
debuggerInstance.step() // Output: "Program finished"
