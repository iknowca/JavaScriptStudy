//자바스크립트에서는 배열타입을 별도로 제공 X
// 배열은 object타입이며 typeof 연산자는 object를 반환

var arr = [1, true, "JavaScript"];
console.log(typeof arr);

//자바스크립트에서는 해당 변수가 배열인지 여부를 확인하기 위해 다음을 제공
// 1. Array.isArry() 메소드
// 2. instanceof연산자
// 3. constructor 프로퍼티

// 1. ECMAScript5부터 Array 클래스에 isArray() 라는 배열인지 확인하는 메소드를 추가
console.log(Array.isArray(arr));
console.log(Array.isArray("hello"))

//2. 구형 브라우저의 경우 ECMAScript5를 지원하지 않으므로 isArray()메소드가 동작 X
// 이때는 instanceof 연산자를 사용하여 해당 변수가 Array객체인지 판단하여 배열 여부를 확인.
console.log(arr instanceof Array);
console.log(123 instanceof Array);

//3.Array객체의 constructor 프로퍼티를 사용하여 배열 여부를 확인하는 방법
// 자바스크립트 배열에 대해 constructor 프로퍼티는 다음과 같은 값을 반환.
// function Array() {[native code]}
function isArray(a) {
    return a.constructor.toString().indexOf("Array") > -1;
}

console.log(arr.constructor); //constructor 프로퍼티 값 출력
console.log(arr.constructor.toString()); // function Array() {[native code]} // contructor 프로퍼티의 값을 문자열로 반환
console.log(arr.constructor.toString().indexOf("Array")); // 9 //constructor 프로퍼티의 값에서 "Array" 문자열을 찾으면 시작하는 인덱스를 반환
// 찾지 못하면 -1을 반환
console.log(isArray(arr)); // true
//변수가 Array라면 Array를 항상 포함하고 있으므로 true를 반환.