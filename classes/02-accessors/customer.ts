class NewCustomer{
    private _firstName:string;
    private _lastName:string;
    constructor(fName:string,lName:string){
        this._firstName=fName;
        this._lastName=lName;
    }
    public get getFirstName():string {
        return this._firstName;
    }
    public set setFirstName(fName:string) {
        this._firstName=fName;
    }
    public get getLastName():string {
        return this._lastName;
    }
    public set setLastName(lName:string) {
        this._lastName=lName;
    }
}
let c = new NewCustomer("Tom","Hanks");

console.log(c.getFirstName);
console.log(c.getLastName);
c.setFirstName = "Jerry";
c.setLastName = "J";
console.log(c.getFirstName);
console.log(c.getLastName);

