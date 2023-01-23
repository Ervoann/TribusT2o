const quizData = [
    {
        question: "Exemple de question n°1 a creer (choisir par soiree pour tester)",
        a: "Aloa 🍃",
        b: "2088 🌒",
        c: "Karkan-Fui ⚙️",
        d: "Meta 💾",
        e: "Ummo 💧",
    },
    {
        question: "Exemple de question n°2 a creer (choisir par soiree pour tester)",
        a: "Aloa 🍃",
        b: "2088 🌒",
        c: "Karkan-Fui ⚙️",
        d: "Meta 💾",
        e: "Ummo 💧",
    },
    {
        question: "Exemple de question n°3 a creer (choisir par soiree pour tester)",
        a: "Aloa 🍃",
        b: "2088 🌒",
        c: "Karkan-Fui ⚙️",
        d: "Meta 💾",
        e: "Ummo 💧",
    },
    {
        question: "Exemple de question n°4 a creer (choisir par soiree pour tester)",
        a: "Aloa 🍃",
        b: "2088 🌒",
        c: "Karkan-Fui ⚙️",
        d: "Meta 💾",
        e: "Ummo 💧",
    },
    {
        question: "Exemple de question n°5 a creer (choisir par soiree pour tester)",
        a: "Aloa 🍃",
        b: "2088 🌒",
        c: "Karkan-Fui ⚙️",
        d: "Meta 💾",
        e: "Ummo 💧",
    },
    {
        question: "Exemple de question n°6 a creer (choisir par soiree pour tester)",
        a: "Aloa 🍃",
        b: "2088 🌒",
        c: "Karkan-Fui ⚙️",
        d: "Meta 💾",
        e: "Ummo 💧",
    },
    {
        question: "Exemple de question n°7 a creer (choisir par soiree pour tester)",
        a: "Aloa 🍃",
        b: "2088 🌒",
        c: "Karkan-Fui ⚙️",
        d: "Meta 💾",
        e: "Ummo 💧",
    },
    {
        question: "Exemple de question n°8 a creer (choisir par soiree pour tester)",
        a: "Aloa 🍃",
        b: "2088 🌒",
        c: "Karkan-Fui ⚙️",
        d: "Meta 💾",
        e: "Ummo 💧",
    },
];

const quiz= document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const e_text = document.getElementById('e_text')
const submitBtn = document.getElementById('submit')
const start_btn = document.querySelector(".start_btn button");
const info_box = document.querySelector(".info_box");
const exit_btn = info_box.querySelector(".quit");
const continue_btn = info_box.querySelector(".buttons .restart");

quiz.style.display = 'none';
info_box.style.display = 'none';


let currentQuiz = 0
let score = 0
let final = []

// if startQuiz button clicked
start_btn.onclick = ()=>{
    info_box.classList.add("activeInfo"); //show info box
    start_btn.style.display = 'none';
    info_box.style.display = 'block';
}

// if exitQuiz button clicked
exit_btn.onclick = ()=>{
    info_box.classList.remove("activeInfo"); //hide info box
    start_btn.style.display = 'block';
    info_box.style.display = 'none';
}

// if continueQuiz button clicked
continue_btn.onclick = ()=>{
    info_box.classList.remove("activeInfo"); //hide info box
    quiz.style.display = 'block';
    info_box.style.display = 'none';
    start_btn.style.display = 'none';
    loadQuiz()
}


function loadQuiz() {

    deselectAnswers()

    const currentQuizData = quizData[currentQuiz]

    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
    e_text.innerText = currentQuizData.e
}

function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false)
}

function getSelected() {
    let answer
    answerEls.forEach(answerEl => {
        if(answerEl.checked) {
            answer = answerEl.id
        }
    })
    return answer
}


    
let a = 0;
let b = 0;
let c = 0;
let d = 0;
let e = 0;
let Position = ["Aloa", "2088", "Karkan-Fui", "Meta", "Ummo"];
let Tribus = ["./src/Img/Résultats/Aloa.png", "./src/Img/Résultats/2088.jpg", "./src/Img/Résultats/Karkan.png", "./src/Img/Résultats/Meta.png", "./src/Img/Résultats/Ummo.png"];


submitBtn.addEventListener('click', () => {
    const answer = getSelected()

    const count = final.push(answer);

    for(var i= 0; i < answer.length; i++) {
        let TablMax = []

        if (answer[i] === "a") {
            a = a + 1;
        }
        else if (answer[i] === "b") {
            b = b + 1;
        }
        else if ( answer[i] === "c") {
            c = c + 1;
        }
        else if ( answer[i] === "d") {
            d = d + 1;
        }
        else {
            e = e + 1;
        }

        const count  = TablMax.push(a);
        const count2 = TablMax.push(b);
        const count3 = TablMax.push(c);
        const count4 = TablMax.push(d);
        const count5 = TablMax.push(e);

        let LaValMax = Math.max(...TablMax);
        const position = TablMax.indexOf(LaValMax);
        console.log(position);

        result = Position[position];
        Tribu = Tribus[position];

        
      }

    if(answer) {
       if(answer === quizData[currentQuiz].correct) {
           score++
       }

       currentQuiz++

       if(currentQuiz < quizData.length) {
           loadQuiz()
       } else {
           quiz.innerHTML = `
           <div class="Container">
           <h2 class="Result">D'après tes réponses, tu appartiens à la tribu :<span style="font-weight:600;"> ${result} </span></h2>
           <h2 class="Result">N'hésite pas à partager en story insta ta tribu en nous identifiant pour <span style="font-weight:600;">gagner ta place</span> ! 😉</h2>
           <img src="${Tribu}"/>
           <a href="${Tribu}" download><button class="Download">Telecharge ton resultat</button></a>
           <button onclick="location.reload()" class="quit">Relancer le quiz</button>
           </div>
           `
       }
    }
})

