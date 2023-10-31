class Customer{
    firstName:string;
    lastName:string;
    constructor(fName:string,lName:string){
        this.firstName=fName;
        this.lastName=lName;
    }
}
let customer = new Customer("Tom","Hanks");
console.log(customer.firstName);
console.log(customer.lastName);