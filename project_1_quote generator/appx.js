// variables

let btn = document.querySelector('#new-quote')
let quote = document.querySelector('.quote')
let person = document.querySelector('.person');

const quotes = [{
    quote : `"The best way to find yourself is to lose yourself in the service of others."`,
    person : `mahatma Gandhi`
}, {
    quote: `"If you want to live a happy life, tie it to a goal, not to people or things."`,
    person : `Albert Einstein`
}, {
    quote: `"At his best, man is the noblest of all animals; seperated from law and justice he is the worst"`,
    person: 'Aristole'
},{
    quote: `"Your time is limited,so dont waste it living someone else's life."`,
    person: `stevejobs`
},{
    quote: `"Tell me and i forget. Teach me and i remember. Involve me and i learn"`,
    person: `Benjamin Franklin`
},];

btn.addEventListener('click', function(){
    let random = Math.floor(Math.random() * quotes.length);
    quote.innerText = quotes[random].quote;
    person.innerText = quotes[random].quote;
})