//함수 호이스팅
// 자바스크립트에서 함수의 유효 범위라는 것은 함수 안에서 선언된 모든 변수는 참수 전체에 걸쳐 유효하다는 의미이다.

// 그런데 이 유효범위의 적용이 변수가 선언되기도 전에도 똑같이 적용된다.
// 이러한 자바스크립트의 특징을 함수 호이스팅(hoising)이라고 한다.
// 즉 자바스크립트 함수 안에 있는 모든 변수의 선언은 함수의 맨 처음으로 이동된 것처럼 동작.

var globalNum=10; //global 을 전역 변수로 선언
function printNum() {
    console.log("지역변수 globalNum 선언 전의 globalNum: " + globalNum);
    var globalNum = 20;
    console.log("지역변수 globalNum 선언 후의 globalNum: " + globalNum);

}
printNum();
//위의 코드는 함수 호이스팅에 의해 다음과 같이 코드가 변경되어 처리된다.
//
// var globalNum=10; //global 을 전역 변수로 선언
// function printNum() {
//     console.log("지역변수 globalNum 선언 전의 globalNum: " + globalNum);
//     var globalNum = 20;
//     console.log("지역변수 globalNum 선언 후의 globalNum: " + globalNum);
//
// }
// 즉 globalNum이라는 지역변수가 선언만 되어 있고 아직 초기화가 안된 상태이기때문에 undefined라는 값을 반환하게 된다.
// 실제로 변수가 초기화 되는 시점은 원래 코드에서 변수가 선언된 시점이다.