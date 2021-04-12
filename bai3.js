const api = "https://opentdb.com/api.php?amount=5&category=21&difficulty=easy&type=multiple";
var app = fetch(api).then((response) => response.json()).then((data) => {
        for (var i = 0; i < data.results.length; i++) {
            var questions = /*html*/`
        <div class="app-body">
        <p>-----------------------------------------------------------------------------</p>
        <h2 class="content" >Question ${i + 1}</h2>
        <div class="question">${data.results[i].question}</div>
        <div>
        <input type="radio" name="answer${i}" value="${data.results[i].incorrect_answers[0]}">
        A. <span>${data.results[i].incorrect_answers[0]}</span>
        </div>
        <div>
        <input type="radio" name="answer${i}" value="${data.results[i].incorrect_answers[1]}">
        B. <span>${data.results[i].incorrect_answers[1]}</span>
        </div>
        <div>
        <input type="radio" name="answer${i}" value="${data.results[i].incorrect_answers[2]}">
        C. <span>${data.results[i].incorrect_answers[2]}</span>
        </div>
        <div>
        <input type="radio" name="answer${i}" value="${data.results[i].correct_answer}">
        D. <span>${data.results[i].correct_answer}</span>
        </div>
    </div>`;
    
            document.querySelector(".quiz").insertAdjacentHTML("beforeend", questions);
        };
    });