//eval()
//문자열로 표현된 자바스크립트 코드를 실행시킴

var x = 10, y = 20;
var a = eval("x+y");
var b = eval("y*3");
console.log(a);
console.log(b);
console.log();

//isFinite()
//전달된 값이 유한한 수인지 검사
//인수로 전달된 값이 숫자가 아니라면 숫자로 변환하여 검사.
isFinite(123); //true
isFinite(123e100); // true
isFinite(true) //true
isFinite(null) //true
isFinite("123") //true
isFinite("") //true

isFinite("String") //false
isFinite(undefined) // false
isFinite(NaN) // false;

//parseFloat()
//무자열을 파싱하여 부동소수점수로 변환
parseFloat("123")
parseFloat("12 32 44") //12
parseFloat(" 123 ") // 123
parseFloat("123 초콜릿") // 123
parseFloat("초콜릿 123") // NaN

//parseInt()
//parseFloat()와 비슷
parseInt("10", 10);     // 10
parseInt("10", 8);      // 8
parseInt("10", 16);     // 16
parseInt("0x10");       // 16
// 위와같이 두번째 인수로 특정 진법을 전달하면 반환하여 정수로 반환
// 전달 받은 문자열이 0x로 시작하면 16진수로 인식

//encodeURI(), encodeURIComponent()
//encodeURI() 함수는 URI에서 주소를 표시하느 특수문자를 제외하고 모든 문자를 이스케이프 스퀀스 처리하여 부호화한다.
//encodeURIComponent() gkatnsms URI에서 encodeURI()함수에서 부호화 하지 않은 모든 문자를 이스케이프 시퀀스 처리하여 부호화한다.
var uri = "http://google.com/search.php?name=홍길동&city=서울";

var enc1 = encodeURI(uri);
var enc2 = encodeURIComponent(uri);
console.log(enc1);
console.log(enc2);
console.log();

//decodeURI(), decodeURIComponent
//encode에서 부호화된 URI를 해독
var dec1 = decodeURI(enc1);
var dec2 = decodeURIComponent(enc2);

console.log(dec1);
console.log(dec2);
console.log();

//Number() 전달받은 객체의 값을숫자로 반환
//String 전달받은 객체의 값을 문자열로 반환