import { NewCustomer } from "./customer";
let newCustomer = new NewCustomer("Tom", "Hanks");

console.log(newCustomer.getFirstName);
console.log(newCustomer.getLastName);
newCustomer.setFirstName = "Jerry";
newCustomer.setLastName = "J";
console.log(newCustomer.getFirstName);
console.log(newCustomer.getLastName);
