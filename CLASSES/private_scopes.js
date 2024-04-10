function person(fname, lname){
    let firstname = fname;
    let lastname = lname;

    let getDetails_noAccess = function(){
        return (`First name us  ${firstname} and last name ${lastname}`);
    }
    this.getDetails_Access = function(){
        return (`First name is: ${firstname} and last name is: ${lastname}`);
    }
}

let firstPerson = new person("Alice", "Mazibuko");
console.log(firstPerson.firstname);
console.log(this.getDetails_noAccess);
console.log(firstPerson.getDetails_Access());
