
var arrLit = [1, true, "JavaScirpt"]; // 배열 리터럴을 이용하는 방법
var arrObj = Array(1, true, "JavaScript");// Arrayr객체의 생성자를 이용하는 방법
var arrNewObj = new Array(1, true, "JavaScript");// new 연산자를 이용한 Array객체 생성방법

console.log(arrLit);
console.log(arrObj);
console.log(arrNewObj);

var arr = ["JavaScript"];
var element = arr[0];

arr[1] = 10;
arr[2] = element;


console.log("배열 arr의 요소에는 " +arr+"가 있습니다");
console.log("배열 arr의 길이" + arr.length);

delete arr[2]; //배열의 세번째 요소를 삭제하지만 배열의 길이는 변하지 않는다
//delete arr[1];

console.log("배열 arr의 요소에는 " +arr+"가 있습니다");
console.log("배열 arr의 길이" + arr.length);
