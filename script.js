const quizData = [
    {
        question: "Parmi ces chaînes youtube, laquelle seriez-vous le plus susceptible de regarder ?",
        a: "Squeezie",
        b: "Angèle",
        c: "Enjoy Phoenix",
        d: "Riding Zone",
        correct: "d",
    },
    {
        question: "Parmi ces vidéos sorties récemment, laquelle seriez-vous susceptible de regarder ?",
        a: "ON JOUE UN TOURNOI FIFA SPÉCIAL COUPE DU MONDE (ft. plein de monde) - Gotaga ",
        b: "Sunset Lover - Petit Biscuit (Clip Official)",
        c: "JE TESTE SKKN, LA MARQUE DE KIM KARDASHIAN ! - Gaelle Garcia Diaz",
        d: "Abdos 10minutes pour bruler votre gras 🔥 (intense) - Tibo InShape",
        correct: "b",
    },
    {
        question: "Quel sport pratiquerais tu ?",
        a: "E-sport ",
        b: "Danse Hip-Hop",
        c: "Cosplay",
        d: "Basket",
        correct: "a",
    },
    {
        question: "Quel événement suivrais tu ?",
        a: "Zevent",
        b: "Grammy Award",
        c: "Salon du tatouage",
        d: "GP Explorer",
        correct: "b",
    },
    {
        question: "Quel personne serais tu susceptible de suivre sur instagram ?",
        a: "Doigby",
        b: "Laylow",
        c: "Andy",
        d: "Cycliste dynamique",
        correct: "b",
    },
    {
        question: "Quels vlog regarderais tu ?",
        a: "Inoxtag ",
        b: "Bigflo et Oli",
        c: "Léna Situation",
        d: "Kalipso en vrai",
        correct: "b",
    },
    {
        question: "Quel application serais tu susceptible de télécharger ?",
        a: "Twitch",
        b: "Spotify",
        c: "Instagram",
        d: "Winamax",
        correct: "b",
    },
    {
        question: "Quel format de vidéo préfères tu ?",
        a: "Live",
        b: "Clip musicaux",
        c: "Story",
        d: "Format 9:16",
        correct: "b",
    },
    {
        question: "Parmi ces 4, lequel écouterais tu ? ",
        a: "Mastu",
        b: "Le Motif",
        c: "Bilal Hassani",
        d: "Tibo Inshape",
        correct: "b",
    },
    {
        question: "Qu’est-ce qui t’intéresse le plus sur une vidéo ?",
        a: "Montage",
        b: "Audio",
        c: "Storytelling",
        d: "Vidéo",
        correct: "b",
    },
    {
        question: "Qu’est-ce qui t’intéresse le plus sur une vidéo ?",
        a: "Montage",
        b: "Audio",
        c: "Storytelling",
        d: "Vidéo",
        correct: "b",
    },
    {
        question: "Parmi ces films/séries , laquelle regarderais tu ?",
        a: "Ready Player One",
        b: "8 mile",
        c: "Drag Race",
        d: "Everest",
        correct: "b",
    },
    {
        question: "Quel live regarderais tu ?",
        a: "Gotaga",
        b: "Les chroniques sales",
        c: "Fabian Crfx",
        d: "Rmc Sport",
        correct: "b",
    },
    {
        question: "A quel jeux-vidéo jouerais tu",
        a: "Lol",
        b: "Osu",
        c: "Animal Crossing",
        d: "FIFA",
        correct: "b",
    },
];

const quiz= document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
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
let Position = ["Jeux Vidéos", "Musique", "Beauté", "Sport"]


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
        else {
            d = d + 1;
        }

        const count  = TablMax.push(a);
        const count2 = TablMax.push(b);
        const count3 = TablMax.push(c);
        const count4 = TablMax.push(d);


        let LaValMax = Math.max(...TablMax);
        const position = TablMax.indexOf(LaValMax);
        console.log(position);

        result = Position[position];


        
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
           <h2 class="Result">D'après vos réponses vous êtes plus susceptible d'appartenir à la communauté :<span style="font-weight:600;"> ${result} </span></h2>
           <h2 class="Result">N'hésitez pas à regarder la planche en face de vous pour vous positionner ! 😉</h2>
           <button onclick="location.reload()">Reload</button>
           `
       }
    }
})

