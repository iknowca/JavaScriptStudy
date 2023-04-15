var arr = new Array(3);
for (var row = 0; row < 3; row++) {
    arr[row] = new Array(4);
    for(var column = 0; column < 4; column++) {
        arr[row][column]= "[" + row + ", " + column+"]";
        console.log(arr[row][column]);
    }
}