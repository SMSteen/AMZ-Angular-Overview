// temp until database connection
let idCounter = 11;

export class Task {
  id: string;
  title: string;
  description: string;
  completed: boolean;
  assigned: string[];

  constructor() {
    // inialized completed as false
    this.completed = false;
    this.id = idCounter.toString();
    idCounter++;
  }
}
