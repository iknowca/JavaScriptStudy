// this 키워드
// 자바스크립트에서 this는 해당 키워드가 사용된 자바스크립트 코드 영역을 포함하고 있는 객체를 가리킨다
// 예를 들어 메소드 내부에서 사용된 this는 해당 메소드를 포함하고 있는 객체를 가리킨다
// 또한 객체 내부에서 사용된 this 는 객체 그 자신을 가리킨다

// 객체 생성자 함수 내부에서 사용된 this는 어떤한 값도 갖지 않고 단순히 새로운 객체로 대체된다.

//객체 프로퍼티의 삭제
//자바스크립트에서 객체의 프로퍼티를 참조하는 방법
//objectName.propertyName
//or
//objectName["propertyName"]

//자바스크립트에서는 delete 키워드를 사용하여 객체의 프로퍼티를 삭제할 수 있다.
//delete objectName.propertyName;

//delete 키워드를 사용하여 프로퍼티를 삭제하면, 프로퍼티의 값 뿐만 아니라 프로퍼티 그 자체도 삭제된다.
// 이 키워드는 객체의 프로퍼티만을 삭제하기 위해 만들어졌기 때문에 함수나 변수에 사용하면 아무런동작을 하지 않는다.
function Dog(color, name, age) {
    this.color = color;
    this.name = name;
    this.age = age;
}
var myDog = new Dog("white", "happy", 1);
delete myDog.age;
console.log(myDog.age);

//객체 프로퍼티의 순회
// 자바스크립트에서는 for /in 문을 사용해서 객체의 모든 프로퍼티를 순회할 수 있다.
// for/in 문은 객체의 모든 열거할 수 있는 프로퍼티(enumerable properties)를 손쉽게 순회할 수 있도록 해준다.

//객체의 프로퍼티를 순회하는 방법으로는 for/in문 이외에도 다음과 같은 메소드가 있다.
//1. Object.keys() ->  해당 객체가 갖는 고유 프로퍼티 중에서 열거할 수 있는 프로퍼티의 이름을 배열에 담아 반환한다.
//2. Object.getOwnPropertyNames() -> 해당 객체가 갖는 모든 고유 프로퍼티의 이름을 배열에 담아 반환한다.

var Cat = {color: "white", name: "nave", age: 3};
Object.defineProperty(Cat, 'color', {enumerable: false})
//color 프로퍼티의 enumerable속성을 false함
console.log(Object.keys(Cat))
console.log(Object.getOwnPropertyNames(Cat));

//객체간의 비교
//자바스크립트에선 별개의 두 객체는 프로퍼티의 값이 모두 같아도, 절대로 같다고 말할 수 없다.
function Dog(color, name, age) {
    this.color = color;
    this.name = name;
    this.age = age;
}
var myDog = new Dog("흰색", "마루", 1);
var hisDog = new Dog("흰색", "마루", 1);      // 모든 프로퍼티의 값이 모두 같은 객체를 생성함.
document.write((myDog == hisDog) + "<br>");   // false
document.write((myDog === hisDog) + "<br>");  // false

var herDog = hisDog;                          // hisDog 객체를 변수 herDog에 대입함.
document.write((hisDog == herDog) + "<br>");  // true
document.write((hisDog === herDog) + "<br>"); // true