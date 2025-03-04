const input = document.querySelector('.userInput');
const wordDisplay = document.querySelector('.currentWord');
const btn = document.querySelector('.submitButton');
const msg = document.querySelector('.message');

let word = '사과'

wordDisplay.textContent = word
msg.textContent = '끝말잇기 시작!'

function check(){
    const userWord = input.value.trim();

    if(!userWord){
        msg.textContent = '단어를 입력해주세요.';
        return;
    }
    const lastChar = word[word.length - 1]
    console.log(lastChar,word[0]);

    if(lastChar !== userWord[0]){
        msg.textContent = `'${lastChar}'(으)로 시작하는 단어를 입력해주세요.`
        input.value = '';
    }
    else {
        wordDisplay.textContent = userWord
        word = userWord;
        msg.textContent = '성공!'
        input.value = '';
    }
}

input.addEventListener('keypress', (e)=> {
    if(e.key === 'Enter'){
        check();
    }
    
})

btn.addEventListener('click', () => {
    check();
})

