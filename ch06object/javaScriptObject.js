//자바스크립트 객체
//자바스크립트의 기본타입 (data type)은 객체이다.

// 객체란 name과 value로 구성된  property의 정렬되지 않은 집합이다.
// 프로퍼티의 값으로 함수가 올 수도 있는데 이런 프로퍼티를 메소드라고 한다.

// example
var cat = "나비";
//객체도 많은 값을 갖는 변수중 하나다.
var kitty = {name:"나비", family: "코리안 숏 헤어", age : 1, weight:0.1}
console.log(cat);
console.log(kitty.name);
console.log(kitty);
//자바스크립트에서 숫자 문자열 불리언 undefined 타입을 제외한 모든 것이 객체이다.

//객체의 프로퍼티 참조
//자바스크립트에서 객체의 프로퍼티를 참조하는 방법
//objectName.propertyName
//or
//objectName["propertyName"]

var person = {
    name: "kim",
    birth: "930410",
    pId: "1234",
    fullId: function() {
        return this.birth + this.pId;
    }
};
console.log(person.name)
console.log(person["name"])

//객체의 메소드 참조
console.log(person.fullId());
console.log(person.fullId);