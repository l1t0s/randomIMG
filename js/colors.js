const Mybutton = document.querySelector('button');
const colors = ["red", "blue", "green", "black"];
const Mybox = document.querySelector('.box');

Mybutton.addEventListener('click', changerColor);

function changerColor() {
    console.log(Mybox);

    let randomIndex = Math.floor(Math.random() * colors.length);
    Mybox.style.backgroundColor = colors[randomIndex];
    console.log(randomIndex);
}