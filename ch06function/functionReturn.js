//return
// javascript에서는 function은 return문을 포함할 수 있다.
// return을 통해 호출자는 function에서 실행된 결과를 전달 받을 수 있다.


// return은 함수의 실행을 중단하고, return keyword 다음에 명시된 표현식의 값을 호출자에게 반환.
// return은 array나 object를 포함한 모든 타입의 값을 반환한다.

function multiNum(x, y) {
    return x * y;
}
var num = multiNum(3, 4);
console.log(num);

//정의된 function은 프로그램 내에서 호출되어야 실행된다.
// 일반적인 function의 호출은 function의 definition과 같은 형태로 호출할 수 있음.

//javaScript에서 function은 문법적 구문일 뿐만 아니라 값이기도 함.
// 따라서 함수가 변수에 대입될 수도 있으며, 다른 삼수의 인수로 전달 될 수도 있음.

function sqr(x) {
    return x * x;
}

var sqrNum = sqr;
console.log(sqr(4));
console.log(sqrNum(4));