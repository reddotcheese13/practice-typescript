export class NewCustomer {
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
