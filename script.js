
window.addEventListener("DOMContentLoaded", () => {

    // =========================
    // LANDING PAGE
    // =========================

    const typingElement = document.getElementById("typing");

    const message = `Hey Juhi,

Happy Birthday ❤️

I know things have been difficult.

This isn't meant to change your mind,
or ask anything from you.

I simply wanted to create something
from my heart.

A collection of memories,
a few things I learned,
and a sincere apology.

Whenever you're ready,

begin the journey.`;

    let index = 0;

    function typeWriter() {

        if (index < message.length) {

            typingElement.textContent += message.charAt(index);

            index++;

            setTimeout(typeWriter, 35);
        }
    }

    typeWriter();
    









    // =========================
    // SECRET CODE LOGIN
    // =========================

    const unlockBtn =
    document.getElementById("unlockBtn");

    unlockBtn.addEventListener("click", () => {

        const enteredCode =
        document.getElementById("secretCode")
        .value
        .trim();

        // CHANGE THIS TO HER BIRTHDAY
        const correctCode = "161196";

        if(enteredCode === correctCode){

            document.getElementById("loginPage")
            .style.display = "none";

            document.querySelector(".hero")
            .style.display = "flex";

        }

        else{

            document.getElementById("loginError")
            .innerText =
            "That's not the correct birthday ❤️";

        }

    });










    // =========================
    // OPEN MEMORY CONSTELLATION
    // =========================

    document.getElementById("startBtn")
        .addEventListener("click", () => {

            document.querySelector(".hero").style.display = "none";

            document.getElementById("memories").style.display = "block";

            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });

        });

    // =========================
    // MEMORY POPUP
    // =========================

    const stars = document.querySelectorAll(".star");

    const modal = document.getElementById("memoryModal");

    const title = document.getElementById("memoryTitle");

    const text = document.getElementById("memoryText");

    const image = document.getElementById("memoryImage");

    const closeBtn = document.getElementById("closeModal");

    stars.forEach(star => {

        star.addEventListener("click", () => {

            title.textContent = star.dataset.title;

            text.textContent = star.dataset.text;

            image.src = star.dataset.image;

            document.getElementById("dataJourneyBtn").style.display = "none";

            modal.style.display = "flex";

        });

    });

    closeBtn.addEventListener("click", () => {

        modal.style.display = "none";

        document.getElementById("dataJourneyBtn").style.display = "inline-block";

    });

    window.addEventListener("click", (e) => {

        if (e.target === modal) {

            modal.style.display = "none";

            document.getElementById("dataJourneyBtn").style.display = "inline-block";

        }

    });

    // =========================
    // CHAPTER 2 NAVIGATION
    // =========================

    const dataJourneyBtn = document.getElementById("dataJourneyBtn");

    if (dataJourneyBtn) {

        dataJourneyBtn.addEventListener("click", () => {

            document.getElementById("memories").style.display = "none";

            document.getElementById("storyData").style.display = "block";

            animateCounters();

            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });

        });

    }

    // =========================
    // COUNTER ANIMATION
    // =========================

    function animateCounters() {

        const counters = document.querySelectorAll(".counter");

        counters.forEach(counter => {

            const target = Number(counter.dataset.target);

            let current = 0;

            const increment = Math.ceil(target / 100);

            const updateCounter = () => {

                current += increment;

                if (current < target) {

                    counter.textContent = current;

                    setTimeout(updateCounter, 20);

                } else {

                    counter.textContent = target;

                }

            };

            updateCounter();

        });

    }






    // =========================
    // THINGS YOU TAUGHT ME
    // =========================

    const lessonBtn = document.getElementById("lessonBtn");

    if (lessonBtn) {

        lessonBtn.addEventListener("click", () => {

            document.getElementById("storyData").style.display = "none";

            document.getElementById("lessons").style.display = "block";

            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });

        });

    }


    




    // =========================
    // GOODBYE CHAPTER
    // =========================

    const apologyBtn = document.getElementById("apologyBtn");

    if (apologyBtn) {

        apologyBtn.addEventListener("click", () => {

            document.getElementById("lessons").style.display = "none";

            document.getElementById("goodbyeChapter").style.display = "block";

            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });

        });

    }














    const goodbyeBtn = document.getElementById("goodbyeBtn");

    if (goodbyeBtn) {

        goodbyeBtn.addEventListener("click", () => {

            document.getElementById("goodbyeChapter").style.display = "none";

            document.getElementById("apologySection").style.display = "block";

            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });

        });

    }














    // ============================
    // QUIZ CHAPTER
    // ============================

    const quizData = [

    {
        question: "What made every train journey worth it?",
        answers: [
            "Mumbai Local",
            "Window Seat",
            "Seeing You At The End Of It",
            "The Destination"
        ],
        emoji: "🚆",
        message:
        "No journey ever felt long when I knew it ended with you."
    },

    {
        question: "What was my role while cooking together?",
        answers: [
            "Master Chef",
            "Food Critic",
            "Standing Beside You Pretending To Help",
            "Washing Dishes"
        ],
        emoji: "🍳",
        message:
        "I probably wasn't helping much, but I loved every minute of it."
    },

    {
        question: "If I were there right now, how should you punish me?",
        answers: [
            "🧹 Jhaadu",
            "👡 Chappal",
            "🪵 Stick",
            "☁️ Takiya"
        ],
        special: true
    },

    {
        question: "What was your favourite nickname that I used to call you?",
        input: true
    },

    {
        question: "Is there any song that still reminds you of us?",
        song: true
    }

    ];

    let currentQuestion = 0;

    const questionEl =
    document.getElementById("quizQuestion");

    const answersEl =
    document.getElementById("quizAnswers");

    const animationEl =
    document.getElementById("quizAnimation");

    const nextQuizBtn =
    document.getElementById("nextQuizBtn");

    function loadQuestion() {

        nextQuizBtn.style.display = "none";

        answersEl.innerHTML = "";

        animationEl.innerHTML = "";

        const q = quizData[currentQuestion];

        questionEl.innerText = q.question;

        // INPUT QUESTION

        if (q.input) {

            answersEl.innerHTML = `
                <input
                    type="text"
                    id="nicknameInput"
                    class="quiz-input"
                    placeholder="Type your answer">

                <button class="answer-btn" id="submitNickname">
                    Show Memory ❤️
                </button>
            `;

            setTimeout(() => {

                document
                .getElementById("submitNickname")
                .addEventListener("click", () => {

                    const value =
                    document.getElementById("nicknameInput").value;

                    animationEl.innerHTML = `
                        <div class="animation-item">❤️</div>

                        <h2>${value}</h2>

                        <p>
                        Every time I called you that,
                        it felt like our own little language.
                        </p>
                    `;

                    nextQuizBtn.style.display = "inline-block";

                });

            }, 50);

            return;
        }

        // SONG QUESTION

        if (q.song) {

            answersEl.innerHTML = `
                <input
                    type="text"
                    id="songInput"
                    class="quiz-input"
                    placeholder="Type song name">

                <button class="answer-btn" id="submitSong">
                    Show Memory 🎵
                </button>
            `;

            setTimeout(() => {

                document
                .getElementById("submitSong")
                .addEventListener("click", () => {

                    const value =
                    document.getElementById("songInput").value;

                    animationEl.innerHTML = `
                        <div class="animation-item">🎵</div>

                        <h2>${value}</h2>

                        <p>
                        If memories had a soundtrack,
                        this would probably be one of them.
                        </p>
                    `;

                    nextQuizBtn.style.display = "inline-block";

                });

            }, 50);

            return;
        }

        // NORMAL QUESTIONS

        q.answers.forEach(answer => {

            const btn =
            document.createElement("button");

            btn.className = "answer-btn";

            btn.innerText = answer;

            btn.onclick = () => {

                if (q.special) {

                    if (answer.includes("Jhaadu")) {

                        animationEl.innerHTML =
                        `
                        <div class="animation-item">🧹</div>
                        <p>Fair enough. I probably deserve that 😅</p>
                        `;
                    }

                    else if (answer.includes("Chappal")) {

                        animationEl.innerHTML =
                        `
                        <div class="animation-item">👡</div>
                        <p>Ouch 😅 I'll accept that punishment.</p>
                        `;
                    }

                    else if (answer.includes("Stick")) {

                        animationEl.innerHTML =
                        `
                        <div class="animation-item">🪵</div>
                        <p>Anything but the stick 😂</p>
                        `;
                    }

                    else {

                        animationEl.innerHTML =
                        `
                        <div class="animation-item">☁️</div>
                        <p>The gentlest punishment possible ❤️</p>
                        `;
                    }

                } else {

                    animationEl.innerHTML =
                    `
                    <div class="animation-item">${q.emoji}</div>

                    <p>${q.message}</p>
                    `;
                }

                nextQuizBtn.style.display = "inline-block";

            };

            answersEl.appendChild(btn);

        });

    }

    nextQuizBtn.addEventListener("click", () => {

        currentQuestion++;

        if (currentQuestion < quizData.length) {

            loadQuestion();

        } else {

            questionEl.innerText = "❤️";

            answersEl.innerHTML = "";

            animationEl.innerHTML = `
                <h2>
                    These were never really questions.
                </h2>

                <p>
                    They were just a few memories
                    I wanted to relive one more time.
                </p>
            `;

            nextQuizBtn.style.display = "none";

            setTimeout(() => {

                document
                .getElementById("openApologyBtn")
                .addEventListener("click", () => {

                    document.getElementById("quizSection").style.display = "none";

                    document.getElementById("apologySection").style.display = "block";

                    window.scrollTo({
                        top: 0,
                        behavior: "smooth"
                    });

                });

            }, 100);

        }

    });

    // OPEN QUIZ

    document
    .getElementById("goodbyeBtn")
    .addEventListener("click", () => {

        document.getElementById("goodbyeChapter").style.display = "none";

        document.getElementById("quizSection").style.display = "block";

        currentQuestion = 0;

        loadQuestion();

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    });








});




