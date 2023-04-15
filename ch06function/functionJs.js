//자바스크립트에서는 함수도 하나의 datatype.
// 함수를 변수에 대입하거나 함수에 프로퍼티를 지정하는 것도 가능하다.
// 또한 자바스크립트 함수는 다른 함수 내에 중첩되어 정의 될 수 있음.

// 함수의 정의 자바스크립트에서 함수의 정의는 function 키워드로 시작된다.
// 1. 함수의 이름
// 2. 괄호 안에 쉼표로 구분되는 함수의 파라미터
// 3. 중괄호로 둘러싸인 자바스크립트 실행문
//function functionaName (parameter1, parameter2, ... ) { statement}
// function name 은 function 을 구분하는 idnetifier이다.
// parameter란 function 을 호출할 때 argument로 전달된 값을 함수 내부에서 사용할 수 있게 해주는 variable.

function addNum(x, y) {
    console.log(x + y);
}

addNum(10, 20);