let userName = "Alice";
let message = "Welcome ";
let text, from = " ";

function sendMsg(){
    let message = "Welcome, " +userName;
    console.log(message);
}

sendMsg();


function showMessage(){
     userName = "Bob";
     console.log(message, userName);
}
console.log(message, userName);

function sendMsg(from, text){
    from = "Anonymous";
    message =" Welcome to my online learnership, R50"
    return from + text;
}

sendMsg(from, text)