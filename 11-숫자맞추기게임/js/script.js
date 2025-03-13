const guessInput = document.querySelector('#guessInput') // 사용자 입력창
const submitBtn = document.querySelector('#submitButton') // 제출 버튼
const result = document.querySelector('.result') //결과 출력값
const attemptsText = document.querySelector('.attempts') //시도 횟수

let attempts = 0 // 시도 횟수 데이터 담는 공간

const randomNumber = Math.floor(Math.random() * 100)+1 //소숫점 제거


submitBtn.addEventListener('click', checkGuess())

guessInput.addEventListener('keyup', (e)=> { //Enter키 눌렀을 때 제출
    if(e.key === 'Enter'){
        checkGuess()
    }
})

function checkGuess() {
    const userGuess = parseInt(guessInput.value) // 사용자가 입력창에 넣은 값을 가지고 옴
    // console.log(typeof userGuess);
   console.log(randomNumber);
        
    if(isNaN(userGuess)){
        result.textContent = '숫자를 입력하세요'
        result.style.color = 'orange'
        return 
    }
    
    attempts++;
    attemptsText.textContent = attempts
    
    if(userGuess===randomNumber){
        result.textContent = `축하합니다! ${attempts}번 만에 맞췄습니다🎉`
        result.style.color = 'green'
    }
    else if(userGuess < randomNumber) {
        result.textContent = `${userGuess}보다 높은 숫자입니다🔼`
        result.style.color = 'red'
    }
    else{
        result.textContent = `${userGuess}보다 낮은 숫자입니다🔽`
        result.style.color = 'blue'
    }

    guessInput.value = ''
    guessInput.focus()

}