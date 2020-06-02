import {Employee} from './Employee'

export class Seller extends Employee{
    private salesQuantity: number = 0;

    public getSalesQuantity(): number {
        return this.salesQuantity
    }
    public setSalesQuantity(quantity: number): void{
        this.salesQuantity = quantity;
    }
    public calculateTotalSalary() : any {
        super.calculateTotalSalary()
        //
        return 5 * this.salesQuantity + this.baseSalary + 400
    }
}