class NewCustomer {
  constructor(private _firstName: string, private _lastName: string) {}
  public get getFirstName(): string {
    return this._firstName;
  }
  public set setFirstName(fName: string) {
    this._firstName = fName;
  }
  public get getLastName(): string {
    return this._lastName;
  }
  public set setLastName(lName: string) {
    this._lastName = lName;
  }
}
let newCustomer = new NewCustomer("Tom", "Hanks");

console.log(newCustomer.getFirstName);
console.log(newCustomer.getLastName);
newCustomer.setFirstName = "Jerry";
newCustomer.setLastName = "J";
console.log(newCustomer.getFirstName);
console.log(newCustomer.getLastName);
