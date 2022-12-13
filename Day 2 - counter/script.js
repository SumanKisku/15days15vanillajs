// initializing counter value
let count = 0;

// selecting the counter value
let value = document.getElementById("value");
value.innerText = count;

const increase = document.querySelector('.increase');
const decrease = document.querySelector('.decrease');
const reset = document.querySelector('.reset');

// increase the counter
increase.addEventListener('click', ()=> {
    count++;
    value.innerText = count;
    setColor();
})

// decrease the counter
decrease.addEventListener('click', ()=> {
    count--;
    value.innerText = count;
    setColor();
})

// reset
reset.addEventListener('click', ()=> {
    count = 0;
    value.innerText = count;
    setColor();
})

// setting color for counter
const setColor = () => {
    if(count > 0) {
        value.style.color = "green";
    } else if (count < 0) {
        value.style.color = "red";
    } else {
        value.style.color = "initial";
    }
}
