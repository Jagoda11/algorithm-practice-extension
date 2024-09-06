export const callCenterProblem = {
  id: 54,
  title: 'Call Center',
  description:
    'Design the data structures for a call center. The call center has three levels of employees: Respondent, Manager, and Director. An incoming call must be allocated to a free respondent if available. If no respondents are free, then the call should be allocated to a manager, and if no managers are free, then it should be allocated to a director. Design the classes and methods to manage this process.',
  solution: `
enum Role {
  Respondent = 'Respondent',
  Manager = 'Manager',
  Director = 'Director',
}

class Call {
  callerId: number;

  constructor(callerId: number) {
    this.callerId = callerId;
  }
}

class Employee {
  id: number;
  role: Role;
  isAvailable: boolean;

  constructor(id: number, role: Role) {
    this.id = id;
    this.role = role;
    this.isAvailable = true;
  }

  receiveCall(call: Call) {
    this.isAvailable = false;
    console.log(\`Employee \${this.id} (\${this.role}) is handling call from caller \${call.callerId}\`);
  }

  finishCall() {
    this.isAvailable = true;
    console.log(\`Employee \${this.id} (\${this.role}) has finished the call\`);
  }
}

class CallCenter {
  respondents: Employee[];
  managers: Employee[];
  directors: Employee[];

  constructor() {
    this.respondents = [];
    this.managers = [];
    this.directors = [];
  }

  addEmployee(employee: Employee) {
    switch (employee.role) {
      case Role.Respondent:
        this.respondents.push(employee);
        break;
      case Role.Manager:
        this.managers.push(employee);
        break;
      case Role.Director:
        this.directors.push(employee);
        break;
    }
  }

  dispatchCall(call: Call) {
    const employee = this.findAvailableEmployee();
    if (employee) {
      employee.receiveCall(call);
    } else {
      console.log('All employees are currently busy. Please wait.');
    }
  }

  private findAvailableEmployee(): Employee | null {
    const allEmployees = [...this.respondents, ...this.managers, ...this.directors];
    return allEmployees.find(emp => emp.isAvailable) || null;
  }
}

// Example usage:
const callCenter = new CallCenter();
callCenter.addEmployee(new Employee(1, Role.Respondent));
callCenter.addEmployee(new Employee(2, Role.Respondent));
callCenter.addEmployee(new Employee(3, Role.Manager));
callCenter.addEmployee(new Employee(4, Role.Director));

const call1 = new Call(101);
const call2 = new Call(102);
const call3 = new Call(103);

callCenter.dispatchCall(call1);
callCenter.dispatchCall(call2);
callCenter.dispatchCall(call3);
`,
}

// Example implementation to test the solution
enum Role {
  Respondent = 'Respondent',
  Manager = 'Manager',
  Director = 'Director',
}

class Call {
  callerId: number

  constructor(callerId: number) {
    this.callerId = callerId
  }
}

class Employee {
  id: number
  role: Role
  isAvailable: boolean

  constructor(id: number, role: Role) {
    this.id = id
    this.role = role
    this.isAvailable = true
  }

  receiveCall(call: Call) {
    this.isAvailable = false
    // Using backticks correctly for template literals
    console.log(
      `Employee ${this.id} (${this.role}) is handling call from caller ${call.callerId}`,
    )
  }

  finishCall() {
    this.isAvailable = true
    // Correct use of template literals with backticks
    console.log(`Employee ${this.id} (${this.role}) has finished the call`)
  }
}

class CallCenter {
  respondents: Employee[]
  managers: Employee[]
  directors: Employee[]

  constructor() {
    this.respondents = []
    this.managers = []
    this.directors = []
  }
}
