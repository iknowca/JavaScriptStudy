//상속
//상속이란 새로운 클래스에서 기존 클래스의 모든 프로퍼티와 메소드를 사용할 수 있는 것.

//상속을 통해 새로운 프로그램의 요구에 맞게 기존 클래스를 수정하여 재사용 가능
// 클래스 간의 종속관계를 형성하여 객체의 관계를 조직화
// 상속은 추상화, 캡슐화와 더불어 OOP 를 구성하는 중요한 특징

//단, 자바스크립트는 클래스 기반 객체지향언어가 아닌 프로토타입 기반의 객체지향언어.
// 자바스크립트에서는 현재 존재하는 객체를 프로토 타입으로 사용하여 해당 객체를 복제하여 재사용 하는 것을 상속이라고 한다.

//프로토타입
//모든 객체는 프로토타입이라는 객체를 갖고 있다.
// 모든 객체는 프로토타입으로 부터 프로퍼티와 메소드를 상속받는다.


//프로토타입 체인
//자바스크립트에서는 객체 이니셜라이저를 사용해 생성된 같은 타입의 객체들은 모두 같은 프로토 타입을 갖는다.
//또한 new연산자를 사용해 생성한 객체는 생성자의 프로토 타입을 자신의 프로토타입으로 상속받는다.
var obj = new Object(); // prototype: Object.prototype
var arr = new Array();  // prototype: Array.prototype
var date = new Date();  // prototype: Date.prototype

//단, Object.prototype객체는 어떤 프로토타입도 갖지 않으며 아무런 프로퍼티도 상속받지 않는다.
// 또한 모든 생성자는 이 객체를 프로토 타입으로 갖는다.
var date = new Date(); // 이 객체는 Date.prototype 뿐만 아니라 Object.prototype또한 프로토타입으로 갖는다.
//이러한 프로토타입이 상속되는 가상의 연결고리를 프로토타입 체인이라고 한다.
//Object.prototype은 프로토타입 체인에서 가장 상위에 존재하는 프로토타입이다

//프로토타입의 생성
//프로토타입을 생성하는 가장 기본적인 방법
//object consturtor function을 작성한다.
//생성자 함수를 작성하고 new연산자를 사용해 객체를 생성하면, 같은 프로토타입을 갖는 객체를 생성할 수 있다.
function Dog(color, name, age) {
    this.color = color;
    this.name = name;
    this.age = age;
}

var myDog = new Dog("white", "happy", 3);
console.log(myDog);

// 이미 생성된 객체에 새로운 프로퍼티나 메소드를 다음과 같이 추가할 수 있다
myDog.family = "Siberian Husky"
myDog.breed = function() {
    return this.color + " " + this.family;
}
console.log(myDog.breed())

// 프로토타입에 프로퍼티 및 메소드 추가
// 프로토타입에 새로운 프로퍼티나 메소드를 추가하는 것은 객체와는 다른방법을 사용해야 한다.
// 프로토타입의 경우에는 생성자 함수에 직접 추가해야만 이후에 생성되는 모든 다른 객체에도 적용할 수 있다.

function Dog(color, name, age) {
    this.color = color;
    this.name = name;
    this.age = age;
    this.family = "siberian Husky"; // 프로토타입에 프로퍼티를 추가할 때에는 기본 값을 갖게 할 수 있다.
    this.breed = function() {
        return this.color + " " + this.family;
    }
}
var Dog1 = new Dog("white", "happy", 1);
var Dog2 = new Dog("brown", "bro", 2);
console.log(Dog1);
console.log(Dog2);

// prototype 프로퍼티
// 프로토타입 프로퍼티를 사용하면 현재 존재하고 있는 프로토타입에 새로운 프로퍼티나 메소드를 쉽게 추가 가능하다
function Cat(color, name, age) {
    this.color = color;
    this.name = name;
    this.age = age;
}

Cat.prototype.family = "korean short hair";
Cat.prototype.breed = function() {
    return this.color + " " + this.family;
}
var Cat1 = new Cat("white", "navy", 3)
console.log(Cat1) // Cat1의 프로퍼티인 color, name, age만이 출력된다
console.log(Cat1.family) // family와 breed는 Cat1의 프로퍼티가 아닌 Cat의 프로토타입의 프로퍼티이다.
console.log(Cat1.breed())