//객체를 생성하는 방법
//1. Literal notation.
//2. constructor function
//3. Object.creat() method

//1. Literal notation
//각각의 프로퍼티는 이름과 값을 콜론으로 연결하고 쉼표를 사용해 다른 프로퍼티와 구분한다.
// 프로퍼티의 이름으로는 자바스크립트의 identifier나 문자열을 사용
var kitty = {
    name: "naby",
    family: "korean short hair",
    age: 1,
    weight: 0.1
};
console.log("my cat name is " + kitty.name + "and family is " + kitty["family"])

//2. constructor function
// new 연산자를 사용하여 객체를 생성하고 초기화 할 수 있음
// 자바스크립트는 원시타입을 위한 생성자를 미리 정의하여 제공
var day = new Date();
console.log(day.getFullYear());
console.log();
//자바스크립트에서 제공하는 생성자를 사용할 수 있으며,
//사용자가 직접 객체 생성자 함수 (object constructor function)을 작성하여 사용할 수도 있음
//객체 생성자 함수에 대해선 자바스크립트 프로토타입 부분을 참고

//3. Object.create() 메소드
//Object.create() 메소드는 지정된 prototype객체와 프로퍼티를 갖고 새로운 객체를 만든다.
// 사용자가 프로토타입 객체를 직접 명시 할 수 있으므로 상당히 유용하게 사용됨.
// Object.create( prototypeObject[, newProperty1, newProperty2, ...]);
//첫번째 argument로는 프로토타입으로 사용할 객체를 전달
//두번째 인수로는 새로운 객체의 추가할 프로퍼티 정보를 전달

var obj = Object.create(null, { //null prototype 사용하여 객체 생성
    x: {value: 100, enumerable: true},
    y: {value: 200, enumerable: true}
});
console.log(obj.x);
console.log(obj.y);
console.log(Object.getPrototypeOf(obj));
//객체의 프로토타입을 반환해줌