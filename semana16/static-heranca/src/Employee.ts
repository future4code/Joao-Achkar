import {User} from './User'

export class Employee extends User {
    protected admissionDate: Date;
    protected baseSalary: number;
  
    constructor(
      id: string,
      email: string,
      name: string,
      password: string,
      admissionDate: Date,
      baseSalary: number
    ) {
      super(id, email, name, password);
      this.admissionDate = admissionDate;
      this.baseSalary = baseSalary;
      }
      
      public getAdmissionDate(): Date {
          return this.admissionDate
      }
  
      public getBaseSalary(): number {
          return this.baseSalary
      }
      public calculateTotalSalary(): number {
          return this.baseSalary + 400
      }
  }
  const Seller: Employee = new Employee (
      "42432", 
      "salesDude@sales.com",
      "Duderino The Seller",
      "dude123",
      new Date("13/01/2020"),
      1300.00
      )
      console.log(Seller.calculateTotalSalary())