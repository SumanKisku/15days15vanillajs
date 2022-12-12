// select the body
// select the btn
const bg = document.querySelector('body');
const btn = document.querySelector('.btn');

// function that return random from 0 to 255
const getRandomNumber = () => {
    return Math.floor(Math.random() * 256);
}

btn.addEventListener('click', ()=> {
    bg.style.backgroundColor = `rgb(${getRandomNumber()}, ${getRandomNumber()}, ${getRandomNumber()})`;
})

