document.addEventListener("DOMContentLoaded", () => {
    let questions = ["assds", "teee","3344d" ];
    let answers = ["assds", "teee","3344d"];
    let results = [];
    let userAnswers = [];

    let questionShown = document.querySelector(".question");
    let answerBar = document.querySelector(".answer-bar");
    let submitButton = document.querySelector(".submit-button");

    // display first question
    questionShown.textContent = questions[0];


    // submitButton.addEventListener('click', (event) => {
    //     //code for taking in answers
    //     event.preventDefault();

    //     let answer = answerBar.value.trim();

    //     if (answer.toLowerCase() === answers[0].toLowerCase()) {
    //         console.log("Correct!");
    //         results.push(true);
    //         // invoke promise resolve
    //     } else {
    //         console.log("Incorrect!");
    //         results.push(false);
    //         // invoke promise resolve
    //     }

    //     //call next question by return
    // })

    function timedQuestion(index, timeLimitMs){
        return new Promise((resolve) => {
            // Set question text
            questionShown.textContent = questions[index];
            answerBar.value = ""; // clear previous input
            answerBar.focus();

            // Flag to check if answered in time
            let answered = false;

            // Listen once for submit
            const handleSubmit = (event) => {
                event.preventDefault();
                if (!answered) {
                    answered = true;
                    const userAnswer = answerBar.value.trim().toLowerCase();
                    resolve(userAnswer); // Resolve with the answer
                }
            };

            submitButton.addEventListener("click", handleSubmit, { once: true });

            // Timeout fallback
            setTimeout(() => {
                if (!answered) {
                    answered = true;
                    resolve(""); // No answer given
                }
            }, timeLimitMs);
        });
    }

    async function timedQuestions(){
        for (let i = 0; i < questions.length; i++) {
            const userAnswer = await timedQuestion(i, 5000); 
            const correctAnswer = answers[i].toLowerCase();

            if (userAnswer === correctAnswer) {
                console.log(`Q${i + 1}: Correct`);
                results.push(true);
            } else {
                console.log(`Q${i + 1}: Incorrect (You said: "${userAnswer}")`);
                results.push(false);
            }
            userAnswers.push(userAnswer);

        }


        questionShown.textContent = `Quiz finished! You got ${results.filter(r => r).length} out of ${questions.length} correct.`;
        answerBar.style.display = "none";
        submitButton.style.display = "none";


         // Hide quiz UI
        questionShown.textContent = `Quiz finished!`;
        answerBar.style.display = "none";
        submitButton.style.display = "none";

        const modal = document.getElementById("resultModal");
        const resultsList = document.getElementById("results-list");
        const score = document.getElementById("score");

        resultsList.innerHTML = ""; 

        for (let i = 0; i < questions.length; i++) {
            const li = document.createElement("li");
            li.innerHTML = `
                <strong>Q${i + 1}:</strong> ${questions[i]}<br>
                <strong>Your answer:</strong> ${userAnswers[i] || "(no answer)"}<br>
                <strong>Correct answer:</strong> ${answers[i]}
                <hr>
            `;
            resultsList.appendChild(li);
        }

        score.textContent = `You got ${results.filter(r => r).length} out of ${questions.length} correct.`;

        document.querySelector(".form").style.display = "none";
        modal.style.display = "flex"; // Show the modal
    }

    // Start quiz
    timedQuestions();

})