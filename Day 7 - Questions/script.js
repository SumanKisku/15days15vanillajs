const btns = document.querySelectorAll('.question-btn');

btns.forEach((btn)=> {
    btn.addEventListener('click', (e)=> {
        let question = e.currentTarget.parentElement.parentElement;
        question.classList.toggle('show-text')
    })
})