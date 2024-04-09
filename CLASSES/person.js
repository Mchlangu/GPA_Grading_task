class person{
    constructor(name, id){
        this.name = name;
        this.id = id;
    }

    addAddress(address){
        this.address = address;
    }
    getDetails(){
        console.log(`Name of a person id ${this.name}, residing at ${this.address}`);
    }
}

let firstPerson = new person('Bob', 10);
firstPerson.addAddress('Limpawpaw');

firstPerson.getDetails()
