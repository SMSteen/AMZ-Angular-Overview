// temp until database connection
// let idCounter = 11;

export class Task {
  pk: number;
  title: string;
  description: string;
  completed: boolean;
  fields: object;
  assigned: string[];

  // constructor() {
  //   // inialized completed as false
  //   this.completed = false;
  //   this.id = idCounter.toString();
  //   idCounter++;
  // }
}
