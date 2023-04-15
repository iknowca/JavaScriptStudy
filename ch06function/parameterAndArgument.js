//parameter
//자바스크립트에서는 함수를 정의할 때는 매개 변수의 타입을 따로 명시하지 않는다.
// 함수를 호출 할 때에도 argument로 전달 된 값에 대해 어떠한 타입 검사도 하지 않는다.

// 함수를 호출할 때 함수의 정의보다 적은 수의 argument가 전달되더라도 다른 언어와는 달리 오류를 발생시키지 않는다.
//이 같은 경우 자바스크립트는 전달되지 않은 나머지 매개변수에 자동으로 undefined값을 설정한다

//parameter란 함수의 정의에서 전달 받은 인수를 함수 내부로 전달하기 위해 사용하는 변수를 의미
//argument란 함수가 호출 될 때 함수로 값을 전달해주는 값을 의미

function addNum(x, y, z){
    return x + y + z;
}

addNum(1, 2, 3); // argument로 1, 2, 3을 전달하여 함수를 호출함 -> 6
addNum(1, 2); // 전달된 인수가 파라미터의 수보다 적기때문에 -> NaN 계산 할 수 없다는 의미
addNum(1); // 전달되지 않은 나머지 인수가 undefined로 설정되기 때문에 산술 연산을 수행 할 수 없다.
addNum();

function addNum2(x, y, z) {
    if (x===undefined)
        x=0;
    if(y===undefined)
        y=0;
    if(z===undefined)
        z=0;
    return x+ y + z;
}
addNum2(1, 2, 3);
addNum2(1, 2);
addNum2(1);
addNum2();
//위와 같은 방식으로 전달된 인수만 갖고 정상적으로 계산하는 함수를 작성 할 수 있다.

//arguments 객체
//만약 parameter보다 많은 수의 argument가 전달되면, parameter에 대입되지 못한 인수들은 참조할 방법이 없다.
//하지만 arguments객체를 이용하면, 함수로 전달된 인수의 총 개수를 확인하거나, 각각의 인수에도 바로 접근할 수 있다.

function addNums() {
    var sum=0;
    for(var i=0; i<arguments.length; i++) {
        sum += arguments[i];
    }
    console.log(sum);
}

addNums(1, 2, 3,4);
addNums();
addNums(1, 2, 3 ,5, 6, 7, 8 ,9);
console.log();
// arguments객체는 배열과 비슷할 뿐 실제로 Array객체는 아니다.
// 숫자로 된 인덱스와 length프로퍼티만 갖고 있으며, 모든 것을 배열처럼 다룰 수는 없다.

//default parameter와 rest parameter

//default parameter
//함수를 호출 할대 명시된 인수를 전달하지 않을 경우에 사용하게 될 기본값을 의미
//자바 스크립트에서 parameter의 기본 값은 undefined로 설정되어있음
function mul(a, b) {
    b = (typeof b!=='undefined')? b:1;
    return a*b;
}
console.log(mul(3, 4));
console.log(mul(3));
console.log();
//위 함수를 default parameter를 사용하면

function mul2(a, b=1) {//argument가 하나만 전달되면 a에 할당되고 b는 1로 설정해줌
    return a * b
}
console.log(mul2(3, 4));
console.log(mul2(3));
console.log();
//*주의: 익스플로러, *사파리*, 오페라에서는 지원하지 않을 수 있다.

//rest parameter
//생략 접두사 (...) 를 사용하여특정 위치의 인수부터 마지막 인수까지를 한 번에 지정할 수 있음.
// 첫번째 인수에서 두번째 인수부터 마지막까지 인수까지를 뺀후 그 결과를 반환하는 예제
function sub() {
    var firstNum = arguments[0];
    for(var i=1; i<arguments.length; i++) {
        firstNum -= arguments[i];
    }
    return firstNum;
}
console.log(sub(10, 2, 3));
console.log(sub(10, 1, 5, 8));
console.log();

//using rest parameter
// 첫번째 인수를 제외한 나머지 인수를  배열 restArgs에 저장한다.
function sub2(firstNum, ...restArgs) {
    for (var i=0; i < restArgs.length; i++) {
        firstNum -= restArgs[i];
    }
    return firstNum;
}
console.log(sub2(10, 2, 3));
console.log(sub2(10, 1, 5, 8));
console.log();
