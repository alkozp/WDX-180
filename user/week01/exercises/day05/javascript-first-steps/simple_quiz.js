
const quizMessage = "    Question: Who created JavaScript?\nA) Brendan Eich\nB) Bill Gates\nC) Mark Zuckerberg\n\nPlease select the correct option (A, B, or C).";
let answer = prompt (quizMessage);
if (answer != null){
    switch (answer.trim().charAt(0).toUpperCase()){
        case "A":
            alert ("Correct! Not only did he create JS, the prototype of the language was ready in 10 days!");
            break;
        case "B":
            alert ("Nope. He lead the development of the Windows Operating System.");
            break;
        case "C":
            alert ("Nope. He just came up with the idea for a social network idea.");
            break;
        default:
            alert ("You enter not correct option (instead of A, B, C)");
    }
} else {
    alert ("It's fail. You press CANCEL button");
}
