//Different methods of fetching data from stucts
let school ={
    name: "Secunda Secondary School",
    established: "1998",
    location: "Mpumalanga",
    learners: 100,

    displayInfo: function(){
        console.log(`The name of the school is ${school.name} is located ${school.location} established in ${school.established}`)
    },

    hardData: function(){
        console.log("The name of school is "+ school.name +"\n" +" located at " + school.location);
    },

    notationData: function(){
        console.log("The name  of school" + school['name'] + "\n" + " located at " + school['established'])
    }

}

school.displayInfo();
school.hardData();
school.notationData();