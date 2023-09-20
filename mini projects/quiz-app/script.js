const questions = [
    {
        'que': 'How many sides does a circle have ?',
        'a': '0',
        'b': '1',
        'c': '2',
        'd': '3',
        'correct': 'a'
    },
    {
        'que': 'Whats the opposite of not-innocent?',
        'a': 'Guilty',
        'b': 'Innocent',
        'c': 'Guilty with sprinkles on top',
        'd': 'me',
        'correct': 'c'
    },
    {
        'que': 'If a cat has four legs and a dog has four legs, how many legs do a cat and a dog have together?',
        'a': '4',
        'b': '6',
        'c': '8',
        'd': 'They have 12 legs because they\'re best friends.',
        'correct': 'd'
    },
    {
        'que': 'How much wood would a woodchuck chuck if a woodchuck could chuck wood?',
        'a': '40',
        'b': 'As much wood as a woodchuck would if a woodchuck could chuck wood',
        'c': '3.14 cubic meters',
        'd': 'Woodchucks don\'t chuck wood; they\'re too busy with other hobbies.',
        'correct': 'd'
    }
]
let index = 0;
let total = questions.length;
let right = 0 ;
let wrong = 0 ; 
const quesBox = document.getElementById('quesBox')
const optionInputs = document.querySelectorAll('.option')
const loadQuestion = () => {
    if(index >= total){
        return endQuiz();
    }
    reset();
    const data = questions[index];
    console.log(data);
    quesBox.innerText = `${index + 1}.${data.que}`;
    optionInputs[0].nextElementSibling.innerText = data.a;
    optionInputs[1].nextElementSibling.innerText = data.b;
    optionInputs[2].nextElementSibling.innerText = data.c;
    optionInputs[3].nextElementSibling.innerText = data.d;
 
}

const submitQuiz = () => {
    const data = questions[index];
    const ans = getAnswer();
    if(ans == data.correct){
        right++;
    }
    else{
        wrong++; 
    }
    index++; 
    loadQuestion();
    return;
}

const getAnswer = () => {
    let answer;
    optionInputs.forEach(
    (input) => {
        if (input.checked) {
         answer= input.value;
        }
    });
    return answer;
}

const reset = () => {
    optionInputs.forEach(
        (input) => {
         input.checked = false;
        });
}


const endQuiz = () => {
    const box = document.querySelector('.box');
    box.innerHTML = `<h3>Thank you for playing</h3> <h2>${right} / ${total} are correct ! </h2>`;
}

loadQuestion();
