// temp until database connection
// let idCounter = 11;
import { Person } from './person';
export class Task {
  pk: number;
  fields: {
    title: string;
    description: string;
    completed: boolean;
    assigned: Person[];
  };

  // constructor() {
  //   // inialized completed as false
  //   this.completed = false;
  //   this.id = idCounter.toString();
  //   idCounter++;
  // }
}
