var lectures = ["html", "css", "javascript", "php"]
var topic= "javascript";
for(var i=0; i < lectures.length; i++) {
    if (lectures[i] == topic) {
        console.log(topic + "과목은 " + (i + 1) + "번째 과목입니다.")
        break;
    }
}
//원하는 값을 찾은 후에는 더이상 for문을 반복하지 않고 빠져나감.