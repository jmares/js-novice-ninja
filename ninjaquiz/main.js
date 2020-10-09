const quiz = [
    ["What is Superman's real name?", "Clark Kent"],
    ["What is Wonder Woman's real name?", "Diana Prince"],
    ["What is Batman's real name?", "Bruce Wayne"],
    ["What is Spiderman's real name?", "Peter Parker"]
];

let score = 0;

function ask(question) {
    return prompt(question);
}


function check(response, answer) {
    if (response === answer) {
        alert("Correct!");
        score++;
    } else {
       alert(`Wrong! The correct answer was ${answer}.`) 
    }    
}


function start(quiz) {
    let score = 0;
    for (const [question, answer] of quiz) {
        const response = ask(question);
        check(response, answer);
    }
}


function gameOver() {
    alert(`Game over! You scored ${score} point${score !== 1 ? 's' : '' }.`);
}


start(quiz);


gameOver();

