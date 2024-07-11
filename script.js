const questions = [
    { question: "¿Cuál es el elemento más abundante en el universo?", answers: ["Hidrógeno", "Oxígeno", "Carbono", "Nitrógeno"], correct: 0 },
    { question: "¿Cuál es la fórmula química del agua?", answers: ["H2O", "CO2", "O2", "H2"], correct: 0 },
    { question: "¿Cuál es la velocidad de la luz?", answers: ["300,000 km/s", "150,000 km/s", "400,000 km/s", "200,000 km/s"], correct: 0 },
    { question: "¿Qué planeta es conocido como el planeta rojo?", answers: ["Marte", "Júpiter", "Saturno", "Venus"], correct: 0 },
    { question: "¿Qué gas es necesario para la respiración humana?", answers: ["Oxígeno", "Hidrógeno", "Nitrógeno", "Helio"], correct: 0 },
    { question: "¿Cuál es el metal más ligero?", answers: ["Litio", "Oro", "Plata", "Aluminio"], correct: 0 },
    { question: "¿Cuál es el planeta más grande del sistema solar?", answers: ["Júpiter", "Saturno", "Urano", "Neptuno"], correct: 0 },
    { question: "¿Qué tipo de energía produce el Sol?", answers: ["Energía solar", "Energía eólica", "Energía hidráulica", "Energía geotérmica"], correct: 0 },
    { question: "¿Qué partícula subatómica tiene carga negativa?", answers: ["Electrón", "Protón", "Neutrón", "Quark"], correct: 0 },
    { question: "¿Cuál es el órgano más grande del cuerpo humano?", answers: ["La piel", "El hígado", "El corazón", "Los pulmones"], correct: 0 },
    { question: "¿Cuál es el símbolo químico del oro?", answers: ["Au", "Ag", "O", "Fe"], correct: 0 },
    { question: "¿Qué es el ADN?", answers: ["Ácido desoxirribonucleico", "Ácido ribonucleico", "Ácido acetilsalicílico", "Ácido clorhídrico"], correct: 0 },
    { question: "¿Qué planeta está más cerca del Sol?", answers: ["Mercurio", "Venus", "Tierra", "Marte"], correct: 0 },
    { question: "¿Qué tipo de sangre es el donante universal?", answers: ["O negativo", "A positivo", "B negativo", "AB positivo"], correct: 0 },
    { question: "¿Quién propuso la teoría de la relatividad?", answers: ["Albert Einstein", "Isaac Newton", "Galileo Galilei", "Nikola Tesla"], correct: 0 },
    { question: "¿Qué estudia la biología?", answers: ["La vida", "Los átomos", "Los planetas", "Los minerales"], correct: 0 },
    { question: "¿Qué elemento tiene el símbolo químico 'He'?", answers: ["Helio", "Hidrógeno", "Hierro", "Hafnio"], correct: 0 },
    { question: "¿Cuál es la estrella más cercana a la Tierra?", answers: ["El Sol", "Alpha Centauri", "Sirius", "Betelgeuse"], correct: 0 },
    { question: "¿Qué órgano del cuerpo humano filtra la sangre?", answers: ["Riñones", "Corazón", "Hígado", "Pulmones"], correct: 0 },
    { question: "¿Cuál es la unidad de medida de la resistencia eléctrica?", answers: ["Ohmio", "Voltio", "Amperio", "Watt"], correct: 0 },
    { question: "¿Qué científico descubrió la penicilina?", answers: ["Alexander Fleming", "Louis Pasteur", "Marie Curie", "Isaac Newton"], correct: 0 },
    { question: "¿Cuál es el planeta más caliente del sistema solar?", answers: ["Venus", "Mercurio", "Tierra", "Marte"], correct: 0 },
    { question: "¿Qué animal es conocido como el rey de la selva?", answers: ["León", "Tigre", "Elefante", "Gorila"], correct: 0 },
    { question: "¿Qué tipo de célula tiene núcleo?", answers: ["Eucariota", "Procariota", "Bacteriana", "Viral"], correct: 0 },
    { question: "¿Qué órgano del cuerpo humano produce insulina?", answers: ["Páncreas", "Hígado", "Estómago", "Riñón"], correct: 0 },
    { question: "¿Cuál es la montaña más alta del mundo?", answers: ["Everest", "K2", "Kangchenjunga", "Lhotse"], correct: 0 },
    { question: "¿Qué tipo de energía utilizan las plantas para la fotosíntesis?", answers: ["Luz solar", "Energía eólica", "Energía térmica", "Energía nuclear"], correct: 0 },
    { question: "¿Cuál es el mineral más duro conocido?", answers: ["Diamante", "Cuarzo", "Topacio", "Corindón"], correct: 0 },
    { question: "¿Cuál es el planeta más lejano del sistema solar?", answers: ["Neptuno", "Urano", "Saturno", "Júpiter"], correct: 0 },
    { question: "¿Qué gas es el más ligero?", answers: ["Hidrógeno", "Helio", "Oxígeno", "Nitrógeno"], correct: 0 }
];

let currentQuestionIndex = 0;
let score = 0;
let timer;
let timeLeft = 60;

const questionContainer = document.getElementById('question-container');
const answerButtonsElement = document.getElementById('answer-buttons');
const nextButton = document.getElementById('next-btn');
const restartButton = document.getElementById('restart-btn');
const timerElement = document.getElementById('time');

nextButton.addEventListener('click', () => {
    currentQuestionIndex++;
    setNextQuestion();
});

restartButton.addEventListener('click', restartGame);

function startGame() {
    currentQuestionIndex = 0;
    score = 0;
    timeLeft = 60;
    startTimer();
    setNextQuestion();
}

function setNextQuestion() {
    resetState();
    showQuestion(questions[currentQuestionIndex]);
}

function showQuestion(question) {
    questionContainer.innerText = question.question;
    question.answers.forEach((answer, index) => {
        const button = document.createElement('button');
        button.innerText = answer;
        button.classList.add('btn');
        button.addEventListener('click', () => selectAnswer(button, index, question.correct));
        answerButtonsElement.appendChild(button);
    });
}

function resetState() {
    nextButton.classList.add('hide');
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild(answerButtonsElement.firstChild);
    }
}

function selectAnswer(button, selectedIndex, correctIndex) {
    Array.from(answerButtonsElement.children).forEach(btn => {
        btn.disabled = true;
        if (Array.from(answerButtonsElement.children).indexOf(btn) === correctIndex) {
            btn.classList.add('correct');
        } else {
            btn.classList.add('incorrect');
        }
    });
    if (selectedIndex === correctIndex) {
        score++;
    }
    if (currentQuestionIndex < questions.length - 1) {
        nextButton.classList.remove('hide');
    } else {
        endGame();
    }
}

function startTimer() {
    timer = setInterval(() => {
        timeLeft--;
        timerElement.innerText = timeLeft;
        if (timeLeft === 0) {
            clearInterval(timer);
            endGame();
        }
    }, 1000);
}

function restartGame() {
    clearInterval(timer);
    startGame();
}

function endGame() {
    alert(`Juego terminado! Tu puntuación es: ${score}`);
}

startGame();

// Animación de fondo con vectores como átomos
const canvas = document.getElementById('background-animation');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const atoms = [];
for (let i = 0; i < 100; i++) {
    atoms.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 3 + 1,
        dx: (Math.random() - 0.5) * 2,
        dy: (Math.random() - 0.5) * 2
    });
}

function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    atoms.forEach(atom => {
        ctx.beginPath();
        ctx.arc(atom.x, atom.y, atom.radius, 0, Math.PI * 2, false);
        ctx.fillStyle = '#00ff00';
        ctx.fill();
        ctx.closePath();

        atom.x += atom.dx;
        atom.y += atom.dy;

        if (atom.x + atom.radius > canvas.width || atom.x - atom.radius < 0) {
            atom.dx = -atom.dx;
        }
        if (atom.y + atom.radius > canvas.height || atom.y - atom.radius < 0) {
            atom.dy = -atom.dy;
        }
    });
    requestAnimationFrame(animate);
}

animate();
