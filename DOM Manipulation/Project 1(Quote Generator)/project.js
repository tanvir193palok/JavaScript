//Variables

let btn = document.querySelector("#new-quote");
let quote = document.querySelector(".quote");
let person = document.querySelector(".person");

const quotes  =[ {
    quote : `“The first draft is just you telling yourself the story.”`,
    person : `― Terry Pratchett`
}, {
    quote : `“Read a thousand books, and your words will flow like a river.”`,
    person : `― Lisa See`
}, {
    quote : `“Start writing, no matter what. The water does not flow until the faucet is turned on.”`,
    person: `— Louis L'Amour`
}, {
    quote : `“Every secret of a writer’s soul, every experience of his life, every quality of his mind, is written large in his works.”`,
    person : `— Virginia Woolf`
}, {
    quote : `“Don’t tell me the moon is shining; show me the glint of light on broken glass.”`,
    person : `― Anton Chekhov`
}, {
    quote : `“There is no greater agony than bearing an untold story inside you.”`,
    person : `― Maya Angelou`
}, ];

btn.addEventListener('click', function(){

    let random = Math.floor(Math.random() * quotes.length);

    quote.innerText = quotes[random].quote;
    person.innerText = quotes[random].person;
})