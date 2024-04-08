const Person = {
    //Data properties
    //Key        Value
    firstName: 'Alice',

 get getName(){
        return this.firstName;
    },
 set changeNames(newName){
        this.firstName = newName;
    }

}

console.log(Person);
console.log(Person.firstName);
console.log(Person.getName);

Person.changeNames = "Alison";