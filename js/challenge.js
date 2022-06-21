// ELEMENTS
const timer = document.getElementById("counter");
const plus = document.getElementById("plus");
const minus = document.getElementById("minus");
const heart = document.getElementById("heart");
const pause = document.getElementById("pause");
const submit = document.getElementById("submit");


// TIMER FUNCTION
function timerEvent() {
    let parsedTimer = parseInt(timer.innerText)
    timer.innerText = parsedTimer += 1;
};


// INCREMENT FUNCTION
plus.addEventListener('click', () => {
    let parsedTimer = parseInt(timer.innerText)
    timer.innerText = parsedTimer += 1;
});



// DECREMENT FUNCTION
minus.addEventListener('click', () => {
    let parsedTimer = parseInt(timer.innerText)
    timer.innerText = parsedTimer -= 1;
});



// LIKE FUNCTION
heart.addEventListener('click', likeComment);
let likeCounter = 0;
let currentTime = 0;
let likeList = document.querySelector('ul.likes');

function likeComment() {
    if (timer.innerText === currentTime) {
        likeCounter++;
        likeList.lastElementChild.remove()
        let likeEvent = document.createElement('p');
        likeEvent.innerText = `${currentTime} has been liked ${likeCounter} times.`
        likeList.appendChild(likeEvent)
    } else {
        currentTime = timer.innerText;
        likeCounter = 0;
        likeCounter++;
        let likeEvent = document.createElement('p');
        likeEvent.innerText = `${currentTime} has been liked ${likeCounter} time.`
        likeList.appendChild(likeEvent)
    }
}




// PAUSE FUNCTION
let pauseEvent = false;
let timerCurrently = setInterval(timerEvent, 1000);

function pauseAction() {
    clearInterval(timerCurrently);
    plus.disabled = true;
    minus.disabled = true;
    heart.disabled = true;
    submit.disabled = true;
    pause.innerText = "resume";
};

function unpauseAction() {
    timerCurrently = setInterval(timerEvent, 1000);
    plus.disabled = false;
    minus.disabled = false;
    heart.disabled = false;
    submit.disabled = false;
    pause.innerText = "pause";
};

pause.addEventListener('click', () => {
    if (pauseEvent === false) {
        pauseEvent = true;
        pauseAction();
    } else {
        pauseEvent = false;
        unpauseAction();
    }
});



// RESET BUTTON
const reset = document.createElement("button");
reset.innerText = "reset";
pause.after(reset);
reset.style = 'margin: 4px'

reset.addEventListener('click', () => {
    timer.innerText = 0;
    clearInterval(timerCurrently);
    timerCurrently = setInterval(timerEvent, 1000);
    plus.disabled = false;
    minus.disabled = false;
    heart.disabled = false;
    submit.disabled = false;
    pause.innerText = "pause";
    pauseEvent = false;
});



// COMMENT SECTION
let commentForm = document.getElementById("comment-form");

commentForm.addEventListener('submit', (event) => {
    event.preventDefault()
    let comment = document.createElement('p')
    comment.innerText = event.target['comment-input'].value;
    document.getElementById('list').appendChild(comment)
    commentForm.reset()
})