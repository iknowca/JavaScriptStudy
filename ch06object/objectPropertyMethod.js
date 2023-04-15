//객체 프로퍼티
//모든 자바스크립트 객체는 오브젝트 객체와 object.prototype 객체의 모든 프로퍼티를 상속 받는다.
//prototype 프로퍼티를 이용하면 현재 존재하는 프로토타입에 새로운 프로퍼티나 메소드를 손쉽게 추가할 수 있다.

//객체 메소드
//모든 자바스크립트 객체는 object객체와 object.prototype 객체의 모든 프로퍼티와 메소드를 상속바든낟.
//자주 사용되는 대표적인 객체 메소드는 다음이 있다.
//1. hasOwnProperty()
//2. propertyIsEnumerable()
//3. isPrototypeOf()
//4. isExtensible()
//5. toString()
//6. valueOf()

function Dog(color, name, age, family) {
    this.color = color;
    this.name = name;
    this.age = age;
    this.family = family;
    this.breed = function() {
        return this.color + " " + this.family;
    }
}

//1. hasOwnProperty()
//특정 프로퍼티가 해당객체에 존재하는지 검사
//해당 객체에서 직접 선언된 프로퍼티만을 검사하며, 같은 이름의 프로퍼티라도 상속받은 프로퍼티는 false를 반환한다.
var Dog1 = new Dog("black", "gon", 3, "bull");
console.log(Dog1.hasOwnProperty("color"))
console.log(Dog1.hasOwnProperty("breed"))
console.log(Dog1.hasOwnProperty("class")) // 상속받은 프로퍼티이므로 false를 반환
console.log();
//2. propertyIsEnumerable()
//특정 프로퍼티가 해당 객체에 존재하고, 열거할 수 있는 프로퍼티인지 검사
Object.defineProperty(Dog1, "color", {enumerable: false})
console.log(Dog1.propertyIsEnumerable("color"))
console.log(Dog1.propertyIsEnumerable("name"))
console.log(Dog1.propertyIsEnumerable("age"))
console.log();

//3. isPrototypeOf()
// 특정 객체의 프로토타입 체인에 현재 객체가 존재하는지 검사
var day = new Date();
console.log(Date.prototype.isPrototypeOf(day));
console.log(Date.prototype.isPrototypeOf(new String));
console.log()

//4. isExtensible()
// 객체에 새로운 프로퍼티를 추가할 수 있는지 여부를 검사
// 자바스크립트에서는 모든 객체는 기본적으로 새로운 프로퍼티를 추가할 수 있음
// 단 preventExtensions()메소드를 사용하여 해당 객체에 새로운 프로퍼티를 추가할 수 없도록 설정 가능
var day = new Date();
console.log(Object.isExtensible(day));

var myDay = Object.preventExtensions(day);
console.log(Object.isExtensible(myDay));
console.log(Object.isExtensible(day));

//5. toString()
// 이 메소드를 호출한 객체의 값을 문자열로 반환한다.
var arr = [10, "String", true]
var bool = false
function func1() {return 0}

console.log(arr.toString());
console.log(bool.toString());
console.log(func1.toString());
console.log();

//6. valueOf()
//특정 객체의 원시타입의 값을 반환한다.
// 원시 타입의 값이 기대되는 곳에 객체가 사용되면, 내부적으로 이 메소드를 호출하여 처리한다.
// 만약 어떤 객체가 원시 타입의 값을 갖고 있지 않다면, 이 메소드는 객체 자신을 반환한다.

function func2(n) {
    this.number = n;
}
myFunc = new func2(4);
console.log(myFunc + 5);

func2.prototype.valueOf = function() {
    //valueOf 메소드를 정의함.
    return this.number;
}
console.log(myFunc+5);
console.log();

//getter와 setter 메소드의 정의
//게터와 세터로 정의된 프로퍼티는 단순한 값을 지닌 데이터 프로퍼티와는 달리 접근자 프로퍼티라고 부른다.
// 게터는 특정 프로퍼티의 값을 받아오기 위한 메소드
// 자바스크립트는 객체의 프로퍼티에 값에 접근할 때 게터 메소드에 아무런 인수를 전달하지 않고 호출한다.
var gildong = {age: 18};
console.log(gildong.age)

Object.defineProperty(gildong, "americanAge", { get: function() { return this.age - 1; } });
console.log(gildong.americanAge);
//gildong 객체에 americanAge라는 프로퍼티를 추가할 때 get 키워드를 사용하여 getter메소드를 정의하였다.
//그래서 해당 프로퍼티를 참조하려고 할 때는 내부적으로 미리 정의한 getter 메소드가 자동으로 호출된다.

//setter 메소드는 특정 프로퍼티의 값을 설정하기 위한 메소드이다.
// 객체의 프로퍼티 값을 변경할 때 setter메소드에 대입하고자 하는 값을 인수로 전달하여 호출해야 한다.

Object.defineProperty(gildong, "changeAge", {set: function(n) {this.age = n}});
gildong.changeAge = 5;
console.log(gildong.age);
console.log(gildong.americanAge);