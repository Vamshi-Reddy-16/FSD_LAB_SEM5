const quiz = [
    {
        question: "Who is the best cricketer?",
        options: ["Virat", "Budumuru Nagaraju", "Dhoni", "Peddi"],
        answer: "Peddi"
    },
    {
        question: "Who is the best football player?",
        options: ["Messi", "Anandh", "Nene","Mestri"],
        answer: "Mestri"
    },
     {
        question: "Who is the best looking",
        options: ["Chris Hemsworth", "Rathna Kondoju", "Hritik Roshan", "Henry Cavil"],
        answer: "Rathna Kondoju"
    },
     {
        question: "What is the best series",
        options: ["Money Heist", "Game of Thrones", "Breaking Bad", "50 Shades"],
        answer: "50 Shades"
    },
     {
        question: "Who is the best director?",
        options: ["Christopher Nolan", "SS Rajamouli", "Meher Nolan", "James Cameron"],
        answer: "Meher Nolan"
    }
];

let index = 0;
let score = 0;
let time = 60;

const question = document.getElementById("question");
const options = document.getElementById("options");
const result = document.getElementById("result");

function loadQuestion() {
    question.innerHTML = quiz[index].question;
    options.innerHTML = "";

    quiz[index].options.forEach(option => {
        const safeOption = option
            .replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;");

        options.innerHTML += `<input type="radio" name="ans" value="${safeOption}"> ${safeOption}<br>`;
    });
}

function nextQuestion() {
    const selected = document.querySelector('input[name="ans"]:checked');

    if (selected && selected.value === quiz[index].answer) {
        score++;
    }

    index++;

    if (index < quiz.length) {
        loadQuestion();
    } else {
        endQuiz();
    }
}

function endQuiz() {
    result.innerHTML = "Your Score: " + score + "/" + quiz.length;
    question.innerHTML = "";
    options.innerHTML = "";
    document.querySelector("button").style.display = "none";
}

loadQuestion();

const timerInterval = setInterval(function () {
    time--;
    document.getElementById("timer").innerHTML = "Time: " + time;

    if (time === 0) {
        clearInterval(timerInterval);
        result.innerHTML = "Time Over! Score: " + score + "/" + quiz.length;
        question.innerHTML = "";
        options.innerHTML = "";
        document.querySelector("button").style.display = "none";
    }
}, 1000);