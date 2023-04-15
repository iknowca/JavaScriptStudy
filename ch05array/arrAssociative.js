//연관배열 (associative array)
//자바 스크립트에서는 배열의 인덱스에는 0을 포함한 양의 정수만을 사용할 수 있다.
// 숫자로 된 인덱스 대신에 문자열로 된 key를 사용하는 배열을 연관 배열이라고 함
// 자바에서의 Map과 비슷한 느낌

var arr = [];
arr["하나"] = 1; //숫자 인덱스 대신에 문자열을 인덱스로 하는 배열요소를 추가함.
arr["참"] = true;
arr["자바스크립트"] = "JavaScript";

console.log(arr["참"]);
console.log(arr.length);
console.log(arr[0]);