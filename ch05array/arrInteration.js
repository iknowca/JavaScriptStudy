//배열의 순회
// 배열의 모든 요소에 차례대로 접근하고 싶을 때는 for 문과 반복문을 사용할 수 있다.
var arr = [1, true, "JavaScript"]
var result = "<table><tr>";

for(var idx in arr) {
    result += "<td>" + arr[idx] + "</td>";
}

result += "</tr></table>";

document.write(result);