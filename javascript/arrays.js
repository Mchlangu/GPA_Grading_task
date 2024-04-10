let courses = ["Javascript", "Java", "Angular", "React"];
courses.length = 10;

courses[4] = "Typescript";
courses[5] = "Vue";
console.log("Number of courses available  " + courses);
console.log(typeof courses);

courses.push("C++", "Flutter", "C#", "Python");
console .log("New semester courses " + courses)

console.log(`Array is a method ${courses instanceof Array}`)

let faculty = courses.toString();

console.log(`courses an ${faculty instanceof Array}`);
console.log("Courses as String " + faculty)
console.log(typeof faculty);
console.log(faculty.toUpperCase())

let learners  = new Array();

 learners[0] = 1;
 learners[1] = 2;
 learners[2] = 3;
 learners[3] = 4;
 learners[4] = 5;

 console.log("Total number of learners: ", learners.length);
