const timeDisplay = document.querySelector('.time');
const startBtn = document.querySelector('.start');
const stopBtn = document.querySelector('.stop');
const resetBtn = document.querySelector('.reset');


let timer = null;
let seconds = 0

function updateTime(){

    const hour =  Math.floor(seconds/3600);
    const mins = Math.floor((seconds % 3600)/60)
    const secs = seconds % 60
    
    //padStart : 문자열이 한 자리 숫자일 겨우 0을 추가
    timeDisplay.textContent = `${String(hour).padStart(2, '0')}:${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`
}

function startTimer(){

    if(!timer){
        timer = setInterval(function(){
            seconds++
            updateTime()
        }, 1000)
    }
}

function stopTimer (){
    clearInterval(timer)
    timer = null
}

function resetTimer (){
    clearInterval(timer)
    seconds = 0 
    timer = null
    updateTime();
}

startBtn.addEventListener('click',startTimer);
stopBtn.addEventListener('click', stopTimer)
resetBtn.addEventListener('click', resetTimer)
updateTime();