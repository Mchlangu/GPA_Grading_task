
const prompt = require('prompt-sync')();

//Javascript program to check if user is an an adult
function checkAge(age){
    if(age >= 18){
        return true;
    }else{
        return console.log("You are too young. Bye!");
    }
}

let age = prompt("How old are you?", 18);

if(checkAge(age)){
    console.log("Access is granted");
    showMovies();
    }else{
    console.log("Access is denied");
}


function showMovies(){
     let d = 100 // duration timer
     let i = 0;  // counter for countdown

     for (i = 10000; i > d; i--) {
        console.log("Access is granted");
        console.log("Playing a movie", i);
     }
}