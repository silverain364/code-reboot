document.addEventListener('DOMContentLoaded', function(){

const screen = document.querySelector('#display') //계산기 출력값 창
const btns = document.querySelectorAll('#buttons button') //계산기 버튼

let expression = '' // 사용자가 입력한 수식을 저장하는 변수

//2. 모든 버튼에 클릭 이벤트 추가
btns.forEach(btn => {
    btn.addEventListener('click', ()=> handleInput(btn.textContent))
})

//3. 버튼 클릭 시 동작을 처리하는 함수
function handleInput(val){
    // console.log(val);

    const lastChar = expression.slice(-1)

    if(isNumberOrDot(val)){
       appendToExpression(val)
    }
    else if(isOperator(val)){
        if(!isOperator(lastChar)) appendToExpression(val)
    }
    else if(val === "C"){
        clearExpression()
    }
    else if(val === '='){
        calculateResult()
    }
}

//4. 입력값이 숫자 '.' 확인하는 함수
function isNumber(val){
    return !isNaN(val) //true 반환
}

//5. 입력값이 연산자인지 확인하는 함수
function isOperator(val){
    return "+-*/".includes(val) //includes - 해당 문자가 매개변수의 값에 포함되었는지 확인
}

//6. 수식(expression)에 값을 추가하고 화면에 표시하는 함수 
function appendToExpression(val){
    expression += val
    screen.value = expression
}

//7. 'C' 버튼을 눌렀을 때 계산기르 초기화하는 함수
function clearExpression (){
    expression=''
    screen.value='0'
}

//8. '=' 버튼을 눌렀을 때 계산 결과를 표시하는 함수
function calculateResult(){
    try{
        const result = eval(expression) //eval를 사용해 계산 수행
        if(isFinite(result)){
            expression = String(result)
            screen.value = expression
        }
        else { 
            throw new Error('계산 오류입니다.')
        }
    } catch{
        clearExpression()
        screen.value='Error'
    }
    

}

})//end