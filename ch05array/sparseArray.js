//희소배열이란 배열에 속한 요소의 위치가 연속적이지 않은 배열을 의미
//희소 배열의 경우 배열의 length 프로퍼티 값보다 배열 요소의 개수가 언제나 적다.

var arr = new Array();
arr[99] = "JavaScript";
console.log(arr);
//[ <99 empty items>, 'JavaScript' ]