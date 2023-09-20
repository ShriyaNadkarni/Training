//Dom manipulation
const head = document.querySelector('#main-heading');
// console.log(head);
head.style.fontFamily ='cursive';

 

//getElementby id()
// const title = document.getElementById('main-heading');
// console.log(title);


//getelementby classname()
// const listItem = document.getElementsByClassName('list-items');
// console.log(listItem);


//getelementsby tag name()
// const listItems  = document.getElementsByTagName('li');
// console.log(listItems);


//query selector()
// const container = document.querySelector('div');
// console.log(container);


//queryselectorall()
// const justTry =  document.querySelectorAll('div');
// console.log(justTry);


// const animatedBox = document.querySelector('#animatedBox');
        
//         animatedBox.addEventListener('click', () => {
//             animatedBox.style.animationPlayState = 'paused';
//         });


// const lists = document.querySelectorAll('.list-items');

// for( i=0 ;i<lists.length;i++){
//     lists[i].style.fontSize = '2rem';
//     console.log(lists[i].innerText);
//     console.log(lists[i].textContent);
//     console.log(lists[i].innerHTML);
// }

const ul = document.querySelector('ul');
const li = document.createElement('li');

//adding elements 
ul.append(li);



//modifying the text 
li.innerText = 'X-man';
li.setAttribute('id','main-heading');
li.removeAttribute('id');

const title = document.querySelector('#main-heading');
console.log(title.getAttribute('id'));

li.classList.remove('list-items');
console.log(li.classList.contains('list-items'));




