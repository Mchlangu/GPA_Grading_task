var gpa = 60;
const dist = 85;
const exp = 70;
const avg = 50;
const fail = 49;
const absent = 0;


if(gpa >= dist){
    console.log("DISTINCTION RIGHT THERE!" + gpa);
}else if(gpa >= exp && gpa <dist ){
    console.log("EXEMPTION RIGHT HERE!" + gpa)
}else if(gpa >=avg && gpa < exp ){
    console.log("Passed but work harder: " + gpa)
}
else if(gpa > absent && gpa <= fail)
{
    console.log("Didn't make it, try again next year!" + gpa)
}
else{
    console.log("Sorry, it seems you did no write. Consult" + gpa)
}