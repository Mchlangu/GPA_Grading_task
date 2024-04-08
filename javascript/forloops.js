let courses = ["Javascript", "Java", "Angular", "React"];

let space = " ";

    for (let i = 0; i < courses.length; i++) {

          courses[i] += space;
    }

    for (let i = 0; i < courses.length; i++) {

        console.log("The " + courses[i] +" course is still available.")
    }

//Just counting days of learning Javascr

const learningDays = 5;

    for (let i = 0; i <= learningDays; i++) {

        if(i > 0){
            console.log("This is day "+ [i] +" of learning javascript")
        } 
    }