class person{
    constructor(fname){
        this.fname = fname;
    }
    toString(){
        return (`Name of this person: ${this.fname}`)
    }
}

class student extends person{
    constructor(fname, id){
        //We introduce super keyword for calling above constructor
        super(fname);
        this.id = id;
    }

    toString(){
        return(`${super.toString()} with srudent ID ${this.id}`);
    }
}

let student1 = new student("Alice", 384924);
console.log(student1);
console.log(student1.toString())
