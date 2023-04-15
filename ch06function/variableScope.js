// variable scope
// javascript에서 object나 function은 모두 variable이다.
// variable의 scope란 해당 variable이 접근할 수 있는 variable, object그리고 function 의 집합을 말한다.

//javascript의 variable은 scope에 따라 구분된다.
// local variable
// global variable

//local variable
// local variable이란 function내에서 선언된 variable
// 이러한 local variable은 var가 언언된 fucn내에서만 유효하며, function이 종료되면 메모리에서 사라진다.
// function의 parameter또한 function내에서 정의되는 local var처럼 동작.
function localNum() {
    var num = 10;
    console.log(typeof num);
}
localNum();
console.log(typeof num);
console.log();
//javascipt에선 선언되지 않은 var를 사용하려고 하거나 접근하려고 하면 오류를 발생시킨다.
// 하지만 선언되지 않은 변수에 대한 typeof연산자의 결과값은 undefined값을 반환.

//global variable
// func의 외부에서 선언된 변수를 가리킴
// 이런한 global var는 어느 영역에서나 접근할 수 있으며 페이지가 닫혀야 메모리에서 사라진다.
var num = 10;
function globalNum() {
    console.log("함수 내부에서 변수 num의 값은 " + num+ " 임");
    num = 20;
}
globalNum();
console.log("함수의 호출이 끝난 뒤 변수 num의 값은 " + num + "입니다");

// 위의 예제 처럼 변수는 함수의 회부 뿐만 아니라 내부에서도 접근하여 변경할 수 있다.
// 자바 스크립트에서 local 변수를 선언 할 때에는 var 키워드를 반드시 사용해야한다.
// 함수 내부에서 var키워드를 사용하지 않고 변수를 선언하면 해당 변수는 global변수가 선언된다.

function globalNum2() {
    num2 = 20;
    console.log("함수 내부에서 변수 num2의 값" + num2);
}
globalNum2()
console.log("함수 외부에서 변수 num2의 값 " + num2);

//또한 전역 변수와 같은 이름의 지역변수를 선언하면, 해당 블록에서는 해당 이름의 지역변수만 호출 가능 -> 전역변수 호출 불가능
var num3 = 1;
function globalNum3() {
    var num3 = 2;
    console.log("함수 내부에서는 지역변수가 호출 되기 때문에"+ num3);
}
globalNum3()
console.log("함수 외부에서는 지역변수는 메모리에서 사라졌고 전역변수가 호출된다 " + num3);

//위와 같은 경우 해당 블록에서 전역변수를 호출하기 위해서는, 전역변수가 window객체의 프로퍼티임을 명시하면 된다.
var num4 = 10;
function globalNum4() {
    var num4 = 20;
    document.write("함수 내부에서 num4를 그냥 호출했을 때는 지역변수 num4가 호출된다" +  num4 + "<br>");
    document.write("하지만 window 객체의 프로퍼티임을 명시하면 전역변수 window.num4가 호출된다." + window.num4);
}